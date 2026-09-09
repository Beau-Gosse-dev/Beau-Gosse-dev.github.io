#!/usr/bin/env python3
"""Download and locally transcribe podcast episodes from the production queue."""

from __future__ import annotations

import argparse
import json
import shutil
import tempfile
import urllib.request
from datetime import UTC, datetime
from pathlib import Path

from faster_whisper import WhisperModel


ROOT = Path(__file__).resolve().parents[1]
EPISODES_PATH = ROOT / "data" / "episodes.json"
DEFAULT_OUTPUT = ROOT / "data" / "transcripts"
STATUS_PATH = ROOT / "data" / "guide-status.json"


def timestamp(seconds: float) -> str:
    total = max(0, round(seconds))
    hours, remainder = divmod(total, 3600)
    minutes, secs = divmod(remainder, 60)
    return f"{hours:02d}:{minutes:02d}:{secs:02d}"


def update_status(episode: dict, transcript_path: Path) -> None:
    tracker = json.loads(STATUS_PATH.read_text(encoding="utf-8"))
    entry = tracker["episodes"].setdefault(episode["slug"], {"number": episode["number"]})
    if entry.get("status", tracker["defaultStatus"]) == "queued":
        entry["status"] = "transcribed"
    entry["transcript"] = transcript_path.relative_to(ROOT).as_posix()
    entry["updatedAt"] = datetime.now(UTC).isoformat()
    STATUS_PATH.write_text(json.dumps(tracker, indent=2) + "\n", encoding="utf-8")


def transcribe_episode(episode: dict, args: argparse.Namespace, model: WhisperModel, device: str) -> None:
    output_path = args.output_dir / f"{episode['slug']}.json"
    if output_path.exists() and not args.force:
        print(f"Skipping episode {episode['number']}; {output_path.name} already exists.")
        return

    with tempfile.TemporaryDirectory(prefix=f"civil-war-{episode['number']}-") as temp_dir:
        audio_path = Path(temp_dir) / f"episode-{episode['number']}.mp3"
        print(f"Downloading episode {episode['number']} audio...")
        request = urllib.request.Request(
            episode["audioUrl"],
            headers={"User-Agent": "CivilWarFieldCompanion/1.0"},
        )
        with urllib.request.urlopen(request) as response, audio_path.open("wb") as output:
            shutil.copyfileobj(response, output)

        print(f"Transcribing with {args.model} on {device}...")
        segments, info = model.transcribe(
            str(audio_path),
            beam_size=5,
            language="en",
            vad_filter=True,
            condition_on_previous_text=True,
        )
        transcript_segments = [
            {
                "start": round(segment.start, 3),
                "end": round(segment.end, 3),
                "timestamp": timestamp(segment.start),
                "text": segment.text.strip(),
            }
            for segment in segments
            if segment.text.strip()
        ]

    payload = {
        "episode": episode["number"],
        "slug": episode["slug"],
        "title": episode["title"],
        "audioUrl": episode["audioUrl"],
        "generatedAt": datetime.now(UTC).isoformat(),
        "generator": {"engine": "faster-whisper", "model": args.model, "device": device},
        "language": info.language,
        "languageProbability": round(info.language_probability, 4),
        "segments": transcript_segments,
        "text": " ".join(segment["text"] for segment in transcript_segments),
    }
    output_path.write_text(json.dumps(payload, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    update_status(episode, output_path)
    print(f"Saved {len(transcript_segments)} segments to {output_path}")


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    selection = parser.add_mutually_exclusive_group(required=True)
    selection.add_argument("episode", nargs="?", help="Episode number or exact slug from data/episodes.json")
    selection.add_argument("--latest", type=int, metavar="COUNT", help="Transcribe the newest numbered episodes that do not have transcripts")
    selection.add_argument("--next-guides", type=int, metavar="COUNT", help="Transcribe the highest-numbered queued guides")
    parser.add_argument("--model", default="small.en", help="faster-whisper model name")
    parser.add_argument("--output-dir", type=Path, default=DEFAULT_OUTPUT)
    parser.add_argument("--device", choices=("cpu", "cuda", "auto"), default="auto")
    parser.add_argument("--force", action="store_true", help="Replace an existing transcript")
    args = parser.parse_args()

    episodes = json.loads(EPISODES_PATH.read_text(encoding="utf-8"))
    args.output_dir.mkdir(parents=True, exist_ok=True)

    if args.episode is not None:
        selected_episode = next((item for item in episodes if item.get("slug") == args.episode), None)
        if selected_episode is None:
            try:
                episode_number = int(args.episode)
            except ValueError:
                episode_number = None
            selected_episode = next((item for item in episodes if item.get("number") == episode_number), None)
        selected = [selected_episode]
        if selected[0] is None:
            raise SystemExit(f"Episode {args.episode} was not found in {EPISODES_PATH}")
    elif args.latest is not None:
        if args.latest < 1:
            raise SystemExit("--latest must be at least 1")
        numbered = sorted((item for item in episodes if item.get("number") is not None), key=lambda item: item["number"], reverse=True)
        selected = [item for item in numbered if args.force or not (args.output_dir / f"{item['slug']}.json").exists()][:args.latest]
        if not selected:
            print("No numbered episodes need transcription.")
            return
    else:
        if args.next_guides < 1:
            raise SystemExit("--next-guides must be at least 1")
        tracker = json.loads(STATUS_PATH.read_text(encoding="utf-8"))
        numbered = sorted((item for item in episodes if item.get("number") is not None), key=lambda item: item["number"], reverse=True)
        selected = [
            item for item in numbered
            if tracker["episodes"].get(item["slug"], {}).get("status", tracker["defaultStatus"]) == "queued"
        ][:args.next_guides]
        if not selected:
            print("No queued guides need transcription.")
            return

    pending = [item for item in selected if args.force or not (args.output_dir / f"{item['slug']}.json").exists()]
    for episode in selected:
        if episode not in pending:
            print(f"Skipping episode {episode['number']}; {episode['slug']}.json already exists.")
    if not pending:
        return

    device = "cpu" if args.device == "auto" else args.device
    compute_type = "int8" if device == "cpu" else "float16"
    model = WhisperModel(args.model, device=device, compute_type=compute_type)
    for episode in pending:
        transcribe_episode(episode, args, model, device)


if __name__ == "__main__":
    main()

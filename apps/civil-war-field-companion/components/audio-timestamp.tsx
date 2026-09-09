'use client';

export function AudioTimestamp({ seconds, label }: { seconds: number; label: string }) {
  const playFromTimestamp = () => {
    const audio = document.querySelector<HTMLAudioElement>('#episode-audio');
    if (!audio) return;
    audio.currentTime = seconds;
    void audio.play();
  };

  return <button className="audio-timestamp" type="button" onClick={playFromTimestamp} aria-label={`Play episode from ${label}`}>{label}</button>;
}

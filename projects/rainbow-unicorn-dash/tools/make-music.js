// Renders tools/make-music.html in headless Chrome and writes ../theme.mp3.
// Usage: node tools/make-music.js   (needs Chrome and ffmpeg)
const { spawn, execFileSync } = require('child_process');
const fs = require('fs'), path = require('path'), os = require('os');

const CHROME = process.env.CHROME || 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const FFMPEG = process.env.FFMPEG || 'ffmpeg';
const here = __dirname, out = path.join(here, '..', 'theme.mp3');
const port = 9333, profile = fs.mkdtempSync(path.join(os.tmpdir(), 'rud-chrome-'));

const chrome = spawn(CHROME, ['--headless=new', '--disable-gpu', `--remote-debugging-port=${port}`,
  `--user-data-dir=${profile}`, '--autoplay-policy=no-user-gesture-required', 'about:blank'], { stdio: 'ignore' });

const sleep = ms => new Promise(r => setTimeout(r, ms));
async function main() {
  let target;
  for (let i = 0; i < 50 && !target; i++) {
    try { target = (await (await fetch(`http://127.0.0.1:${port}/json/list`)).json()).find(t => t.type === 'page'); }
    catch { await sleep(200); }
  }
  const ws = new WebSocket(target.webSocketDebuggerUrl);
  await new Promise(r => ws.addEventListener('open', r, { once: true }));
  let id = 0; const pending = new Map();
  ws.addEventListener('message', e => { const m = JSON.parse(e.data); if (pending.has(m.id)) { pending.get(m.id)(m); pending.delete(m.id); } });
  const send = (method, params) => new Promise(r => { pending.set(++id, r); ws.send(JSON.stringify({ id, method, params })); });
  const evaluate = async expression => {
    const r = await send('Runtime.evaluate', { expression, awaitPromise: true, returnByValue: true });
    if (r.result.exceptionDetails) throw new Error(JSON.stringify(r.result.exceptionDetails));
    return r.result.result.value;
  };

  await send('Page.navigate', { url: 'file:///' + path.join(here, 'make-music.html').replace(/\\/g, '/') });
  await sleep(1500);
  const info = await evaluate('renderMusic()');
  console.log('rendered', info);
  const parts = [], CHUNK = 3 * 1024 * 1024;
  for (let i = 0; i < info.bytes; i += CHUNK) parts.push(Buffer.from(await evaluate(`wavChunk(${i}, ${CHUNK})`), 'base64'));
  const wav = path.join(os.tmpdir(), 'rud-theme.wav');
  fs.writeFileSync(wav, Buffer.concat(parts));
  ws.close();
  execFileSync(FFMPEG, ['-y', '-loglevel', 'error', '-i', wav, '-codec:a', 'libmp3lame', '-b:a', '128k', out]);
  console.log('wrote', out, fs.statSync(out).size, 'bytes');
  console.log(`loop points for index.html: LOOP_START = ${info.loopStart.toFixed(4)}, LOOP_END = ${info.loopEnd.toFixed(4)}`);
}
main().catch(e => { console.error(e); process.exitCode = 1; }).finally(() => chrome.kill());

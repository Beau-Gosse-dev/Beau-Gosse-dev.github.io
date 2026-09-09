// Preview the static GitHub Pages export, including its project URL prefix.
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { resolve, extname, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../dist/client/', import.meta.url));
const prefix = '/projects/civil-war-field-companion';
const mime = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.rsc': 'text/plain', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.png': 'image/png', '.svg': 'image/svg+xml', '.webp': 'image/webp', '.woff2': 'font/woff2', '.ico': 'image/x-icon' };

createServer(async (request, response) => {
  try {
    const pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
    const relative = pathname.startsWith(prefix + '/') ? pathname.slice(prefix.length) : pathname;
    const candidates = [relative, relative.endsWith('/') ? relative + 'index.html' : relative + '.html', pathname];
    for (const candidate of candidates) {
      const path = resolve(root, '.' + candidate);
      if (!path.startsWith(resolve(root) + sep)) continue;
      if (!(await stat(path).catch(() => null))?.isFile()) continue;
      response.writeHead(200, { 'Content-Type': mime[extname(path)] ?? 'application/octet-stream', 'Cache-Control': 'no-store' });
      response.end(await readFile(path));
      return;
    }
    response.writeHead(404, { 'Content-Type': 'text/html' });
    response.end(await readFile(resolve(root, '404.html')));
  } catch {
    response.writeHead(400);
    response.end('Invalid request');
  }
}).listen(4173, '127.0.0.1');

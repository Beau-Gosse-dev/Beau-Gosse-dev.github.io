'use client';

import { useEffect, useRef, useState } from 'react';
import { Maximize2, Minus, Plus, RotateCcw, X } from 'lucide-react';
import { siteHref } from '@/lib/site';

export function PortraitViewer({ image, alt, name, source }: { image: string; alt: string; name: string; source?: string }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const pointers = useRef(new Map<number, { x: number; y: number }>());
  const [open, setOpen] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [natural, setNatural] = useState({ width: 800, height: 1000 });
  const [viewport, setViewport] = useState({ width: 800, height: 600 });
  const fit = Math.min((viewport.width - 24) / natural.width, (viewport.height - 24) / natural.height, 1);
  const changeZoom = (value: number) => setZoom(Math.min(5, Math.max(1, value)));

  useEffect(() => {
    if (!open) return;
    const dialog = dialogRef.current!;
    dialog.showModal();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const observer = new ResizeObserver(([entry]) => setViewport({ width: entry.contentRect.width, height: entry.contentRect.height }));
    observer.observe(viewportRef.current!);
    return () => { observer.disconnect(); document.body.style.overflow = previousOverflow; };
  }, [open]);

  function reset() {
    setZoom(1);
    viewportRef.current?.scrollTo(0, 0);
  }

  return <figure className="profile-portrait">
    <button ref={triggerRef} className="portrait-open" type="button" onClick={() => { reset(); setOpen(true); }} aria-label={`Enlarge portrait of ${name}`}>
      <img src={siteHref(image)} alt={alt} onLoad={(event) => setNatural({ width: event.currentTarget.naturalWidth, height: event.currentTarget.naturalHeight })} />
      <span><Maximize2 size={17} /> Enlarge portrait</span>
    </button>
    <figcaption>{alt}{source && <> · <a href={source} target="_blank" rel="noreferrer">Image source and credits</a></>}</figcaption>
    <dialog ref={dialogRef} className="portrait-dialog" aria-labelledby="portrait-dialog-title" onClose={() => { setOpen(false); pointers.current.clear(); triggerRef.current?.focus(); }} onClick={(event) => { if (event.target === event.currentTarget) dialogRef.current?.close(); }}>
      <div className="portrait-dialog-shell">
        <header><h2 id="portrait-dialog-title">{name}</h2><button type="button" aria-label="Close portrait viewer" onClick={() => dialogRef.current?.close()}><X size={20} /></button></header>
        <div className="portrait-toolbar" aria-label="Image zoom controls">
          <button type="button" aria-label="Zoom out" disabled={zoom <= 1} onClick={() => changeZoom(zoom - .5)}><Minus size={18} /></button>
          <output aria-live="polite">{Math.round(zoom * 100)}%</output>
          <button type="button" aria-label="Zoom in" disabled={zoom >= 5} onClick={() => changeZoom(zoom + .5)}><Plus size={18} /></button>
          <button type="button" onClick={reset}><RotateCcw size={16} /> Fit image</button>
          <a href={siteHref(image)} target="_blank" rel="noreferrer">Open full-size image ↗</a>
        </div>
        <p className="portrait-help">Zoom with + / − or pinch. Drag to explore; use arrow keys to scroll. Press Escape to close.</p>
        <div className="portrait-viewport" ref={viewportRef} tabIndex={0} aria-label="Zoomed portrait; scroll to explore" onPointerDown={(event) => {
          pointers.current.set(event.pointerId, { x: event.clientX, y: event.clientY });
          event.currentTarget.setPointerCapture(event.pointerId);
        }} onPointerMove={(event) => {
          const previous = pointers.current.get(event.pointerId);
          if (!previous) return;
          const other = Array.from(pointers.current.entries()).find(([id]) => id !== event.pointerId)?.[1];
          if (other) {
            const before = Math.hypot(previous.x - other.x, previous.y - other.y);
            const after = Math.hypot(event.clientX - other.x, event.clientY - other.y);
            if (before > 0) setZoom((value) => Math.min(5, Math.max(1, value * after / before)));
          } else if (zoom > 1) {
            event.currentTarget.scrollLeft -= event.clientX - previous.x;
            event.currentTarget.scrollTop -= event.clientY - previous.y;
          }
          pointers.current.set(event.pointerId, { x: event.clientX, y: event.clientY });
        }} onPointerUp={(event) => pointers.current.delete(event.pointerId)} onPointerCancel={(event) => pointers.current.delete(event.pointerId)}>
          <div className="portrait-stage" style={{ width: Math.max(viewport.width, natural.width * fit * zoom), height: Math.max(viewport.height, natural.height * fit * zoom) }}>
            <img src={siteHref(image)} alt={alt} draggable={false} style={{ width: natural.width * fit * zoom, height: natural.height * fit * zoom }} />
          </div>
        </div>
      </div>
    </dialog>
  </figure>;
}

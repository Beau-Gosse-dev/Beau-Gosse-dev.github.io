'use client';

import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Layers3, MapPinned, Pause, Play, X } from 'lucide-react';
import * as maplibregl from 'maplibre-gl';
import type { GeoJSONSource, Map as MapLibreMap, Marker } from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import type { BattleFlow as BattleFlowData, BattleFlowSide } from '@/data/battle-flows/types';
import { AudioTimestamp } from '@/components/audio-timestamp';
import { siteHref } from '@/lib/site';

const sideLabel: Record<BattleFlowSide, string> = {
  union: 'United States',
  confederate: 'Confederacy',
  neutral: 'Route or reported movement',
};

const lineColor = ['match', ['get', 'side'], 'union', '#315f8c', 'confederate', '#9d4932', '#a47a25'] as const;

function featureCollection(features: Record<string, unknown>[]) {
  return { type: 'FeatureCollection' as const, features };
}

export function BattleFlow({ flow }: { flow: BattleFlowData }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [mapReady, setMapReady] = useState(false);
  const [showHistoricOverlay, setShowHistoricOverlay] = useState(true);
  const [showReferenceMap, setShowReferenceMap] = useState(false);
  const frame = flow.frames[activeIndex];
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<MapLibreMap | null>(null);
  const dynamicMarkersRef = useRef<Marker[]>([]);
  const landmarkMarkersRef = useRef<Marker[]>([]);

  const selectFrame = (index: number) => {
    setIsPlaying(false);
    setActiveIndex(Math.max(0, Math.min(flow.frames.length - 1, index)));
  };

  useEffect(() => {
    if (!isPlaying) return;
    intervalRef.current = setInterval(() => {
      setActiveIndex((current) => {
        if (current >= flow.frames.length - 1) {
          setIsPlaying(false);
          return current;
        }
        return current + 1;
      });
    }, 4800);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [flow.frames.length, isPlaying]);

  useEffect(() => {
    const container = mapContainerRef.current;
    if (!container || mapRef.current) return;

    const map = new maplibregl.Map({
      container,
      center: flow.map.center,
      zoom: flow.map.zoom,
      minZoom: flow.map.minZoom,
      maxZoom: flow.map.maxZoom,
      maxBounds: flow.map.bounds,
      attributionControl: false,
      dragRotate: false,
      pitchWithRotate: false,
      style: {
        version: 8,
        sources: {
          basemap: {
            type: 'raster',
            tiles: flow.map.basemap.tiles,
            tileSize: 256,
            attribution: flow.map.basemap.attribution,
          },
        },
        layers: [
          { id: 'paper', type: 'background', paint: { 'background-color': '#eee4d0' } },
          { id: 'basemap', type: 'raster', source: 'basemap', paint: { 'raster-saturation': -0.72, 'raster-contrast': -0.08, 'raster-brightness-max': 0.88 } },
        ],
      },
    });

    map.addControl(new maplibregl.NavigationControl({ showCompass: false }), 'top-right');
    map.addControl(new maplibregl.AttributionControl({ compact: true }), 'bottom-right');

    map.on('load', () => {
      const historicFeatures = flow.map.layers.map((layer) => ({
        type: 'Feature' as const,
        properties: { id: layer.id, label: layer.label, kind: layer.kind, confidence: layer.confidence },
        geometry: { type: 'LineString' as const, coordinates: layer.coordinates },
      }));

      map.addSource('historic-features', { type: 'geojson', data: featureCollection(historicFeatures) });
      map.addLayer({
        id: 'historic-road-casing',
        type: 'line',
        source: 'historic-features',
        filter: ['in', ['get', 'kind'], ['literal', ['historic-road', 'escape-route']]],
        paint: { 'line-color': '#fffaf0', 'line-width': 7, 'line-opacity': 0.88 },
      });
      map.addLayer({
        id: 'historic-roads',
        type: 'line',
        source: 'historic-features',
        filter: ['in', ['get', 'kind'], ['literal', ['historic-road', 'escape-route']]],
        paint: { 'line-color': ['match', ['get', 'kind'], 'escape-route', '#a47a25', '#6f6658'], 'line-width': 3, 'line-dasharray': [2, 1.6] },
      });
      map.addLayer({
        id: 'historic-earthworks',
        type: 'line',
        source: 'historic-features',
        filter: ['==', ['get', 'kind'], 'earthwork'],
        paint: { 'line-color': '#883f31', 'line-width': 6, 'line-dasharray': [1.4, 0.8], 'line-opacity': 0.9 },
      });
      map.addLayer({
        id: 'historic-crossing',
        type: 'line',
        source: 'historic-features',
        filter: ['==', ['get', 'kind'], 'water-crossing'],
        paint: { 'line-color': '#356577', 'line-width': 8, 'line-opacity': 0.72 },
      });

      map.addSource('movements-solid', { type: 'geojson', data: featureCollection([]) });
      map.addSource('movements-dashed', { type: 'geojson', data: featureCollection([]) });
      map.addLayer({
        id: 'movements-solid',
        type: 'line',
        source: 'movements-solid',
        paint: { 'line-color': lineColor, 'line-width': 7, 'line-opacity': 0.94 },
        layout: { 'line-cap': 'round', 'line-join': 'round' },
      });
      map.addLayer({
        id: 'movements-dashed',
        type: 'line',
        source: 'movements-dashed',
        paint: { 'line-color': lineColor, 'line-width': 5, 'line-opacity': 0.82, 'line-dasharray': [1.4, 1.2] },
        layout: { 'line-cap': 'round', 'line-join': 'round' },
      });

      flow.map.landmarks.forEach((landmark) => {
        const element = document.createElement('div');
        element.className = `battle-flow-landmark-marker ${landmark.kind}`;
        element.innerHTML = `<i aria-hidden="true"></i><span>${landmark.label}</span>`;
        element.setAttribute('aria-label', landmark.label);
        landmarkMarkersRef.current.push(new maplibregl.Marker({ element, anchor: 'left' }).setLngLat(landmark.position).addTo(map));
      });

      setMapReady(true);
    });

    mapRef.current = map;
    return () => {
      dynamicMarkersRef.current.forEach((marker) => marker.remove());
      landmarkMarkersRef.current.forEach((marker) => marker.remove());
      dynamicMarkersRef.current = [];
      landmarkMarkersRef.current = [];
      map.remove();
      mapRef.current = null;
      setMapReady(false);
    };
  }, [flow]);

  useEffect(() => {
    const map = mapRef.current;
    if (!map || !mapReady) return;

    dynamicMarkersRef.current.forEach((marker) => marker.remove());
    dynamicMarkersRef.current = [];

    const movementFeatures = frame.movements.map((movement) => ({
      type: 'Feature' as const,
      properties: { id: movement.id, side: movement.side },
      geometry: { type: 'LineString' as const, coordinates: movement.coordinates },
    }));
    const solid = movementFeatures.filter((_, index) => !frame.movements[index].dashed);
    const dashed = movementFeatures.filter((_, index) => frame.movements[index].dashed);
    (map.getSource('movements-solid') as GeoJSONSource).setData(featureCollection(solid));
    (map.getSource('movements-dashed') as GeoJSONSource).setData(featureCollection(dashed));

    frame.movements.forEach((movement) => {
      const end = movement.coordinates[movement.coordinates.length - 1];
      const arrow = document.createElement('div');
      arrow.className = `battle-flow-route-end ${movement.side}`;
      arrow.setAttribute('aria-hidden', 'true');
      dynamicMarkersRef.current.push(new maplibregl.Marker({ element: arrow }).setLngLat(end).addTo(map));
    });

    frame.units.forEach((unit) => {
      const element = document.createElement('div');
      element.className = `battle-flow-map-unit ${unit.side}${unit.subdued ? ' subdued' : ''}`;
      element.innerHTML = `<i aria-hidden="true"></i><span>${unit.label}</span>`;
      element.setAttribute('aria-label', `${unit.label}, ${sideLabel[unit.side]}`);
      dynamicMarkersRef.current.push(new maplibregl.Marker({ element, anchor: 'left' }).setLngLat(unit.position).addTo(map));
    });

    if (frame.callout) {
      const element = document.createElement('div');
      element.className = 'battle-flow-map-callout';
      element.innerHTML = `<i aria-hidden="true"></i><span>${frame.callout.label}</span>`;
      element.setAttribute('aria-label', frame.callout.label);
      dynamicMarkersRef.current.push(new maplibregl.Marker({ element, anchor: 'bottom-left' }).setLngLat(frame.callout.position).addTo(map));
    }

    const camera = frame.camera ?? { center: flow.map.center, zoom: flow.map.zoom };
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    map.easeTo({ center: camera.center, zoom: camera.zoom, duration: reduceMotion ? 0 : 850 });
  }, [flow, frame, mapReady]);

  useEffect(() => {
    const map = mapRef.current;
    if (!map || !mapReady) return;
    ['historic-road-casing', 'historic-roads', 'historic-earthworks', 'historic-crossing'].forEach((id) => {
      map.setLayoutProperty(id, 'visibility', showHistoricOverlay ? 'visible' : 'none');
    });
    landmarkMarkersRef.current.forEach((marker) => {
      marker.getElement().classList.toggle('historic-hidden', !showHistoricOverlay);
    });
  }, [mapReady, showHistoricOverlay]);

  return <section className="battle-flow" aria-labelledby="battle-flow-title">
    <header className="battle-flow-header">
      <div>
        <p>{flow.eyebrow}</p>
        <h2 id="battle-flow-title">{flow.title}</h2>
        <strong>{flow.subtitle}</strong>
      </div>
      <p>{flow.description}</p>
    </header>

    <div className="battle-flow-controls" aria-label="Battle Flow controls">
      <button type="button" onClick={() => selectFrame(activeIndex - 1)} disabled={activeIndex === 0}><ChevronLeft size={18} /> Previous</button>
      <button className="battle-flow-play" type="button" onClick={() => {
        if (!isPlaying && activeIndex === flow.frames.length - 1) setActiveIndex(0);
        setIsPlaying((current) => !current);
      }} aria-label={isPlaying ? 'Pause Battle Flow' : 'Play Battle Flow'}>
        {isPlaying ? <Pause size={17} /> : <Play size={17} />} {isPlaying ? 'Pause' : 'Play'}
      </button>
      <button type="button" onClick={() => selectFrame(activeIndex + 1)} disabled={activeIndex === flow.frames.length - 1}>Next <ChevronRight size={18} /></button>
    </div>

    <div className="battle-flow-scrubber" aria-label="Choose a map frame">
      {flow.frames.map((item, index) => <button type="button" className={index === activeIndex ? 'active' : ''} onClick={() => selectFrame(index)} aria-current={index === activeIndex ? 'step' : undefined} aria-label={`Frame ${index + 1}: ${item.time}, ${item.title}`} key={item.id}><span>{index + 1}</span><small>{item.time}</small></button>)}
    </div>

    <div className="battle-flow-stage">
      <div className="battle-flow-map">
        <section className="battle-flow-map-canvas" ref={mapContainerRef} aria-label={`${frame.title}. ${frame.summary}`} />
        <div className="battle-flow-map-tools" aria-label="Map layers">
          <button type="button" aria-pressed={showHistoricOverlay} onClick={() => setShowHistoricOverlay((current) => !current)}><Layers3 size={15} /> Historic overlay</button>
          {flow.map.referenceMap && <button type="button" aria-expanded={showReferenceMap} onClick={() => setShowReferenceMap((current) => !current)}><MapPinned size={15} /> Source map</button>}
        </div>
        {showReferenceMap && flow.map.referenceMap && <aside className="battle-flow-reference" aria-label={flow.map.referenceMap.label}>
          <button className="battle-flow-reference-close" type="button" onClick={() => setShowReferenceMap(false)} aria-label="Close source map"><X size={17} /></button>
          {/* oxlint-disable-next-line next/no-img-element -- sourced static reference map; dimensions are responsive */}
          <img src={siteHref(flow.map.referenceMap.image)} alt={flow.map.referenceMap.label} width={1720} height={1056} />
          <div><strong>{flow.map.referenceMap.label}</strong><p>{flow.map.referenceMap.note}</p><a href={flow.map.referenceMap.sourceUrl} target="_blank" rel="noreferrer">Open source</a></div>
        </aside>}
        <div className="battle-flow-legend" aria-hidden="true">
          <span><i className="union" /> United States</span>
          <span><i className="confederate" /> Confederacy</span>
          <span><i className="neutral" /> Route / uncertainty</span>
        </div>
      </div>

      <article className="battle-flow-event" aria-live="polite">
        <div className="battle-flow-frame-count">Frame {activeIndex + 1} of {flow.frames.length}</div>
        <p className="battle-flow-date">{frame.date}</p>
        <time>{frame.time}</time>
        <h3>{frame.title}</h3>
        <p className="battle-flow-summary">{frame.summary}</p>
        <AudioTimestamp seconds={frame.audioTime} label={`Listen at ${frame.audioLabel}`} />
        <div className={`battle-flow-confidence ${frame.confidenceTone}`}><span>Map confidence</span><strong>{frame.confidence}</strong></div>
        <p className="battle-flow-evidence"><strong>Evidence used:</strong> {frame.evidence}</p>
      </article>
    </div>

    <div className="battle-flow-footnotes">
      <p>{flow.mapNote}</p>
      <details><summary>Battle Flow sources</summary><ul>{flow.sources.map((source) => <li key={source.id}><a href={source.url} target="_blank" rel="noreferrer">{source.label}</a></li>)}</ul></details>
    </div>

    <span className="sr-only">Use the previous and next buttons or the numbered timeline to move through the map.</span>
    <span className="sr-only">Legend: {Object.values(sideLabel).join(', ')}.</span>
  </section>;
}

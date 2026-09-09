import type { BattleFlow, BattleFlowCoordinate } from './types';

function isCoordinate(value: BattleFlowCoordinate) {
  return Number.isFinite(value[0]) && Number.isFinite(value[1]) && value[0] >= -180 && value[0] <= 180 && value[1] >= -90 && value[1] <= 90;
}

export function validateBattleFlow(flow: BattleFlow) {
  const errors: string[] = [];
  const sourceIds = new Set(flow.sources.map((source) => source.id));
  const [southwest, northeast] = flow.map.bounds;
  const withinBounds = ([longitude, latitude]: BattleFlowCoordinate) => longitude >= southwest[0] && longitude <= northeast[0] && latitude >= southwest[1] && latitude <= northeast[1];
  const checkPosition = (position: BattleFlowCoordinate, label: string) => {
    if (!isCoordinate(position)) errors.push(`${label} has an invalid longitude/latitude pair`);
    else if (!withinBounds(position)) errors.push(`${label} falls outside the battlefield bounds`);
  };

  checkPosition(flow.map.center, 'Map center');
  flow.map.landmarks.forEach((landmark) => checkPosition(landmark.position, `Landmark ${landmark.id}`));
  flow.map.layers.forEach((layer) => {
    if (layer.coordinates.length < 2) errors.push(`Map layer ${layer.id} needs at least two coordinates`);
    layer.coordinates.forEach((position, index) => checkPosition(position, `Map layer ${layer.id} point ${index + 1}`));
    if (!sourceIds.has(layer.source)) errors.push(`Map layer ${layer.id} refers to missing source ${layer.source}`);
  });

  const frameIds = new Set<string>();
  flow.frames.forEach((frame, frameIndex) => {
    if (frameIds.has(frame.id)) errors.push(`Duplicate frame id ${frame.id}`);
    frameIds.add(frame.id);
    if (!frame.evidence.trim()) errors.push(`Frame ${frame.id} is missing evidence`);
    frame.units.forEach((unit) => checkPosition(unit.position, `Frame ${frame.id} unit ${unit.id}`));
    frame.movements.forEach((movement) => {
      if (movement.coordinates.length < 2) errors.push(`Frame ${frame.id} movement ${movement.id} needs at least two coordinates`);
      movement.coordinates.forEach((position, index) => checkPosition(position, `Frame ${frame.id} movement ${movement.id} point ${index + 1}`));
    });
    if (frame.callout) checkPosition(frame.callout.position, `Frame ${frame.id} callout`);
    if (frame.camera) checkPosition(frame.camera.center, `Frame ${frame.id} camera`);
    if (frameIndex > 0 && frame.audioTime < flow.frames[frameIndex - 1].audioTime) errors.push(`Frame ${frame.id} has an audio timestamp earlier than the preceding frame`);
  });

  if (errors.length) throw new Error(`Invalid Battle Flow ${flow.id}:\n- ${errors.join('\n- ')}`);
  return flow;
}

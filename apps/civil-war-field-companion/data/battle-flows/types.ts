export type BattleFlowSide = 'union' | 'confederate' | 'neutral';

export type BattleFlowCoordinate = [longitude: number, latitude: number];

export type BattleFlowMapLayer = {
  id: string;
  label: string;
  kind: 'earthwork' | 'historic-road' | 'escape-route' | 'water-crossing';
  coordinates: BattleFlowCoordinate[];
  source: string;
  confidence: 'documented' | 'approximate' | 'contested';
};

export type BattleFlowLandmark = {
  id: string;
  label: string;
  kind: 'fort' | 'town' | 'crossing' | 'headquarters';
  position: BattleFlowCoordinate;
};

export type BattleFlowMap = {
  center: BattleFlowCoordinate;
  zoom: number;
  minZoom?: number;
  maxZoom?: number;
  bounds: [southwest: BattleFlowCoordinate, northeast: BattleFlowCoordinate];
  basemap: {
    label: string;
    tiles: string[];
    attribution: string;
  };
  layers: BattleFlowMapLayer[];
  landmarks: BattleFlowLandmark[];
  referenceMap?: {
    label: string;
    image: string;
    sourceUrl: string;
    note: string;
  };
};

export type BattleFlowUnit = {
  id: string;
  label: string;
  side: BattleFlowSide;
  position: BattleFlowCoordinate;
  subdued?: boolean;
};

export type BattleFlowMovement = {
  id: string;
  side: BattleFlowSide;
  coordinates: BattleFlowCoordinate[];
  dashed?: boolean;
};

export type BattleFlowFrame = {
  id: string;
  date: string;
  time: string;
  title: string;
  summary: string;
  audioTime: number;
  audioLabel: string;
  confidence: string;
  confidenceTone: 'documented' | 'approximate' | 'contested';
  evidence: string;
  units: BattleFlowUnit[];
  movements: BattleFlowMovement[];
  callout?: { position: BattleFlowCoordinate; label: string };
  camera?: { center: BattleFlowCoordinate; zoom: number };
};

export type BattleFlow = {
  id: string;
  title: string;
  eyebrow: string;
  subtitle: string;
  description: string;
  mapNote: string;
  map: BattleFlowMap;
  frames: BattleFlowFrame[];
  sources: { id: string; label: string; url: string }[];
};

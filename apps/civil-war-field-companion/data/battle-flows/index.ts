import { fortDonelsonBattleFlow } from './95-postscript-forrest-s-breakout';
import type { BattleFlow } from './types';
import { validateBattleFlow } from './validate';

const battleFlows: Record<string, BattleFlow> = {
  '95-postscript-forrest-s-breakout': validateBattleFlow(fortDonelsonBattleFlow),
};

export function getBattleFlow(slug: string) {
  return battleFlows[slug];
}

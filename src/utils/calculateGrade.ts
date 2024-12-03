export function calculateFinalGrade(
  avp1: number,
  avp2: number,
  tde1: number,
  tde2: number,
  tde3: number,
  tde4: number
): number {
  const mainExamsWeight = 0.4;
  const tdeWeight = 0.05;
  
  const mainExamsScore = (avp1 * mainExamsWeight) + (avp2 * mainExamsWeight);
  const tdeScore = (tde1 + tde2 + tde3 + tde4) * tdeWeight;
  
  return mainExamsScore + tdeScore;
}
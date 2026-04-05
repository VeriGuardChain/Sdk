export function calculateReward(score) {
  // simple formula (can upgrade to tokenomics)
  return Number((score * 0.05).toFixed(4));
}

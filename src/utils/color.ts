export function extractAccentColor(gradient: string, fallback = '#7c3aed'): string {
  const match = gradient.match(/#[0-9a-fA-F]{3,8}/);
  return match ? match[0] : fallback;
}

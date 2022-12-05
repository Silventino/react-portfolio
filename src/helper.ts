const resolution =
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;

const is8k = resolution >= 7500;
const is4k = resolution >= 4000 && resolution < 7500;
const isUHD = resolution >= 3800 && resolution < 4000;
const isFullHD = resolution >= 1400 && resolution < 3800;
const isHD = resolution < 1400;

export function calcPixels(x: number) {
  if (isHD) return x;
  if (isFullHD) return x * 1.5;
  if (isUHD) return x * 2.25;
  if (is4k) return x * 3.375;
  if (is8k) return x * 5.0625;
  return x;
}

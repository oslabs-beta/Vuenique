export default function getTicks(scale: any, numTicks?: number) {
  const s = scale;
  if ("ticks" in s) {
    return s.ticks(numTicks);
  }
  return s
    .domain()
    .filter(
      (_, index, arr) =>
        numTicks == null ||
        arr.length <= numTicks ||
        index % Math.round((arr.length - 1) / numTicks) === 0
    );
}

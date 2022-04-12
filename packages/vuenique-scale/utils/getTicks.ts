// import { AnyD3Scale, ScaleInput } from '../types/Scale';

export default function getTicks(
  scale: any,
  numTicks?: number,
) {
  // Because `Scale` is generic type which maybe a subset of AnyD3Scale
  // that may not have `ticks` field,
  // TypeScript will not let us do the `'ticks' in scale` check directly.
  // Have to manually cast and expand type first.
  const s = scale;

  if ('ticks' in s) {
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

import { line as d3Line } from "d3-shape";
import type { LinePathConfig } from "../types";
import setNumberOrNumberAccessor from "./setNumberOrNumberAccessor";

export function line<Datum>({
  x,
  y,
  defined,
  curve,
}: LinePathConfig<Datum> = {}) {
  const path = d3Line<Datum>();
  if (x) setNumberOrNumberAccessor(path.x, x);
  if (y) setNumberOrNumberAccessor(path.y, y);
  if (defined) path.defined(defined);
  if (curve) path.curve(curve);
  return path;
}

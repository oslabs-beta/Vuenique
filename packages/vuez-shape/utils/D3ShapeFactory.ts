import {line as d3Line} from 'd3-shape';
import type { LinePathConfig } from '../types';
import setNumberOrNumberAccessor from './setNumberOrNumberAccessor'

//removed LinePathConfig<Datum> from exported function; type checking
export function line<Datum>({ x, y, defined, curve }: LinePathConfig<Datum> = {}) {
  const path = d3Line<Datum>();
  // path = function line(data)
  if (x) setNumberOrNumberAccessor(path.x, x);
  // ((d) => xScale(getDate(x)), line)
  if (y) setNumberOrNumberAccessor(path.y, y);
  if (defined) path.defined(defined);
  // defined = () => true
  // path.defined(defined) returns (defined, line)
  if (curve) path.curve(curve);

  // console.log(path);

  return path;
}

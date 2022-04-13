import { scaleTime } from "d3-scale";

import scaleOperator from "../operators/scaleOperator";

type DefaultOutput = number | string | boolean | null;

/** Returns applyOperator function */
export const updateTimeScale = scaleOperator(
  "domain",
  "range",
  "reverse",
  "clamp",
  "interpolate",
  "nice",
  "round"
);

export default function createTimeScale<Output = DefaultOutput>(config?: any) {
  return updateTimeScale(scaleTime<Output>(), config);
}

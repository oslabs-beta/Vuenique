import { scaleLog } from "d3-scale";

import scaleOperator from "../operators/scaleOperator";

/** Returns applyOperator function */
export const updateLogScale = scaleOperator(
  "domain",
  "range",
  "reverse",
  "base",
  "clamp",
  "interpolate",
  "nice",
  "round"
);

export default function createLogScale(config?: any) {
  return updateLogScale(scaleLog(), config);
}

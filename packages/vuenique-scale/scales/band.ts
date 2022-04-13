import { scaleBand } from "d3-scale";
import scaleOperator from "../operators/scaleOperator";

/** Returns applyOperator function */
export const updateBandScale = scaleOperator(
  "domain",
  "range",
  "reverse",
  "align",
  "padding",
  "round"
);

export default function createBandScale(config?: any) {
  return updateBandScale(scaleBand(), config);
}

import { scaleLinear } from "d3-scale";
import scaleOperator from "../operators/scaleOperator";

/** Returns applyOperator function */
export const updateLinearScale = scaleOperator(
  "domain",
  "range",
  "reverse",
  "clamp",
  "interpolate",
  "nice",
  "round",
  "zero"
);

export default function createLinearScale(config?: any) {
  return updateLinearScale(scaleLinear(), config);
}

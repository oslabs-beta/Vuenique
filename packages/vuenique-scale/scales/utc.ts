import { scaleUtc } from "d3-scale";
import scaleOperator from "../operators/scaleOperator";

/** Returns applyOperator function */
export const updateUtcScale = scaleOperator(
  "domain",
  "range",
  "reverse",
  "clamp",
  "interpolate",
  "nice",
  "round"
);

export default function createUtcScale(config?: any) {
  return updateUtcScale(scaleUtc(), config);
}

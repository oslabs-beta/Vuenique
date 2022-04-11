import { scaleOrdinal } from "d3-scale";
import scaleOperator from '../operators/scaleOperator';

export const updateOrdinalScale = scaleOperator(
  "domain",
  "range",
  "reverse",
  "unknown"
);

export default function createOrdinalScale(config?: any) {
  return updateOrdinalScale(scaleOrdinal(), config);
}

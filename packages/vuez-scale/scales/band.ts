import { scaleBand } from "d3-scale";
//import { DefaultOutput, StringLike } from '../types/Base';
// import { PickScaleConfigWithoutType } from '../types/ScaleConfig';
import scaleOperator from '../operators/scaleOperator';

export const updateBandScale = scaleOperator(
  'domain',
  'range',
  'reverse',
  'align',
  'padding',
  'round',
);


export default function createBandScale(config?: any) {
  return updateBandScale(scaleBand(), config);
}
import { scaleUtc } from 'd3-scale';
// import { DefaultOutput } from '../types/Base';
// import { PickScaleConfigWithoutType } from '../types/ScaleConfig';
import scaleOperator from '../operators/scaleOperator';

export const updateUtcScale = scaleOperator(
  'domain',
  'range',
  'reverse',
  'clamp',
  'interpolate',
  'nice',
  'round',
);

export default function createUtcScale(
  config?: any,
  //config?: PickScaleConfigWithoutType<'utc', Output>
) {
  return updateUtcScale(scaleUtc(), config);
}

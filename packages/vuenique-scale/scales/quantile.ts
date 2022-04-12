import { scaleQuantile } from 'd3-scale';

import scaleOperator from '../operators/scaleOperator';

export const updateQuantileScale = scaleOperator('domain', 'range', 'reverse');

export default function createQuantileScale(config?: any) {
  return updateQuantileScale(scaleQuantile(), config);
}

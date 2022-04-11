import { scaleThreshold } from 'd3-scale';
import scaleOperator from '../operators/scaleOperator';

export const updateThresholdScale = scaleOperator('domain', 'range', 'reverse');

export default function createThresholdScale (config?:any) {
  return updateThresholdScale(scaleThreshold(), config);
}

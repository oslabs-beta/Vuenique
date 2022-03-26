import { scaleLinear } from 'd3-scale';
import scaleOperator from '../operators/scaleOperator';
// possibly need types
// import { DefaultOutput } from '../types/Base';
// import { PickScaleConfigWithoutType } from '../types/ScaleConfig';


// possibly need types for parameters of D3 function
export const updateLinearScale = scaleOperator(
  'domain',
  'range',
  'reverse',
  'clamp',
  'interpolate',
  'nice',
  'round',
  'zero',
);

// export default is createLinearScale
  // ignores all types, takes scaleLinear and config object
  
export default function createLinearScale (config?: any) {
  return updateLinearScale(scaleLinear(), config);
}

// import { DefaultOutput } from '../types/Base';
// import {
//   LinearScaleConfig,
//   PowScaleConfig,
//   QuantizeScaleConfig,
//   ScaleConfig,
//   ScaleType,
//   SqrtScaleConfig,
//   SymlogScaleConfig,
// } from '../types/ScaleConfig';

// type ZeroableScaleConfigs<Output = DefaultOutput> =
//   | LinearScaleConfig<Output>
//   | PowScaleConfig<Output>
//   | SqrtScaleConfig<Output>
//   | SymlogScaleConfig<Output>
//   | QuantizeScaleConfig<Output>;

const zeroableScaleTypes = new Set(['linear', 'pow', 'quantize', 'sqrt', 'symlog']);

export default function scaleCanBeZeroed(
  scaleConfig,
){
  return zeroableScaleTypes.has(scaleConfig.type);
}

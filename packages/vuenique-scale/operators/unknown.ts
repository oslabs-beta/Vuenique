// import { DefaultThresholdInput, D3Scale } from '../types/Scale';
// import { StringLike } from '../types/Base';
// import { ScaleConfigWithoutType } from '../types/ScaleConfig';

// <Output,
//   DiscreteInput extends StringLike,
//   ThresholdInput extends DefaultThresholdInput>
export default function applyUnknown(
  scale: any,
  // D3Scale<Output, DiscreteInput, ThresholdInput>
  config: any,
  // PickScaleConfigWithoutType<'log', Output>
) {
  if ('unknown' in scale && 'unknown' in config && typeof config.unknown !== 'undefined') {
    (scale.unknown as Function)(config.unknown);
  }
}

// import { DefaultThresholdInput, D3Scale } from '../types/Scale';
// import { StringLike } from '../types/Base';
// import { ScaleConfigWithoutType } from '../types/ScaleConfig';

export default function applyRange( scale: any, config: any ) {
  if (config.range) {
    if ('padding' in scale) {
      // point and band scales
      scale.range(config.range as [number, number]);
    } else {
      // the rest
      scale.range(config.range);
    }
  }
}
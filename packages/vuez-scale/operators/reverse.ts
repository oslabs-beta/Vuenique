// import { DefaultThresholdInput, D3Scale } from '../types/Scale';
// import { StringLike } from '../types/Base';
// import { ScaleConfigWithoutType } from '../types/ScaleConfig';

export default function applyReverse( scale: any, config: any ) {
  if (config.reverse) {
    const reversedRange = scale.range().slice().reverse();
    if ('padding' in scale) {
      // point and band scales
      scale.range(reversedRange);
    } else {
      // the rest
      scale.range(reversedRange);
    }
  }
}
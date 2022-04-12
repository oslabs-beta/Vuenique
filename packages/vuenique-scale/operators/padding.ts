// import { DefaultThresholdInput, D3Scale } from '../types/Scale';
// import { StringLike } from '../types/Base';
// import { ScaleConfigWithoutType } from '../types/ScaleConfig';

export default function applyPadding( scale: any, config: any ) {
  if ('padding' in scale && 'padding' in config && typeof config.padding !== 'undefined') {
    scale.padding(config.padding);
  }
  if (
    'paddingInner' in scale &&
    'paddingInner' in config &&
    typeof config.paddingInner !== 'undefined'
  ) {
    scale.paddingInner(config.paddingInner);
  }
  if (
    'paddingOuter' in scale &&
    'paddingOuter' in config &&
    typeof config.paddingOuter !== 'undefined'
  ) {
    scale.paddingOuter(config.paddingOuter);
  }
}
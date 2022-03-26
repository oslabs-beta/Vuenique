// import { DefaultThresholdInput, D3Scale } from '../types/Scale';
// import { StringLike } from '../types/Base';
// import { ScaleConfigWithoutType } from '../types/ScaleConfig';

export default function applyAlign( scale: any, config: any ) {
  if ('align' in scale && 'align' in config && typeof config.align !== 'undefined') {
    scale.align(config.align);
  }
}

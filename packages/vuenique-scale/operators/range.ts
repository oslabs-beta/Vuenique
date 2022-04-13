// set the range of the scale according to
// the range property passed within config object
export default function applyRange( scale: any, config: any ) {
  if (config.range) {
    if ('padding' in scale) {
      // config.domain will be type [number, number]
      // this only apply to band scale
      scale.range(config.range as [number, number]);
    } else {
      // config.domain will have different type if there isn't a padding in scale
      scale.range(config.range);
    }
  }
}
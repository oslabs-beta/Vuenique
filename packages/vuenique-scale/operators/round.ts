import { interpolateRound } from 'd3-interpolate';

// set round property of the scale if there
// is a defined round property passed within config object
export default function applyRound( scale: any, config: any ) {
  if ('round' in config && typeof config.round !== 'undefined') {
    // Warns the user if passed config has both round and interpolate
    if (config.round && 'interpolate' in config && typeof config.interpolate !== 'undefined') {
      console.warn(
        `[visx/scale/applyRound] ignoring round: scale config contains round and interpolate. only applying interpolate. config:`,
        config
      );
    } else if ('round' in scale) {
      // for band scales, set the round property of it
      scale.round(config.round);
    } else if ('interpolate' in scale && config.round) {
      // for continuous output scales
      // setting config.round = true
      // is actually setting interpolator to interpolateRound
      // as these scales do not have scale.round() function
      scale.interpolate(interpolateRound);
    }
  }
}

import createColorInterpolator from "../utils/createColorInterpolator";

/** Operator function to apply the D3 interpolate method with the returned color interpolatation as the argument
    Requires the config object to have the interpolate property
    
    Refer to D3-Scale for more info on D3 interpolate method: {@link https://github.com/d3/d3-scale/}
**/

export default function applyInterpolate(scale: any, config: any) {
  if (
    "interpolate" in config &&
    "interpolate" in scale &&
    typeof config.interpolate !== "undefined"
  ) {
    const interpolator = createColorInterpolator(config.interpolate);
    scale.interpolate(interpolator);
  }
}

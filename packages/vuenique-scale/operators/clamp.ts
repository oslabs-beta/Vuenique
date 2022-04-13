/** Operator function to apply the D3 clamp method with the user's clamp value as the argument
    Requires the config object to have the clamp property
    
    Refer to D3-Scale for more info on D3 clamp method: {@link https://github.com/d3/d3-scale/}
**/

export default function applyClamp(scale: any, config: any) {
  if (
    "clamp" in scale &&
    "clamp" in config &&
    typeof config.clamp !== "undefined"
  ) {
    scale.clamp(config.clamp);
  }
}

/** Operator function to apply the D3 base method with the user's align value as the argument
    Requires the config object to have the align property
    
    Refer to D3-Scale for D3 align method: {@link https://github.com/d3/d3-scale/}
**/
export default function applyAlign(scale: any, config: any) {
  if (
    "align" in scale &&
    "align" in config &&
    typeof config.align !== "undefined"
  ) {
    scale.align(config.align);
  }
}

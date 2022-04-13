/** Operator function to apply the D3 base method with the user's base value as the argument
    Requires the config object to have the base property
    
    Refer to D3-Scale for more info on D3 base method: {@link https://github.com/d3/d3-scale/}
**/
export default function applyBase(scale: any, config: any) {
  if (
    "base" in scale &&
    "base" in config &&
    typeof config.base !== "undefined"
  ) {
    scale.base(config.base);
  }
}

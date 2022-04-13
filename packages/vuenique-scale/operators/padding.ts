/** Operator function applying various types of padding
    
    Refer to D3-Scale for more info on D3 padding methods: {@link https://github.com/d3/d3-scale/}
**/
export default function applyPadding(scale: any, config: any) {
  if (
    "padding" in scale &&
    "padding" in config &&
    typeof config.padding !== "undefined"
  ) {
    scale.padding(config.padding);
  }
  if (
    "paddingInner" in scale &&
    "paddingInner" in config &&
    typeof config.paddingInner !== "undefined"
  ) {
    scale.paddingInner(config.paddingInner);
  }
  if (
    "paddingOuter" in scale &&
    "paddingOuter" in config &&
    typeof config.paddingOuter !== "undefined"
  ) {
    scale.paddingOuter(config.paddingOuter);
  }
}

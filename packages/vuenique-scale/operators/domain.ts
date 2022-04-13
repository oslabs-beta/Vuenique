/** Operator function that applys the D3 domain method and asserts the passed in domain's argument type
    Refer to D3-Scale for info on D3 domain method: {@link https://github.com/d3/d3-scale/}

    Plan on adding type distinctions between scales with padding properties and scales without
**/

export default function applyDomain(scale: any, config: any) {
  if (config.domain) {
    if ("nice" in scale || "quantiles" in scale) {
      // continuous input scales
      scale.domain(config.domain as number[] | Date[]);
    } else if ("padding" in scale) {
      // point and band scales
      scale.domain(config.domain);
    } else {
      // ordinal and threshold scale
      scale.domain(config.domain);
    }
  }
}

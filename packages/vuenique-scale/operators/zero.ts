// update the domain property of the scale if the zero property
// passed within the config object is set to true
export default function applyZero(scale: any, config: any) {
  if ("zero" in config && config.zero === true) {
    const domain = scale.domain() as number[];
    const [a, b] = domain;
    const isDescending = b < a;
    // if domain of the scale is in descending order, change it to be ascending order
    // with lower bound less than or equal to zero, higher bound greater or equal to zero
    const [min, max] = isDescending ? [b, a] : [a, b];
    const domainWithZero = [Math.min(0, min), Math.max(0, max)];
    scale.domain(isDescending ? domainWithZero.reverse() : domainWithZero);
  }
}

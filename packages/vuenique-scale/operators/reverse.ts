// reverse the range of the scale if there
// is a defined reverse property passed within config object
export default function applyReverse(scale: any, config: any) {
  if (config.reverse) {
    const reversedRange = scale.range().slice().reverse();
    if ("padding" in scale) {
      // reverseRnge will be type [number, number]
      // only apply to band scale
      scale.range(reversedRange);
    } else {
      // reverseRange will have different type if there isn't a padding in scale
      scale.range(reversedRange);
    }
  }
}

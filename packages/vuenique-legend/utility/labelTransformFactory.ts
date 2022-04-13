export default function labelTransformFactory({
  scale,
  labelFormat,
}: {
  scale: any;
  labelFormat: any;
}) {
  return (d, i) => ({
    datum: d,
    index: i,
    // text of legend item
    text: `${labelFormat(d, i)}`,
    value: scale(d),
  });
}

export default function labelTransformFactory(scale:any, labelFormat: any) {
  return (d: any, i: number) => ({
    datum: d,
    index: i,
    text: `${labelFormat(d, i)}`,

    value: scale(d),
  });
}

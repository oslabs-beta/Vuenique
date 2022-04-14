// used in D3ShapConfig
export type AccessorForArrayItem<Datum, Output> = (
  d: Datum,
  index: number,
  data: Datum[]
) => Output;

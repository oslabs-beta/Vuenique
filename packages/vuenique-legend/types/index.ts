import * as Vue from "vue";

export type LegendShape<Data, Output> =
| 'rect'
| 'circle'
| 'line'
| Vue.FunctionalComponent<RenderShapeProvidedProps<Data, Output>>
| Vue.Component<RenderShapeProvidedProps<Data, Output>>
// | React.FC<RenderShapeProvidedProps<Data, Output>>
// | React.ComponentClass<RenderShapeProvidedProps<Data, Output>>;

export type LabelFormatterFactory<Scale extends AnyD3Scale> = (args: {
  scale: Scale;
  labelFormat: LabelFormatter<ScaleInput<Scale>>;
}) => ItemTransformer<ScaleInput<Scale>, ReturnType<Scale>>;

export type ItemTransformer<Datum, Output> = (
  item: Datum,
  itemIndex: number,
) => FormattedLabel<Datum, Output>;


export type LabelFormatter<Datum> = (
  item: Datum,
  itemIndex: number,
) => Datum | string | number | undefined;

export type FormattedLabel<Datum, Output, ExtraAttributes = {} > = {
  datum: Datum;
  index: number;
  text: string;
  value?: Output;
} & ExtraAttributes;

export type RenderShapeProvidedProps<Data, Output> = {
  width?: string | number;
  height?: string | number;
  label: FormattedLabel<Data, Output>;
  item: Data;
  itemIndex: number;
  fill?: string;
  size?: string | number;
  style?: Vue.CSSProperties;
};

export type FlexDirection =
  | 'inherit'
  | 'initial'
  | 'revert'
  | 'unset'
  | 'column'
  | 'column-reverse'
  | 'row'
  | 'row-reverse';
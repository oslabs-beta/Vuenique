import * as Vue from "vue";
import * as CSS from 'csstype'

export type LegendShape<Data, Output> =
| 'rect'
| 'circle'
| 'line'
| Vue.FunctionalComponent<RenderShapeProvidedProps<Data, Output>>
| Vue.Component<RenderShapeProvidedProps<Data, Output>>
// | React.FC<RenderShapeProvidedProps<Data, Output>>
// | React.ComponentClass<RenderShapeProvidedProps<Data, Output>>;

// export type LabelFormatterFactory<Scale extends AnyD3Scale> = (args: {
//   scale: Scale;
//   labelFormat: LabelFormatter<ScaleInput<Scale>>;
// }) => ItemTransformer<ScaleInput<Scale>, ReturnType<Scale>>;

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


export type LegendProps = {
  //name for legend wrapper/container
  className?: string;
  //styles for legend container
  style?: any;
  //domain of legend
  domain?: any[];
  // ScaleInput<Scale>[];
  //legend width
  shapeWidth?: string | number;
  //legend height
  shapeHeight?: string | number;
  //legend margin
  shapeMargin?: string | number;
  //alignment of legend labels
  labelAlign?: string;
  //
  scale: any;
  //Scale <T>
  labelFlex?: string | number;
  //margin for the legend labels
  labelMargin?: string | number;
  //margin for legend items
  itemMargin?: string | number;
  //legend's own direction
  direction?: FlexDirection;
  //direction of items
  itemDirection?: FlexDirection;
  //fill accessor function
  fill?: () => string | undefined;
  //(label: FormattedLabel<ScaleInput<Scale>, ReturnType<Scale>>) => string | undefined
  //size accessor function
  size?: () => string | number | undefined;
  // (
  //   label: FormattedLabel<ScaleInput<Scale>, ReturnType<Scale>>,
  // ) => string | number | undefined;
  //Legend shape string preset or Element or Component
  shape?: LegendShape<any, any>;
  //Styles for the legend shapes
  shapeStyle?: (label: any) => Vue.CSSProperties;
  // Given a legend item and its index, returns an item label
  labelFormat?: any;
  //Given the legend scale and labelFormatter, returns a label with datum, index, value, and label
  labelTransform?: any;
  //extra props
  legendLabelProps?: Partial<LegendLabelProps>;
}

export type LegendLabelOwnProps = {
  align?: string;
  label?: Vue.VNode;
  flex?: string | number;
  margin?: string | number;
  children?: Vue.VNode;
};

export type LegendLabelProps = LegendLabelOwnProps &
  Omit<Vue.HTMLAttributes, keyof LegendLabelOwnProps>;

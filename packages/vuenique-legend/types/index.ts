import type * as Vue from "vue";

// legend
export type LegendProps = {
  // name for legend wrapper/container
  className?: string;
  // styles for legend container
  style?: any;
  // domain of legend
  domain?: any[];
  // legend width
  shapeWidth?: string | number;
  // legend height
  shapeHeight?: string | number;
  // legend margin
  shapeMargin?: string | number;
  // alignment of legend labels
  labelAlign?: string;
  // scale function
  scale: any;
  // flex-box flex of legend item labels
  labelFlex?: string | number;
  // margin for the legend labels
  labelMargin?: string | number;
  // margin for legend items
  itemMargin?: string | number;
  // legend's own direction
  direction?: FlexDirection;
  // direction of items
  itemDirection?: FlexDirection;
  // fill accessor function
  fill?: (label: any) => string | undefined;
  // size accessor function
  size?: (label: any) => string | number | undefined;
  // legend shape string preset or Element or Component
  shape?: LegendShape;
  // styles for the legend shapes
  shapeStyle?: (label: any) => Vue.CSSProperties;
  // given a legend item and its index, returns an item label
  labelFormat?: any;
  // given the legend scale and labelFormatter, returns a label with datum, index, value, and label
  labelTransform?: any;
  // extra props
  legendLabelProps?: Partial<LegendLabelProps>;
};

// types for legendLinear
export type LinearProps = LegendProps & { steps?: number };

// shape types
export type LegendShape =
  | "rect"
  | "circle"
  | "line"
  // | Vue.FunctionalComponent<RenderShapeProvidedProps<Data, Output>>
  // | Vue.Component<RenderShapeProvidedProps<Data, Output>>;
// | React.FC<RenderShapeProvidedProps<Data, Output>>
// | React.ComponentClass<RenderShapeProvidedProps<Data, Output>>;

// label formatter function
export type LabelFormatter<Datum> = (
  item: Datum,
  itemIndex: number,
) => Datum | string | number | undefined;

// label object
export type FormattedLabel<Datum, Output, ExtraAttributes = {}> = {
  datum: Datum;
  index: number;
  text: string;
  value?: Output;
} & ExtraAttributes;

//
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

// accepted types for flexDirection attribute
export type FlexDirection =
  | "inherit"
  | "initial"
  | "revert"
  | "unset"
  | "column"
  | "column-reverse"
  | "row"
  | "row-reverse";

// legendLabel own properties
export type LegendLabelOwnProps = {
  align?: string;
  label?: Vue.VNode;
  flex?: string | number;
  margin?: string | number;
  children?: Vue.VNode;
};

// all legendLabel accepted props
export type LegendLabelProps = LegendLabelOwnProps &
  Omit<Vue.HTMLAttributes, keyof LegendLabelOwnProps>;

// legendItem own props
export type LegendItemOwnProps = {
  flexDirection?: FlexDirection;
  alignItems?: string;
  margin?: string | number;
  // children?: Vue.VNode; // don't need to type check children because of slots
  display?: string;
};

// all accepted legendItem props
export type LegendItemProps = LegendItemOwnProps &
  Omit<Vue.HTMLAttributes, keyof LegendItemOwnProps>;

// legendShape
export type LegendShapeProps = {
  label?: any;
  //confused on label, left as any for now
  //item?: string;
  //item?: Data;
  itemIndex: number;
  margin?: string | number;
  shape?: string;
  //shape?: LegendShape<Data, Output>;
  //fill?: () => string | undefined;
  //size?: () => string | number | undefined;
  //shapeStyle?: any;
  // width?: string | number;
  // height?: string | number;
  //EXPLAINER: commented out a bunch of visx stuff for the shape, since we will be doing just rect and circle for now
  //we will be leveraging the svg defaults for these then
};

/******** not used ********/
// export type LabelFormatterFactory<Scale extends AnyD3Scale> = (args: {
//   scale: Scale;
//   labelFormat: LabelFormatter<ScaleInput<Scale>>;
// }) => ItemTransformer<ScaleInput<Scale>, ReturnType<Scale>>;

// export type ItemTransformer<Datum, Output> = (
//   item: Datum,
//   itemIndex: number,
// ) => FormattedLabel<Datum, Output>;
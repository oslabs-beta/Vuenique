<script setup lang="ts">
// import LegendItem from './LegendItem';
// import LegendLabel from './LegendLabel';
// import LegendShape from './LegendShape';

import * as Vue from 'vue'
import type {
  FlexDirection,
  FormattedLabel,
  LabelFormatter,
  LabelFormatterFactory,
  LegendShape as LegendShapeType,
} from '../../types';
import labelTransformFactory from '../../utility/labelTransformFactory'
import valueOrIdentity, { valueOrIdentityString } from '../../util/valueOrIdentity';


type LegendProps = {
  //name for legend wrapper/container
  className?: string;
  // styles for legend container
  style?: Vue.CSSProperties;
  //domain of legend
  domain?: any[];
  // ScaleInput<Scale>[];
  // //legend width
  shapeWidth?: string | number;
  //legend height
  shapeHeight?: string | number;
  //legend margin
  shapeMargin?: string | number;
  //alignment of legend labels
  labelAlign?: string;
  //
  scale: any;
  //
  labelFlex?: string | number;
  //margin for the legend labels
  labelMargin?: string | number;
  //margin for legend items
  itemMargin?: string | number;
  //legend's own direction
  direction?: FlexDirection;
  //direction of items
  itemDirection?: FlexDirection;
  // fill accessor function
  fill?: string | undefined;
  //(label: FormattedLabel<ScaleInput<Scale>, ReturnType<Scale>>) => string | undefined
  //size accessor function
  size?: string | number | undefined;
  // (
  //   label: FormattedLabel<ScaleInput<Scale>, ReturnType<Scale>>,
  // ) => string | number | undefined;
  //Legend shape string preset or Element or Component
  shape?: LegendShapeType;
  //Styles for the legend shapes
  shapeStyle?: (label: FormattedLabel<ScaleInput<Scale>, ReturnType<Scale>>) => Vue.CSSProperties;
  // Given a legend item and its index, returns an item label
  labelFormat?: LabelFormatter<ScaleInput<Scale>>;
  //Given the legend scale and labelFormatter, returns a label with datum, index, value, and label
  labelTransform?: LabelFormatterFactory;
  //extra props
  legendLabelProps?: Partial<LegendLabelProps>;
}

const defaultStyle = {
  display: 'flex',
};

const legendProps = withDefaults(defineProps<LegendProps>(), {
  style: defaultStyle,
  shape:'circle',
  fill: valueOrIdentityString,
  size: valueOrIdentityString,
  labelFormat: valueOrIdentity,
  labelTransform: labelTransformFactory,
  shapeWidth: 15,
  shapeHeight: 15,
  shapeMargin: '2px 4px 2px 0',
  labelAlign: 'left',
  labelFlex: '1',
  labelMargin: '0 4px',
  itemMargin:  '0',
  direction: 'column',
  itemDirection: 'row',
});

  const domain = inputDomain || (('domain' in scale ? scale.domain() : []) as Datum[]);
  const labelFormatter = labelTransform(scale, labelFormat );
  const labels = domain.map(labelFormatter);

</script>

<template></template>

<style></style>
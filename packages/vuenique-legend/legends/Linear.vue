<script setup lang="ts">
import Legend from "./Legend/index.vue";
import type { FlexDirection, LegendShape, LegendLabelProps } from "../types";
import { computed } from "vue";
import defaultDomain from "../utility/defaultDomain";
import type * as Vue from "vue"

type LinearProps = {
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
  shape?: LegendShape<any, any>;
  // styles for the legend shapes
  shapeStyle?: (label: any) => Vue.CSSProperties;
  // given a legend item and its index, returns an item label
  labelFormat?: any;
  // given the legend scale and labelFormatter, returns a label with datum, index, value, and label
  labelTransform?: any;
  // extra props
  legendLabelProps?: Partial<LegendLabelProps>;

  steps?: number
};
const legendLinearProps = withDefaults(defineProps<LinearProps>(), {
  steps: 5,
});

const domain = computed(() => {
  const { steps, scale } = legendLinearProps;
  return defaultDomain({ steps, scale });
});
</script>
<template>
  <Legend
    v-bind="$attrs"
    :scale="legendLinearProps.scale"
    :domain="legendLinearProps.domain ? legendLinearProps.domain : domain"
  ></Legend>
</template>

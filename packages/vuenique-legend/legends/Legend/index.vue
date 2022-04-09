<script setup lang="ts">
import { computed } from "vue";
import type {
  FlexDirection,
  LegendShape as LegendShapeProps,
  LegendLabelProps,
} from "../../types";
import type * as Vue from "vue";
import labelTransformFactory from "../../utility/labelTransformFactory";
import {
  valueOrIdentity,
  valueOrIdentityString,
} from "../../utility/valueOrIdentity";
import type { ValueOrIdentity } from "../../utility/valueOrIdentity";
import LegendItem from "./LegendItem.vue";
import LegendLabel from "./LegendLabel.vue";
import LegendShape from "./LegendShape.vue";


type LegendProps = {
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
  shape?: LegendShapeProps;
  // styles for the legend shapes
  shapeStyle?: (label: any) => Vue.CSSProperties;
  // given a legend item and its index, returns an item label
  labelFormat?: <T>(obj: ValueOrIdentity<T>) => T;
  // given the legend scale and labelFormatter, returns a label with datum, index, value, and label
  labelTransform?: (arg: { scale: any, labelFormat: <T>(obj: ValueOrIdentity<T>) => T}) => (d: number, i: number) => Record<string, unknown>;
  // extra props
  legendLabelProps?: Partial<LegendLabelProps>;
};

const legendProps = withDefaults(defineProps<LegendProps>(), {
  shape: "circle",
  style: {
    display: "flex",
  },
  fill: valueOrIdentityString,
  size: valueOrIdentityString,
  labelFormat: valueOrIdentity,
  labelTransform: labelTransformFactory,
  shapeWidth: 15,
  shapeHeight: 15,
  shapeMargin: "2px 4px 2px 0",
  labelAlign: "left",
  labelFlex: "1",
  labelMargin: "0 4px",
  itemMargin: "0",
  direction: "column",
  itemDirection: "row",
});
// if no domain prop, domain should be -> (('domain' in scale ? scale.domain() : []) as Datum[])
const domain = legendProps.domain || [];
const labels = computed(() => {
  const { scale, labelFormat, labelTransform } = legendProps;
  const labelFormatter = labelTransform({ scale, labelFormat });
  return domain.map(labelFormatter);
});

const legendLabels = computed(() => {
  return labels.value.map((label: any, i) => {
    const key = `legend-${label.text}-${i}`;
    const item = domain[i];
    const itemIndex = i;
    return {
      key,
      item,
      itemIndex,
      label,
    };
  });
});

const styleObject = computed(() => {
  const { style, direction } = legendProps;
  return {
    ...style,
    direction,
  };
});
</script>

<template>
  <div class="vuenique-legend" :style="styleObject.value">
    <LegendItem
      v-for="legendItem in legendLabels"
      :key="legendItem.key"
      :margin="legendProps.itemMargin"
      :flexDirection="legendProps.itemDirection"
      :label="legendItem.label"
      v-bind="$attrs"
    >
      <LegendShape
        :item="legendItem.item"
        :itemIndex="legendItem.itemIndex"
        :shape="legendProps.shape"
        :width="legendProps.shapeWidth"
        :height="legendProps.shapeHeight"
        :margin="legendProps.shapeMargin"
        :label="legendItem.label"
        :fill="legendProps.fill"
        :size="size"
        :shapeStyle="legendProps.shapeStyle"
      />
      <LegendLabel
        :label="legendItem.label.text"
        :flex="legendProps.labelFlex"
        :margin="legendProps.labelMargin"
        :align="legendProps.labelAlign"
        :legendLabelProps="legendProps.legendLabelProps"
      />
    </LegendItem>
  </div>
</template>

<style></style>

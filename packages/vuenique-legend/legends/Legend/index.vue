<script setup lang="ts">
// import LegendItem from './LegendItem';
// import LegendLabel from './LegendLabel';
// import LegendShape from './LegendShape';

import * as Vue from 'vue'
import * as CSS from 'csstype'
import { computed } from 'vue'
import type {
  FlexDirection,
  FormattedLabel,
  LabelFormatter,
  LabelFormatterFactory,
  LegendShape as LegendShapeType,
  LegendProps as LegendProps
} from '../../types';
import labelTransformFactory from '../../utility/labelTransformFactory'
import valueOrIdentity, { valueOrIdentityString } from '../../util/valueOrIdentity';


const defaultStyle = {
  display: 'flex',
};

const legendProps = withDefaults(defineProps<LegendProps>(), {
  shape: 'circle',
  style: defaultStyle,
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

const domain = legendProps.domain || []
// || (('domain' in scale ? scale.domain() : []) as Datum[]);
const labels = computed(() => {
  const { scale, labelFormat, labelTransform } = legendProps
  const labelFormatter = labelTransform({ scale, labelFormat })
  return domain.map(labelFormatter)
})


const legendLabels = computed(() => {
  return labels.value.map((label: any, i) => {
    const key = `legend-${label.text}-${i}`
    const item = domain[i]
    const itemIndex = i 
    return {
      key,
      item,
      itemIndex,
      label,
    }
  })
})
</script>

<template>
  <div class="vuenique-legend"
    :style="legendProps.style"
  >
    <LegendItem v-for="legendItem in legendLabels" :key="legendItem.key" 
    :margin="legendProps.itemMargin" 
    :flexDirection="legendProps.itemDirection" 
    :label="legendItem.label"
    <!-- need to add legendItemProps -->
    >
      <LegendShape :item="legendItem.item"
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
      :label="legendItem.label"
      :flex="legendProps.labelFlex"
      :margin="legendProps.labelMargin"
      :align="legendProps.labelAlign"
      :legendLabelProps="legendProps.legendLabelProps"
      />
    </LegendItem>
  </div>
</template>

<style>
</style>
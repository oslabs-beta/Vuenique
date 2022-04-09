<script setup lang="ts">
import { computed } from "vue";
import { valueOrIdentityString } from "../../utility/valueOrIdentity"

type LegendShapeProps = {
  label?: any;
  itemIndex: number;
  margin?: string | number;
  fill: (label: any) => string | undefined;
  shape?: string;
  width?: number | string;
  height?: number | string;
  radius?: number | string;
};

const legendShapeProps = withDefaults(defineProps<LegendShapeProps>(), {
  margin: 5,
  shape: "rect",
  width: '10',
  height: '10',
  radius: '5',
});

console.log(legendShapeProps.fill);

const labelFill = computed(() => {
  const { fill, label } = legendShapeProps;
  return fill({ ...label });
});
</script>

<template>
  <div v-if="legendShapeProps.shape === 'rect'" className="legendShape" v-bind="$attrs">
  <svg :width="10" :height="10">
    <rect :width="legendShapeProps.width" :height="legendShapeProps.height" :fill="labelFill"/>
  </svg>
  </div>
  <div v-else className="legendShape" :v-bind="$attrs">
  <svg :width="10" :height="10">
    <circle :cx="5" :cy="5" :r="legendShapeProps.radius" :fill="labelFill" />
  </svg>
  </div>
  <!-- need to pass correct info for if it is rect or circle-->
  <!-- v-if?; rect would need height, width, circle would need radius-->
</template>

<style></style>

<script setup lang="ts">
import { computed } from "vue";

export type LegendShapeProps = {
  label?: any;
  itemIndex: number;
  margin?: string | number;
  fill: (label: any) => string | undefined;
  shape?: string;
  width?: number | string;
  height?: number | string;
  radius?: number | string;
};

// define props and default values
const legendShapeProps = withDefaults(defineProps<LegendShapeProps>(), {
  margin: 5,
  shape: "rect",
  width: "10",
  height: "10",
  radius: "5",
});

// accessing fill property
const labelFill = computed(() => {
  const { fill, label } = legendShapeProps;
  return fill({ ...label });
});
</script>

<template>
  <g
    v-if="legendShapeProps.shape === 'rect'"
    className="legendShape"
    v-bind="$attrs"
  >
    <svg :width="10" :height="10">
      <rect
        :width="legendShapeProps.width"
        :height="legendShapeProps.height"
        :fill="labelFill"
      />
    </svg>
  </g>
  <g v-else className="legendShape" :v-bind="$attrs">
    <svg :width="10" :height="10">
      <circle :cx="5" :cy="5" :r="legendShapeProps.radius" :fill="labelFill" />
    </svg>
  </g>
  <!-- need to pass correct info for if it is rect or circle-->
  <!-- v-if?; rect would need height, width, circle would need radius-->
</template>

<style></style>

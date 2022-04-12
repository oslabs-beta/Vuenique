<script setup lang="ts">
import { computed } from "vue";
import type { FlexDirection } from "../../types";

export type LegendItemOwnProps = {
  flexDirection?: FlexDirection;
  alignItems?: string;
  margin?: string | number;
  // children?: Vue.VNode; // don't need to type check children because of slots
  display?: string;
};

// define props and default values
const legendItemProps = withDefaults(defineProps<LegendItemOwnProps>(), {
  flexDirection: "row",
  alignItems: "center",
  margin: "0",
  display: "flex",
});

// creates a reactive styles object
const styleObject = computed(() => {
  const { flexDirection, alignItems, margin, display } = legendItemProps;
  return {
    flexDirection,
    alignItems,
    margin,
    display,
  };
});
</script>

<template>
  <div class="vuenique-legend-item" :style="styleObject" v-bind="$attrs">
    <slot></slot>
  </div>
</template>

<style></style>

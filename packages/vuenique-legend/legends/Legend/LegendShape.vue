<script setup lang="ts">
import { computed } from "vue";

type LegendShapeProps = {
  label?: any;
  itemIndex: number;
  margin?: string | number;
  shape?: string;
};

const legendShapeProps = withDefaults(defineProps<LegendShapeProps>(), {
  margin: 5,
  shape: "rect",
  // fill: 'black',
  // width: 10,
  // height: 10,
  // radius: 5,
});
</script>

<template>
  <div v-if="legendShapeProps.shape === 'rect'" className="legendShape" :v-bind="$attrs">
  <!--{{legendShapeProps.shape}}-->
    <rect />
  </div>
  <div v-else className="legendShape" :v-bind="$attrs">
    <circle />
  </div>
  <!-- need to pass correct info for if it is rect or circle-->
  <!-- v-if?; rect would need height, width, circle would need radius-->
</template>

<style></style>

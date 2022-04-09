<script setup lang="ts">
export type CircleProps = {
  //x-coord of circle
  x: number;
  //y-coord of circle
  y: number;
  //radius of circle
  r: number;
  //fill color of circle
  fill?: string;
};

const circleProps = withDefaults(defineProps<CircleProps>(), {
  fill: 'black',
});
</script>

<template>
  <circle
    :cx="circleProps.x"
    :cy="circleProps.y"
    :r="circleProps.r"
    :fill="circleProps.fill"
  />
</template>

<style></style>

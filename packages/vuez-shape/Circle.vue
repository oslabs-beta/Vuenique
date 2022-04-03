<script setup lang="ts">
type CircleProps = {
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
  <svg>
    <circle
      :cx="circleProps.x"
      :cy="circleProps.y"
      :r="circleProps.r"
      :fill="circleProps.fill"
    />
  </svg>
</template>

<style></style>

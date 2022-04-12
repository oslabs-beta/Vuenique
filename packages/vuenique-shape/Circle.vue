<script setup lang="ts">
export type CircleProps = {
  // render class attributes for <rect> tag
  class?: string;
  // fill color of circle
  // fill?: string;
};

const circleProps = defineProps<CircleProps>();
</script>

<template>
  <circle :class="circleProps.class" v-bind="$attrs" />
</template>

<style></style>

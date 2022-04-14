<script setup lang="ts">
export type CircleProps = {
  class?: string;
};

const circleProps = defineProps<CircleProps>();
</script>

<template>
  <circle :class="circleProps.class" v-bind="$attrs" />
</template>

<style></style>

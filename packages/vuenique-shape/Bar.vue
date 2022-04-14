<script setup lang="ts">
// Type declarations for the <rect> tag
interface BarProps {
  class?: string;
}

const barProps = defineProps<BarProps>();
</script>

<template>
  <!-- $attrs handle additional props not explicity defined in the interface BarProps -->
  <rect :class="barProps.class" v-bind="$attrs" />
</template>

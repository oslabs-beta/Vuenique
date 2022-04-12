<script setup lang="ts">
import { type Ref } from "vue";

// Type declarations for the <rect> tag
interface BarProps {
  // render class attributes for <rect> tag
  class?: string;
}

const barProps = defineProps<BarProps>();
</script>

<template>
  <!-- $attrs handle additional props not explicity defined in the interface BarProps -->
  <rect
    :class="barProps.class"
    v-bind="$attrs"
  />
</template>

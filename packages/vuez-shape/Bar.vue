<!-- may need to move this to where the svg element lives later -->
<script lang="ts">
export default {
  // Prevent the root element from inheriting the fallthrough attributes if set false
  inheritAttrs: true,
};
</script>

<script setup lang="ts">
import type { Ref } from "vue";

// Type declarations for the <rect> tag
interface BarProps {
  // render class attributes for <rect> tag
  className?: string;
  // reference to underlying <rect> tag
  innerRef?: Ref<SVGRectElement>;
}

const barProps = defineProps<BarProps>();
</script>

<template>
  <!-- $attrs handle additional props not explicity defined in the interface BarProps -->
  <rect
    :ref="barProps.innerRef"
    :className="barProps.className"
    v-bind="$attrs"
  />
</template>

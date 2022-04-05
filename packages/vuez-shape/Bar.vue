<!-- may need to move this to where the svg element lives later -->
<script lang="ts">
export default {
  // Prevent the root element from inheriting the fallthrough attributes if set false
  inheritAttrs: true,
};
</script>

<script setup lang="ts">
import { onMounted, type Ref, defineExpose, ref } from "vue";

// Type declarations for the <rect> tag
interface BarProps {
  // render class attributes for <rect> tag
  class?: string;
  // reference to underlying <rect> tag
  innerRef?: Ref<SVGRectElement>;
}

const barProps = defineProps<BarProps>();
// const rect = ref<HTMLElement | null>(null);

onMounted(() => {
  barProps.innerRef?.value.focus();
  // barProps.innerRef?.value?.focus();
  console.log("barProps.innerRef", barProps.innerRef);
  // console.log("rect", rect.value?.getBoundingClientRect());
});
</script>

<template>
  <!-- $attrs handle additional props not explicity defined in the interface BarProps -->
  <input ref="el" type="text" />

  <rect
    ref="barProps.innerRef"
    :class="barProps.class"
    v-bind="$attrs"
  />

</template>

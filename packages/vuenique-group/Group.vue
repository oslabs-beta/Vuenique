<script lang="ts">
export default {
  // Prevent the root element from inheriting the fallthrough attributes if set false
  inheritAttrs: true,
};
</script>

<script setup lang="ts">
// Type declarations for <g> tag
interface GroupProps {
  // top offset for <g> tag
  top?: number;
  // left offset for <g> tag
  left?: number;
  // alternative to top and left: written as "translate(${left}, ${top})"
  transform?: string;
  // render class attributes for <g> tag
  class?: string;
}
// default values for top and left
const groupProps = withDefaults(defineProps<GroupProps>(), {
  top: 0,
  left: 0,
});
</script>

<template>
  <!-- $attrs handle additional props not explicity defined in the interface GroupProps -->
  <g
    :class="groupProps.class"
    :transform="
      groupProps.transform
        ? groupProps.transform
        : `translate(${groupProps.left}, ${groupProps.top})`
    "
    v-bind="$attrs"
  >
    <!-- slot renders children passed within the Group component -->
    <slot />
  </g>
</template>

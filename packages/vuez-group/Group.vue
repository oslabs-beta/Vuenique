<!-- may need to move this to where the svg element lives later -->
<script lang="ts">
export default {
  // Prevent the root element from inheriting the fallthrough attributes if set false
  inheritAttrs: false,
};
</script>

<script setup lang="ts">
import Vue from "vue";

// Type declarations for <g> tag
interface GroupProps {
  // top offset for <g> tag
  top?: number;
  // left offset for <g> tag
  left?: number;
  // alternative to top and left: written as "translate(${left}, ${top})"
  transform?: string;
  // render class attributes for <g> tag
  className?: string;
  // reference to underlying <g> tag
  innerRef?: Vue.Ref<SVGElement>;
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
      :ref="groupProps.innerRef"
      :className="groupProps.className"
      :transform="groupProps.transform || `translate(${left}, ${top})`"
      v-bind="$attrs"
    >
      <!-- slot renders children passed within the Group component -->
      <slot />
    </g>
</template>
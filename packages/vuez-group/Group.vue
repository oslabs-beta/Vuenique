<!-- may need to move this to where the svg element lives later -->
<script lang="ts">
import { toRefs } from 'vue';
export default {
  // Prevent the root element from inheriting the fallthrough attributes if set false'
  inheritAttrs: true,
};
</script>

<script setup lang="ts">
import type { Ref } from "vue";
import { useSlots, onMounted } from "vue";
import * as Vue from 'vue'

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
  // reference to underlying <g> tag
  innerRef?: Ref<SVGElement>;
}
// default values for top and left 
const groupProps = withDefaults(defineProps<GroupProps>(), {
  top: 0,
  left: 0,
});

// useSlots().default() gives us an array of default slots passed to this component from the parent template
// const slots = useSlots().default()
// console.log(slots)
// console.log(Vue.isVNode(slots[0].children))

</script>

<template>
    <!-- $attrs handle additional props not explicity defined in the interface GroupProps -->
    <g
      ref="groupProps.innerRef"
      :class="groupProps.class"
      :transform="groupProps.transform? groupProps.transform:`translate(${groupProps.left}, ${groupProps.top})`"
      v-bind="$attrs"
    >
    <!-- slot renders children passed within the Group component -->  
    <slot/>
    </g>
</template>
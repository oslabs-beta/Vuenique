<script setup lang="ts">
import { computed } from 'vue';
import type * as Vue from "vue";

type LegendLabelOwnProps = {
  align?: string;
  label?: Vue.VNode;
  flex?: string | number;
  margin?: string | number;
  children?: Vue.VNode;
};

// all legendLabel accepted props
// type LegendLabelProps = LegendLabelOwnProps &
//   Omit<Vue.HTMLAttributes, keyof LegendLabelOwnProps>;
  
//possible way of immplementing children, but falling back to 
// <slot>"legendlabelProps.label"</slot>
const legendLabelProps = withDefaults(defineProps<LegendLabelOwnProps>(), {
  flex: 1,
  margin:'5px 0',
  align: 'left',
})
console.log(legendLabelProps.label)
</script>
<template>
<div className = "legendLabels" v-bind="$attrs" v-bind:style="{justifyContent: legendLabelProps.align, display:'flex', flex: legendLabelProps.flex, margin: legendLabelProps.margin}">
 {{legendLabelProps.label}}
 </div>
</template>
<style>
</style>
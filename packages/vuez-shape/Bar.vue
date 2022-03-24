<script setup lang="ts">
import Vue, { toRefs } from "vue";

interface BarProps {
  className?: string;
  innerRef?: Vue.Ref<SVGRectElement>;
}


// type BarProps = Props & Omit<SVGRectElement, keyof Props>;


// type AddSVGProps<Props, Element extends SVGElement> = Props &
//   Omit<Vue.SVGProps<Element>, keyof Props>;

/**
 * Construct a type with the properties of T except for those in type K.
type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
 */


//not sure about the types for restProps
const barProps = defineProps<BarProps>();
// const { className, innerRef, ...restProps } = toRefs(barProps);
// console.log($attrs);
// console.log('barProps', barProps);
// console.log('className',className)
/*
export default defineComponent({
    props: {
        BarProps,
        ...restProps
    },
    setup(){

    }
})
*/
// const barProps = defineProps<{
//   class?: string
//   innerRef?: Vue.Ref<SVGRectElement>;
// }>();

</script>

<template>
  <svg>
    <rect
      :ref="barProps.innerRef"
      :className="barProps.className"
      v-bind="$attrs"
    />
  </svg>
</template>

<style>
rect {
  /* fill:rgba(23, 233, 217, .5);
  border-color: rgb(196, 5, 196);
  width: 100%;
  height: 100%; */
}
</style>

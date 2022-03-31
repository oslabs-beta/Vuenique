<script setup lang="ts">
import type { Line as LineType } from 'd3-shape';
import { line } from './utils/D3ShapeFactory';
import type { LinePathConfig } from "./types";
import type { Ref } from "vue";
import { computed } from "vue";

type LinePathProps<Datum> = {
  /** Array of data for which to generate a line shape. */
  data?: Datum[];
  /** React RefObject passed to the path element. */
  innerRef?: Ref<SVGPathElement>;
  /** Fill color of the path element. */
  fill?: string;
  /** className applied to path element. */
  className?: string;
} & LinePathConfig<Datum>;

const linePathProps = withDefaults(defineProps<LinePathProps<unknown>>(), {
  data: [] as any,
  fill: "transparent",
  defined: () => true,
});
// const x = linePathProps.x;
// const y = linePathProps.y;
// const defined = linePathProps.defined;
// const curve = linePathProps.curve;

// deconstructing props outside of computed leads to loss of reactivity
const path = computed(() => {
  const x = linePathProps.x;
  const y = linePathProps.y;
  const defined = linePathProps.defined;
  const curve = linePathProps.curve;
  return line({ x, y, defined, curve });
})
// need to add a check to see if children were passed to this component, and if children are VNodes
  // visx: if (children) return <>{children({ path })}</>;
</script>

<template>
  <path :ref="linePathProps.innerRef"
        :className="linePathProps.className"
        :d="path(data) || ''"
        :fill="linePathProps.fill"
    
  />
</template>

<style>

</style>



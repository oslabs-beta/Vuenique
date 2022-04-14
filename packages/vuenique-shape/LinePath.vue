<script setup lang="ts">
import { line } from "./utils/D3ShapeFactory";
import type { Ref } from "vue";
import { computed } from "vue";
import type { CurveFactory, CurveFactoryLineOnly } from "d3-shape";

type Datum = number | boolean | string | object | unknown[] | null;

type LinePathProps<Datum> = {
  /** array of data to generate line shape from */
  data?: Datum[];
  /** fill color */
  fill?: string;
  /** className applied */
  className?: string;
  /** function that returns a boolean when line path points are passed as arguments. Line path is representative of points that return true  */
  defined?: (d: Datum, index: number, data: Datum[]) => boolean;
  /** sets the curve factory from d3-line curve for the line generator. Defaults to curveLinear. */
  curve?: CurveFactory | CurveFactoryLineOnly;
  /** sets the x0 accessor function, and sets x1 to null. */
  x?: number | ((d: Datum, index: number, data: Datum[]) => number);
  /** sets the y0 accessor function, and sets y1 to null. */
  y?: number | ((d: Datum, index: number, data: Datum[]) => number);
};

const linePathProps = withDefaults(defineProps<LinePathProps<Datum>>(), {
  fill: "transparent",
  defined: () => true,
});

// deconstructing props outside of computed leads to loss of reactivity
const path = computed(() => {
  const x = linePathProps.x;
  const y = linePathProps.y;
  const defined = linePathProps.defined;
  const curve = linePathProps.curve;
  return line({ x, y, defined, curve });
});
</script>

<template>
  <path
    :className="linePathProps.className"
    :d="data ? path(data) || '' : path([]) || ''"
    :fill="linePathProps.fill"
    strokeLinecap="round"
    v-bind="$attrs"
  />
</template>

<style></style>

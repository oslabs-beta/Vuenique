<script setup lang="ts">
import type { Line as LineType } from 'd3-shape';
import { line } from './utils/D3ShapeFactory';
import type { LinePathConfig, AccessorForArrayItem } from './types';
import type { Ref } from 'vue';
import { computed, ref } from 'vue';
import type { CurveFactory, CurveFactoryLineOnly } from 'd3-shape';

type Datum = number | boolean | string | object | unknown[] | null;

type LinePathProps<Datum> = {
  /** Array of data for which to generate a line shape. */
  data?: Datum[];
  /** React RefObject passed to the path element. */
  innerRef?: Ref<SVGPathElement>;
  /** Fill color of the path element. */
  fill?: string;
  /** className applied to path element. */
  className?: string;
  /** The defined accessor for the shape. The final line shape includes all points for which this function returns true. By default all points are defined. */
  defined?: (d: Datum, index: number, data: Datum[]) => boolean;
  /** Sets the curve factory (from @visx/curve or d3-curve) for the line generator. Defaults to curveLinear. */
  curve?: CurveFactory | CurveFactoryLineOnly;
  /** Sets the x0 accessor function, and sets x1 to null. */
  x?: number | ((d: Datum, index: number, data: Datum[]) => number);
  /** Sets the y0 accessor function, and sets y1 to null. */
  y?: number | ((d: Datum, index: number, data: Datum[]) => number);
};

const linePathProps = withDefaults(defineProps<LinePathProps<Datum>>(), {
  fill: 'transparent',
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
});

// need to add a check to see if children were passed to this component, and if children are VNodes
// visx: if (children) return <>{children({ path })}</>;

// console.log(path.value(linePathProps.data), "path data")
</script>

<template>
  <path
    :ref="linePathProps.innerRef"
    :className="linePathProps.className"
    :d="data ? path(data) || '' : path([]) || ''"
    :fill="linePathProps.fill"
    strokeLinecap="round"
    v-bind="$attrs"
  />
</template>

<style></style>

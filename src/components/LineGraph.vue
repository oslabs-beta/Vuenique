<script setup lang="tsx">
import { ref, computed, Ref, reactive } from 'vue';
import LinePath from '../../packages/vuez-shape/LinePath.vue';
import { scaleLinear, scaleTime } from '../../packages/vuez-scale';
import { extent } from 'd3-array';

//update to have LineGraphProps and defineProps so it's more ready to use, not relying on mock data in here

type AppleStock = {
  date: string;
  close: number;
};
const data: AppleStock[] = reactive([
  { date: '2007-04-24T07:00:00.000Z', close: 93.24 },
  { date: '2007-04-25T07:00:00.000Z', close: 95.35 },
  { date: '2007-04-26T07:00:00.000Z', close: 98.84 },
  { date: '2007-04-27T07:00:00.000Z', close: 99.92 },
  { date: '2007-04-30T07:00:00.000Z', close: 99.8 },
  { date: '2007-05-01T07:00:00.000Z', close: 99.47 },
  { date: '2007-05-02T07:00:00.000Z', close: 100.39 },
  { date: '2007-05-03T07:00:00.000Z', close: 100.4 },
  { date: '2007-05-04T07:00:00.000Z', close: 100.81 },
  { date: '2007-05-07T07:00:00.000Z', close: 103.92 },
  { date: '2007-05-08T07:00:00.000Z', close: 105.06 },
  { date: '2007-05-09T07:00:00.000Z', close: 106.88 },
  { date: '2007-05-10T07:00:00.000Z', close: 107.34 },
  { date: '2007-05-11T07:00:00.000Z', close: 108.74 },
  { date: '2007-05-14T07:00:00.000Z', close: 109.36 },
  { date: '2007-05-15T07:00:00.000Z', close: 107.52 },
  { date: '2007-05-16T07:00:00.000Z', close: 107.34 },
  { date: '2007-05-17T07:00:00.000Z', close: 109.44 },
  { date: '2007-05-18T07:00:00.000Z', close: 110.02 },
  { date: '2007-05-21T07:00:00.000Z', close: 111.98 },
  { date: '2007-05-22T07:00:00.000Z', close: 113.54 },
  { date: '2007-05-23T07:00:00.000Z', close: 112.89 },
  { date: '2007-05-24T07:00:00.000Z', close: 110.69 },
  { date: '2007-05-25T07:00:00.000Z', close: 113.62 },
  { date: '2007-05-29T07:00:00.000Z', close: 114.35 },
  { date: '2007-05-30T07:00:00.000Z', close: 118.77 },
  { date: '2007-05-31T07:00:00.000Z', close: 121.19 },
  { date: '2007-06-01T07:00:00.000Z', close: 118.4 },
  { date: '2007-06-04T07:00:00.000Z', close: 121.33 },
  { date: '2007-06-05T07:00:00.000Z', close: 122.67 },
  { date: '2007-06-06T07:00:00.000Z', close: 123.64 },
  { date: '2007-06-07T07:00:00.000Z', close: 124.07 },
  { date: '2007-06-08T07:00:00.000Z', close: 124.49 },
  { date: '2007-06-11T07:00:00.000Z', close: 120.19 },
  { date: '2007-06-12T07:00:00.000Z', close: 120.38 },
  { date: '2007-06-13T07:00:00.000Z', close: 117.5 },
  { date: '2007-06-14T07:00:00.000Z', close: 118.75 },
  { date: '2007-06-15T07:00:00.000Z', close: 120.5 },
  { date: '2007-06-18T07:00:00.000Z', close: 125.09 },
  { date: '2007-06-19T07:00:00.000Z', close: 123.66 },
  { date: '2007-06-20T07:00:00.000Z', close: 121.55 },
  { date: '2007-06-21T07:00:00.000Z', close: 123.9 },
  { date: '2007-06-22T07:00:00.000Z', close: 123 },
  { date: '2007-06-25T07:00:00.000Z', close: 122.34 },
  { date: '2007-06-26T07:00:00.000Z', close: 119.65 },
  { date: '2007-06-27T07:00:00.000Z', close: 121.89 },
  { date: '2007-06-28T07:00:00.000Z', close: 120.56 },
  { date: '2007-06-29T07:00:00.000Z', close: 122.04 },
  { date: '2007-07-02T07:00:00.000Z', close: 121.26 },
  { date: '2007-07-03T07:00:00.000Z', close: 127.17 },
  { date: '2007-07-05T07:00:00.000Z', close: 132.75 },
  { date: '2007-07-06T07:00:00.000Z', close: 132.3 },
  { date: '2007-07-09T07:00:00.000Z', close: 130.33 },
  { date: '2007-07-10T07:00:00.000Z', close: 132.35 },
  { date: '2007-07-11T07:00:00.000Z', close: 132.39 },
  { date: '2007-07-12T07:00:00.000Z', close: 134.07 },
  { date: '2007-07-13T07:00:00.000Z', close: 137.73 },
  { date: '2007-07-16T07:00:00.000Z', close: 138.1 },
  { date: '2007-07-17T07:00:00.000Z', close: 138.91 },
  { date: '2007-07-18T07:00:00.000Z', close: 138.12 },
  { date: '2007-07-19T07:00:00.000Z', close: 140 },
  { date: '2007-07-20T07:00:00.000Z', close: 143.75 },
  { date: '2007-07-23T07:00:00.000Z', close: 143.7 },
  { date: '2007-07-24T07:00:00.000Z', close: 134.89 },
  { date: '2007-07-25T07:00:00.000Z', close: 137.26 },
  { date: '2007-07-26T07:00:00.000Z', close: 146 },
  { date: '2007-07-27T07:00:00.000Z', close: 143.85 },
  { date: '2007-07-30T07:00:00.000Z', close: 141.43 },
  { date: '2007-07-31T07:00:00.000Z', close: 131.76 },
  { date: '2007-08-01T07:00:00.000Z', close: 135 },
  { date: '2007-08-02T07:00:00.000Z', close: 136.49 },
  { date: '2007-08-03T07:00:00.000Z', close: 131.85 },
  { date: '2007-08-06T07:00:00.000Z', close: 135.25 },
  { date: '2007-08-07T07:00:00.000Z', close: 135.03 },
  { date: '2007-08-08T07:00:00.000Z', close: 134.01 },
  { date: '2007-08-09T07:00:00.000Z', close: 126.39 },
  { date: '2007-08-10T07:00:00.000Z', close: 125 },
  { date: '2007-08-13T07:00:00.000Z', close: 127.79 },
  { date: '2007-08-14T07:00:00.000Z', close: 124.03 },
  { date: '2007-08-15T07:00:00.000Z', close: 119.9 },
  { date: '2007-08-16T07:00:00.000Z', close: 117.05 },
  { date: '2007-08-17T07:00:00.000Z', close: 122.06 },
  { date: '2007-08-20T07:00:00.000Z', close: 122.22 },
  { date: '2007-08-21T07:00:00.000Z', close: 127.57 },
  { date: '2007-08-22T07:00:00.000Z', close: 132.51 },
  { date: '2007-08-23T07:00:00.000Z', close: 131.07 },
  { date: '2007-08-24T07:00:00.000Z', close: 135.3 },
  { date: '2007-08-27T07:00:00.000Z', close: 132.25 },
  { date: '2007-08-28T07:00:00.000Z', close: 126.82 },
  { date: '2007-08-29T07:00:00.000Z', close: 134.08 },
  { date: '2007-08-30T07:00:00.000Z', close: 136.25 },
  { date: '2007-08-31T07:00:00.000Z', close: 138.48 },
  { date: '2007-09-04T07:00:00.000Z', close: 144.16 },
  { date: '2007-09-05T07:00:00.000Z', close: 136.76 },
  { date: '2007-09-06T07:00:00.000Z', close: 135.01 },
  { date: '2007-09-07T07:00:00.000Z', close: 131.77 },
  { date: '2007-09-10T07:00:00.000Z', close: 136.71 },
  { date: '2007-09-11T07:00:00.000Z', close: 135.49 },
  { date: '2007-09-12T07:00:00.000Z', close: 136.85 },
  { date: '2007-09-13T07:00:00.000Z', close: 137.2 },
  { date: '2007-09-14T07:00:00.000Z', close: 138.81 },
]);

const getDate = (d: AppleStock) => new Date(d.date).valueOf();
const getStockValue = (d: AppleStock) => d.close;
// const annotateDatum = data[Math.floor(data.length / 2) + 4];
// const approxTooltipHeight = 70;

const width = ref(400);
const height = ref(400);

const xScale = computed(() => {
  return scaleTime({
    domain: extent(data, (d) => getDate(d)) as number[],
    range: [0, width.value],
  });
});
const yScale = computed(() => {
  return scaleLinear({
    domain: extent(data, (d) => getStockValue(d)) as number[],
    range: [height.value - 100, 100],
  });
});
</script>

<template>
  <svg :width="width" :height="height">
    <LinePath
      stroke="#4dffa6"
      strokeWidth="2"
      :data="data"
      :x="(d: AppleStock) => xScale(getDate(d)) ?? 0"
      :y="(d: AppleStock) => yScale(getStockValue(d)) ?? 0"
    />
  </svg>
</template>

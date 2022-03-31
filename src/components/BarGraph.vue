<script setup lang="tsx">
import Bar from "../../packages/vuez-shape/Bar.vue";
import Group from "../../packages/vuez-group/Group.vue";
import { scaleBand, scaleLinear } from "../../packages/vuez-scale/index";
import {  ref, computed, Ref, reactive} from "vue";

const data = reactive([
  { letter: 'A', frequency: 0.08167 },
  { letter: 'B', frequency: 0.01492 },
  { letter: 'C', frequency: 0.02782 },
  { letter: 'D', frequency: 0.04253 },
  { letter: 'E', frequency: 0.12702 },
  { letter: 'F', frequency: 0.02288 },
  { letter: 'G', frequency: 0.02015 },
  { letter: 'H', frequency: 0.06094 },
  { letter: 'I', frequency: 0.06966 },
  { letter: 'J', frequency: 0.00153 },
  { letter: 'K', frequency: 0.00772 },
  { letter: 'L', frequency: 0.04025 },
  { letter: 'M', frequency: 0.02406 },
  { letter: 'N', frequency: 0.06749 },
  { letter: 'O', frequency: 0.07507 },
  { letter: 'P', frequency: 0.01929 },
  { letter: 'Q', frequency: 0.00095 },
  { letter: 'R', frequency: 0.05987 },
  { letter: 'S', frequency: 0.06327 },
  { letter: 'T', frequency: 0.09056 },
  { letter: 'U', frequency: 0.02758 },
  { letter: 'V', frequency: 0.00978 },
  { letter: 'W', frequency: 0.0236 },
  { letter: 'X', frequency: 0.0015 },
  { letter: 'Y', frequency: 0.01974 },
  { letter: 'Z', frequency: 0.00074 },
]);

const getLetter = (d) => d.letter;
const getLetterFrequency = (d) => Number(d.frequency) * 100;

const xMax: Ref<number> = ref(400);
const yMax: Ref<number> = ref(400);

const xScale = computed(() => {
  return scaleBand({
  range: [0, xMax.value ? xMax.value : 400],
  round: true,
  domain: data.map(getLetter),
  padding: 0.4,
  })
})

const yScale = computed(() => { 
  return scaleLinear({
  range: [yMax.value, 0],
  round: true,
  domain: [0, Math.max(...data.map(getLetterFrequency))],
  })
})

const barsUpdated = computed(() => {
  let id = 0;
  return data.map((d) => {
   const letter = getLetter(d);
   const barWidth = xScale.value.bandwidth();
   const barHeight = yMax.value - (yScale.value(getLetterFrequency(d)) ?? 0);
   const barX = xScale.value(letter);
   const barY = yMax.value - barHeight;
   return { letter: letter, barWidth: barWidth, barHeight: barHeight, barX: barX, barY: barY, key: id++}
   })
})
</script>

<template>
  <input v-model="xMax" type="text">
  <svg :width="xMax ? xMax : 400" :height="yMax">
      <rect :width="xMax ? xMax : 400" :height="yMax" fill="url(#teal)" rx="14" />
      <Group>
          <Bar v-for="bars in barsUpdated" :key="bars.key"
            :x="bars.barX"
            :y="bars.barY"
            :width="bars.barWidth"
            :height="bars.barHeight"
            fill="rgba(23, 233, 217, .5)"
          />
      </Group>
    </svg>
</template>
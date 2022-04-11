<script setup lang="tsx">
import Bar from '../packages/vuenique-shape/Bar.vue';
import Group from '../packages/vuenique-group/Group.vue';
import { scaleBand, scaleLinear } from '../packages/vuenique-scale/index';
import { ref, computed, Ref, reactive } from 'vue';
import BarGraph from './components/BarGraph.vue';
import LineGraph from './components/LineGraph.vue';
import type { CircleProps } from '../packages/vuenique-shape/Circle.vue';
import Scatter from './components/Scatter.vue';
import LinearVue from '../packages/vuenique-legend/legends/Linear.vue';

const points: Array<Record<string, unknown>> = [];
for (let i = 0; i < 50; i++) {
  points.push({ cx: Math.random() * 1000, cy: Math.random() * 1000, r: 4 });
}

const linearScale = computed(() => {
  return scaleLinear({
    domain: [0, 10],
    range: ["#ed4fbb", "#e9a039"],
  });
});
</script>

<template>
  <main>
    <BarGraph />
    <LineGraph />
    <Scatter :height="400" :width="400" :circles="points" background="green" />
    <LinearVue :scale="linearScale" />
  </main>
</template>

<style>
@import './assets/base.css';

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}

header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }

  #app {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .logo {
    margin: 0 2rem 0 0;
  }
}
</style>

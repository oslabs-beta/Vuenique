<script setup lang="tsx">
import Bar from '../packages/vuez-shape/Bar.vue';
import Group from '../packages/vuez-group/Group.vue';
import { scaleBand, scaleLinear } from '../packages/vuez-scale/index';
import { ref, computed, Ref, reactive } from 'vue';
import BarGraph from './components/BarGraph.vue';
import LineGraph from './components/LineGraph.vue';
import Circle, { type CircleProps } from '../packages/vuez-shape/Circle.vue';
import Scatter from './components/Scatter.vue';

const points: CircleProps[] = [];
for (let i = 0; i < 50; i++) {
  points.push({ x: Math.random() * 1000, y: Math.random() * 1000, r: 10 });
}
</script>

<template>
  <main>
    <!--<BarGraph />
    <LineGraph />-->
    <Scatter :height="400" :width="400" :circles="points" background="green" />
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

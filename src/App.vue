<script setup lang="tsx">
import HelloWorld from "./components/HelloWorld.vue";
import TheWelcome from "./components/TheWelcome.vue";
import Bar from "../packages/vuez-shape/Bar.vue";
import Group from "../packages/vuez-group/Group.vue";
import { scaleBand, scaleLinear } from "../packages/vuez-scale/index";
import { h } from "vue";

const data = [
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
];

const getLetter = (d) => d.letter;
const getLetterFrequency = (d) => Number(d.frequency) * 100;

const xMax = 400;
const yMax = 400;
const xScale = scaleBand({
  range: [0, xMax],
  round: true,
  domain: data.map(getLetter),
  padding: 0.4,
});

const yScale = scaleLinear({
  range: [yMax, 0],
  round: true,
  domain: [0, Math.max(...data.map(getLetterFrequency))],
})
const render = () => {
  return (
    <svg width={400} height={400}>
      <rect width={400} height={400} fill="url(#teal)" rx={14} />
      <Group>
        {data.map((d) => {
          const letter = getLetter(d);
          const barWidth = xScale.bandwidth();
          const barHeight = yMax - (yScale(getLetterFrequency(d)) ?? 0);
          const barX = xScale(letter);
          const barY = yMax - barHeight;
          return (
            <Bar
              key={`bar-${letter}`}
              x={barX}
              y={barY}
              width={barWidth}
              height={barHeight}
              fill="rgba(23, 233, 217, .5)"
            />
          );
        })}
      </Group>
    </svg>
  )
}
</script>

<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="./assets/logo.svg"
      width="125"
      height="125"
    />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main>
    <!-- <Group transform="translate(50, 50)" :top="25" :left="25">
      <Bar
        v-for="num in testArr"
        :key="num"
        className="vuez-rect"
        width="100"
        height="100"
        fill="green"
      />
    </Group> -->
    <render />
  </main>
</template>

<style>
@import "./assets/base.css";

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

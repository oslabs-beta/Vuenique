<!-- HEADER -->
<br/>
<p align="center">
   <img src="./src/assets/placeholderLogo.svg" alt="Logo" height="120">
   <h3 align="center">Vuenique</h3>
   <p align="center">
      A low level visualization component library built for Vue
   </p>

   <!-- BADGES -->
</p>

<hr>

<!-- TABLE OF CONTENTS -->
<details open="open">
   <summary>Table of Contents</summary>
   <ol>
      <li><a href="#introduction">Introduction</a></li>
      <li><a href="#installation">Installation</a></li>
      <li><a href="#getting-started">Getting Started</a></li>
      <li>
         <a href="#documentation">Documentation</a>
         <ul>
            <li><a href="#shape">Shape</a></li>
            <li><a href="#group">Group</a></li>
            <li><a href="#scale">Scale</a></li>
            <li><a href="#legend">Legend</a></li>
         </ul>
      </li>
      <li><a href="#contributing">Contributing</a></li>
      <li><a href="#license">License</a></li>
      <li><a href="#creators">Creators</a></li>
      <li><a href="#acknowledgements">Acknowledgements</a></li>
   </ol>
</details>

<hr>

## Introduction
Vuenique is a reusable component visualization library that brings the power of D3 and visx to Vue

## Installation
Install with npm:

```sh
npm install @vueniquejs/vuenique
```
<!-- ```js
function () { return "This code is highlighted as Javascript!"}
``` -->
## Getting Started

1. Import the components you need from the package.
```js
import { Bar } from @vueniquejs/vuenique
```
2. Pass in the necessary props.
```js
<Bar x="5" y="5"/>
```
3. See your component render!

## Documentation
Vuenique visualization components can be roughly grouped into several categories:

### Shape
These are the building blocks of the framework. Map to shapes you can utilize within your visualizations.
#### `<Bar />`
Description: Staple of the bar chart, the component represents a single rectangular bar in your visualization.
<br/>
Inputs: Optional: class to be passed into components class; any valid attributes (x, y, rx, ry, width, height, etc.) for SVG < rect> elements can be passed through props
<br/>
Outputs: Returns a Vue component wrapped around a < rect> HTML element with any props passed in rendering as attributes on the element

#### `<Circle />`
Description: Staple of the scatter plot and other chart types utilizing circles, the component represents a single circle in your visualization
<br/>
Inputs: Optional: class to be passed into components class; any valid attributes (cx, cy, r, etc.) for SVG < circle> elements can be passed through props
<br/>
Outputs: Returns a Vue component wrapped around a < circle> HTML element with any props passed in rendering as attributes on the element

#### `<LinePath />`
Description: Staple of the line chart, the component represents a single line path in your visualization
<br/>
Inputs: Optional: class to be passed into components class; any valid attributes for SVG < path> elements can be passed through props
<br/>
Outputs: Returns a Vue component wrapped around a < path> HTML element with any props passed in

<hr>

### Group
Built around the < g> SVG element, Group acts as a wrapper around Shape components, allowing you to group pieces of a visualization together.
#### `<Group />`
Inputs: Props get passed to underlying < g> SVG element are rendered as HTML attributes on element. Components passed as children to Group  get rendered within < g> container

<br/>
Outputs: Container of Shape components passed a children in the form of < g> element

<hr>

### Scale
Scales package provides wrappers around D3.js library scale packages, which contains functions that help you to map your data into the graph's pixels.
#### `scaleBand()`
#### `scaleLinear()`
#### `scaleTime()`
#### `scaleUTC()`
#### `scaleOrdinal()`
#### `scaleLog()`
#### `scaleQuantile()`
#### `scaleThreshold()`
<hr>

### Legend
Legends match the colors and shapes in your graph to your data, and are created using scales.
#### `<LegendLinear />`
Renders a legend with values that increment in a linear fashion

<hr>

## Contributing
Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.
If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement". Don't forget to give the project a star! Thanks again!
1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License
Distributed under the MIT License.

## Creators
<ul>
   <li><a href="https://github.com/acorlin6">Alex Corlin</a></li>
   <li><a href="https://github.com/ahaile923">Alex Haile</a></li>
   <li><a href="https://github.com/jamesma1">James Ma</a></li>
   <li><a href="https://github.com/MiaowZ">Miaowen Zeng</a></li>
   <li><a href="https://github.com/tmg2549">Trevor Gray</a></li>
</ul>

## Acknowledgements
https://airbnb.io/visx
import { describe, it, expect, test } from "vitest";
import { mount } from "@vue/test-utils";

import Bar from "../Bar.vue";

const BarWrapper = (restProps = {}, attrs ={}) => mount(Bar, {
    shallow: true,
    propsData: {
      ...restProps,
    },
    attrs: {
      ...attrs,
    }
});
const TestBar = BarWrapper({className: 'test'}, {x:50})
console.log(TestBar.props());

console.log(TestBar.vm.$attrs);

describe('Bar component', () => {
  test('Bar should be defined', () => {
    expect(Bar).toBeDefined();
  });

  test('it should have test class', () => {
    expect(
      BarWrapper({
        className: 'test',
      }).props('className'),
    ).toBe('test');
  });
});

// const Component = {
//   template: '<div>{{ msg }}</div>',
//   props: ['msg']
// }
// const wrapper = mount(Component, {
//   propsData: {
//     msg: 'aBC'
//   }
// })

// visx
// const BarWrapper = (restProps = {}) => shallow(<Bar {...restProps} />);

// describe('<Bar />', () => {
//   test('it should be defined', () => {
//     expect(Bar).toBeDefined();
//   });

//   test('it should have the .visx-bar class', () => {
//     expect(
//       BarWrapper({
//         className: 'test',
//       }).prop('className'),
//     ).toBe('visx-bar test');
//   });

//   test('it should expose its ref via an innerRef prop', () => {
//     const fakeRef = React.createRef<SVGRectElement>();
//     const { container } = render(
//       <svg>
//         <Bar innerRef={fakeRef} />
//       </svg>,
//     );
//     const RectElement = container.querySelector('rect');
//     expect(fakeRef.current).toContainElement(RectElement);
//   });
// });
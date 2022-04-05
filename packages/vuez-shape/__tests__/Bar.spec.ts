// import { render } from '@vue/server-test-utils';
import {ref} from 'vue';
import { describe, it, expect, test } from "vitest";
import { mount } from "@vue/test-utils";

import Bar from "../Bar.vue";

const BarWrapper  = (restProps = {}, attrs = {}) => mount(Bar, {
    shallow: true,
    propsData: {
      ...restProps,
    },
    attrs: {
      ...attrs,
    },
  });
const TestBar = BarWrapper({class: 'test'}, {x:50})
console.log(TestBar.props());

console.log(TestBar.vm.$attrs);

describe('Bar component', () => {
  test('Bar should be defined', () => {
    expect(Bar).toBeDefined();
  });

  test('it should have test class', () => {
    expect(
      BarWrapper({
        class: 'test',
      }).props('class'),
    ).toBe('test');
  });

  test('Bar should expose its ref via innerRef attribute', async () => {
    // console.log(ref);
    const fakeRef = ref<SVGRectElement>();
    //console.log('fakeRef', fakeRef);
    const wrapper = BarWrapper({innerRef: fakeRef, class: "test"});
    console.log('wrapper', wrapper.vm.innerRef)
    // const element = wrapper.find('.test')
    // console.log('element', element);
    // console.log('refs: ', wrapper.vm.$refs);
    // console.log('barComponent props', wrapper.props());
    const refComponent = wrapper.find("rect");
    const refString = "barProps.innerRef";
    const refsObject = wrapper.find({ref: refString});
    // console.log("$refs", wrapper.vm.$refs);
    console.log("refComponent", refComponent.element);
    console.log("refsObject", refsObject);
    // console.log('refComponent', refComponent)
    expect(refsObject.element as SVGRectElement).toBe(refComponent.element as SVGRectElement);
    // expect(refsObject).toContainElement(refComponent.element);
  });
});

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
import {ref} from 'vue';
import { describe, it, expect, test } from 'vitest';
import { mount } from '@vue/test-utils';

import Group from '../Group.vue';

const groupWrapper = (props = {}, attrs = {}) => mount(Group, {
    shallow: true,
    propsData: {
      ...props,
    },
    attrs: {
      ...attrs,
    }
});

describe('<Group /> component', () => {

  test('should be defined', () => {
    expect(Group).toBeDefined();
  });

  test('should have default props top=0 and left=0', () => {
    const groupWrapper1 = groupWrapper();
    console.log("wrapper1 props", groupWrapper1.props());
    console.log("wrapper1 transform", groupWrapper1.vm.transform);
    console.log("test", groupWrapper1.find('g').attributes().transform);
    expect(groupWrapper1.find('g').attributes().transform).toEqual('translate(0, 0)');
  });

  test('should setprops top, left, and class', () => {
    const groupWrapper2 = groupWrapper({ class : 'test', top: 3, left: 4 });
    console.log("wrapper2 props", groupWrapper2.props());
    expect(groupWrapper2.find('g').attributes().transform).toEqual('translate(4, 3)');
    expect(groupWrapper2.props('class')).toEqual('test');
  });

  test('should set restProps', () => {
    const groupWrapper3 = groupWrapper({clipPath: 'url(#vuenique)', stroke: 'orange'});
    console.log("wrapper3 fall throught attributes", groupWrapper3.vm.$attrs);
    console.log("wrapper3 props", groupWrapper3.props());
    expect(groupWrapper3.vm.$attrs.clipPath).toEqual('url(#vuenique)');
    expect(groupWrapper3.vm.$attrs.stroke).toEqual('orange');
  });

});
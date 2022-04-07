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
    expect(groupWrapper1.find('g').attributes().transform).toEqual('translate(0, 0)');
  });

  test('should setprops top, left, and class', () => {
    const groupWrapper2 = groupWrapper({ class : 'test', left: 4q, top: 5 });
    expect(groupWrapper2.find('g').attributes().transform).toEqual('translate(4, 5)');
    expect(groupWrapper2.props('class')).toEqual('test');
  });

  test('should set restProps', () => {
    const groupWrapper3 = groupWrapper({clipPath: 'url(#vuenique)', stroke: 'orange'});
    expect(groupWrapper3.vm.$attrs.clipPath).toEqual('url(#vuenique)');
    expect(groupWrapper3.vm.$attrs.stroke).toEqual('orange');
  });

});
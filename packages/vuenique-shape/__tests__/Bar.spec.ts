import { describe, expect, test } from "vitest";
import { mount } from "@vue/test-utils";

import Bar from "../Bar.vue";

// Creates wrapper component around Bar for testing
const BarWrapper  = (props = {}, attrs = {}) => mount(Bar, {
    shallow: true,
    propsData: {
      ...props,
    },
    attrs: {
      ...attrs,
    },
  });

describe("Bar component...", () => {
  test("should be defined", () => {
    expect(Bar).toBeDefined();
  });

  test("should have test class passed in through props", () => {
    expect(
      BarWrapper({
        class: "test",
      }).props("class")
    ).toBe("test");
  });

  test("should have additional attributes passed in through attrs", () => {
    expect(
      BarWrapper({}, {
          x: 10,
          y: 10,
        }
      ).vm.$attrs
    ).toEqual({ x: 10, y: 10 });
  });
});

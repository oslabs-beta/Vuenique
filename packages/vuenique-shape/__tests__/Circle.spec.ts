import { describe, expect, test } from "vitest";
import { mount } from "@vue/test-utils";

import Circle from "../Circle.vue";

// test the following properties
  // circle defaults to black
  // can define fill color
  // can pass props
  // can pass attributes

const CircleWrapper = (props = {}, attrs = {}) =>
  mount(Circle, {
    shallow: true,
    propsData: {
      ...props,
    },
    attrs: {
      ...attrs,
    },
  });

describe("Circle component...", () => {
  test("should be defined", () => {
    expect(Circle).toBeDefined();
  });

  test("should have test class passed in through props", () => {
    expect(
      CircleWrapper({
        class: "test",
      }).props("class")
    ).toBe("test");
  });

  test("should pass additional props through to element attributes", () => {
    const testCircle = CircleWrapper({ cx: 50, cy: 50, r: 50 });
    expect(testCircle.element.getAttribute("cx")).toBe("50");
    expect(testCircle.element.getAttribute("cy")).toBe("50");
    expect(testCircle.element.getAttribute("r")).toBe("50");
    expect(testCircle.element.getAttribute("class")).toBeNull();
  });

  test("should have fill overwritten when passed through props", () => {
    const testCircle = CircleWrapper({ fill: "white" });
    expect(testCircle.element.getAttribute("fill")).toBe("white");
  })
})

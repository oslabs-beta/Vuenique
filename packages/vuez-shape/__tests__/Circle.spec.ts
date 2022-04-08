import { describe, expect, test } from "vitest";
import { mount } from "@vue/test-utils";

import CircleCopy from "../CircleCopy.vue";

// test the following properties
  // circle defaults to black
  // can define fill color
  // can pass props
  // can pass attributes

const CircleWrapper  = (props = {}, attrs = {}) => mount(CircleCopy, {
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
    expect(CircleCopy).toBeDefined();
  });

  test("should have test class passed in through props", () => {
    expect(
      CircleWrapper({
        class: "test",
      }).props("class")
    ).toBe("test");
  });

  test("should have receive rest of defined props passed in through props", () => {
    const testCircle = CircleWrapper({x:50, y:50, r:50});
    expect(testCircle.props("x")).toBe(50);
    expect(testCircle.props("y")).toBe(50);
    expect(testCircle.props("r")).toBe(50);
    expect(testCircle.props("class")).toBeUndefined();
  });

  test("should have fill overwritten when passed through props", () => {
    const testCircle = CircleWrapper({
      id: "tester",
      fill: "white",
    });
    console.log("tester", testCircle.find("circle").element.style);
    expect(testCircle.props("fill")).toBe("white");
  })
})

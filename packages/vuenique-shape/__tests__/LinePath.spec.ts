import { describe, expect, test, vi } from "vitest";
import { mount } from "@vue/test-utils";
import LinePath from "../LinePath.vue";

interface Datum {
  x: number;
  y: number;
}

const linePathProps = {
  data: [
    { x: 0, y: 0 },
    { x: 1, y: 1 },
  ],
  x: (d: Datum) => d.x,
  y: (d: Datum) => d.y,
};

const LinePathWrapper = (props = {}, attrs = {}) =>
  mount(LinePath, {
    shallow: true,
    propsData: {
      ...props,
    },
    attrs: {
      ...attrs,
    },
  });

describe("<LinePath />", () => {
  test("should be defined", () => {
    expect(LinePath).toBeDefined();
  });

  test('should default to strokeLinecap="round" for superior missing data rendering', () => {
    //seems strokeLinecap is auto converted to lower case
    expect(
      LinePathWrapper(linePathProps).find("path").attributes().strokelinecap
    ).toBe("round");
  });

  test("should contain paths", () => {
    expect(LinePathWrapper(linePathProps).find("path").getComponent);
  });
});

// imports for all scale operators
import domain from "./domain";
import range from "./range";
import align from "./align";
import base from "./base";
import clamp from "./clamp";
// import constant from './constant';
// import exponent from './exponent';
import interpolate from "./interpolate";
import nice from "./nice";
import padding from "./padding";
import reverse from "./reverse";
import round from "./round";
import unknown from "./unknown";
import zero from "./zero";

// hold all operators in order and prevents array from being modified during compilation
export const ALL_OPERATORS = [
  // domain => nice => zero
  "domain",
  "nice",
  "zero",

  // interpolate before round
  "interpolate",
  "round",

  // set range then reverse
  "range",
  "reverse",

  // Order does not matter for these operators
  "align",
  "base",
  "clamp",
  // 'constant',
  // 'exponent',
  "padding",
  "unknown",
] as const;

type OperatorType = typeof ALL_OPERATORS[number];

// Use Record to enforce that all keys in OperatorType must exist.
const operators: Record<OperatorType, typeof domain> = {
  domain,
  nice,
  zero,
  interpolate,
  round,
  align,
  base,
  clamp,
  // constant,
  // exponent,
  padding,
  range,
  reverse,
  unknown,
};

export default function scaleOperator(...ops: OperatorType[]) {
  const selection = new Set(ops);
  const selectedOps = ALL_OPERATORS.filter((o) => selection.has(o));

  return function applyOperators(scale: any, config?: any) {
    if (typeof config !== "undefined") {
      selectedOps.forEach((op) => {
        operators[op](scale, config);
      });
    }

    return scale;
  };
}

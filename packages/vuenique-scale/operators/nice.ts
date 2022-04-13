import {
  timeSecond,
  timeMinute,
  timeHour,
  timeDay,
  timeYear,
  timeMonth,
  timeWeek,
  utcSecond,
  utcMinute,
  utcHour,
  utcDay,
  utcWeek,
  utcMonth,
  utcYear,
  // CountableTimeInterval,
} from "d3-time";

import isUtcScale from "../utils/isUtcScale";

const localTimeIntervals = {
  day: timeDay,
  hour: timeHour,
  minute: timeMinute,
  month: timeMonth,
  second: timeSecond,
  week: timeWeek,
  year: timeYear,
};

const utcIntervals = {
  day: utcDay,
  hour: utcHour,
  minute: utcMinute,
  month: utcMonth,
  second: utcSecond,
  week: utcWeek,
  year: utcYear,
};

/** Operator function to apply the D3 nice method on different arguments dependent on the argument data type
    
    Refer to D3-Scale for more info on D3 interpolate method: {@link https://github.com/d3/d3-scale/}
**/

export default function applyNice(scale: any, config: any) {
  if (
    "nice" in config &&
    typeof config.nice !== "undefined" &&
    "nice" in scale
  ) {
    const { nice } = config;
    if (typeof nice === "boolean") {
      if (nice) {
        scale.nice();
      }
    } else if (typeof nice === "number") {
      scale.nice(nice);
    } else {
      const timeScale = scale;
      const isUtc = isUtcScale(timeScale);
      if (typeof nice === "string") {
        timeScale.nice(isUtc ? utcIntervals[nice] : localTimeIntervals[nice]);
      } else {
        const { interval, step } = nice;
        const parsedInterval = (
          isUtc ? utcIntervals[interval] : localTimeIntervals[interval]
        ).every(step);
        if (parsedInterval != null) {
          timeScale.nice(parsedInterval);
        }
      }
    }
  }
}

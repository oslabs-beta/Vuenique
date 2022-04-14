import type { AccessorForArrayItem } from "./accessor";
import type { CurveFactory, CurveFactoryLineOnly } from "d3-shape";

export type LinePathConfig<Datum> = {
  /** Function that returns a boolean when line path points are passed as arguments. Line path is representative of points that return true  */
  defined?: AccessorForArrayItem<Datum, boolean>;
  /** Sets the curve factory from d3-line curve for the line generator. Defaults to curveLinear. */
  curve?: CurveFactory | CurveFactoryLineOnly;
  /** Sets the x0 accessor function, and sets x1 to null. */
  x?: number | AccessorForArrayItem<Datum, number>;
  /** Sets the y0 accessor function, and sets y1 to null. */
  y?: number | AccessorForArrayItem<Datum, number>;
};

export type ValueOrIdentity<T> = T | { value?: T };

/** returns the value of the argument's value property, if defined, or the argument itself. */
export function valueOrIdentity<T>(_: ValueOrIdentity<T>): T {
  if (
    _ &&
    typeof _ === "object" &&
    "value" in _ &&
    typeof _.value !== "undefined"
  )
    return _.value;
  return _ as T;
}

/** returns the value of the argument's value property, if defined, or the argument itself coerced to a string. */
export function valueOrIdentityString<T>(_: ValueOrIdentity<T>): string {
  return String(valueOrIdentity(_));
}

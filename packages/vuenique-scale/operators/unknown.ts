// set of the scale unknown property if there is a defined unknow property
// passed within the config object
export default function applyUnknown(scale: any, config: any) {
  if (
    "unknown" in scale &&
    "unknown" in config &&
    typeof config.unknown !== "undefined"
  ) {
    (scale.unknown as Function)(config.unknown);
  }
}

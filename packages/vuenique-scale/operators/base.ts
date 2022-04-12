
export default function applyBase(scale: any, config: any) {
  if ('base' in scale && 'base' in config && typeof config.base !== 'undefined') {
    scale.base(config.base);
  }
}
import { scaleQuantile } from '..';

describe('scaleQuantile', () => {

  test('should be defined', () => {
    expect(scaleQuantile).toBeDefined();
  });

  test('set domain', () => {
    const domain = [0, 350];
    const scale = scaleQuantile({ domain });
    expect(scale.domain()).toEqual(domain);
  });
  
  test('set range', () => {
    const range = [2, 3];
    const scale = scaleQuantile({ range });
    expect(scale.range()).toEqual(range);
  });
});

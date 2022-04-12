import { scaleThreshold } from '..';

describe('scaleThreshold', () => {

  test('should be defined', () => {
    expect(scaleThreshold).toBeDefined();
  });

  test('set domain', () => {
    const domain = [0, 350];
    const scale = scaleThreshold({ domain });
    expect(scale.domain()).toEqual(domain);
  });

  test('set range', () => {
    const range = [2, 3];
    const scale = scaleThreshold({ range });
    expect(scale.range()).toEqual(range);
  });
});

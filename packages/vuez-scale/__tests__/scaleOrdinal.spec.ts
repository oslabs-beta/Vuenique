import { scaleOrdinal } from '../';

describe('scaleOrdinal', () => {

  test('should be defined', () => {
    expect(scaleOrdinal).toBeDefined();
  });

  test('set domain', () => {
    const domain = ['noodle', 'burger'];
    const scale = scaleOrdinal({ domain });
    expect(scale.domain()).toEqual(domain);
  });

  test('set range', () => {
    const range = ['red', 'green'];
    const scale = scaleOrdinal({ range });
    expect(scale.range()).toEqual(range);
  });

  test('set unknown', () => {
    const scale = scaleOrdinal({ domain: ['noodle', 'burger'], unknown: 'green' });
    expect(scale('hello')).toEqual('green');
  });
});

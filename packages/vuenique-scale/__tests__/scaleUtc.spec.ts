import TimezoneMock from 'timezone-mock';
import { scaleUtc } from '..';

describe('scaleUtc()', () => {
  let domain: [Date, Date];
  let unniceDomain: [Date, Date];

  beforeAll(() => {
    TimezoneMock.register('US/Pacific');
    domain = [new Date(Date.UTC(2020, 0, 1)), new Date(Date.UTC(2020, 0, 10))];
    unniceDomain = [new Date(Date.UTC(2020, 0, 1)), new Date(Date.UTC(2020, 0, 9, 20))];
  });

  afterAll(() => {
    TimezoneMock.unregister();
  });

  test('should be defined', () => {
    expect(scaleUtc).toBeDefined();
  });

  test('set domain', () => {
    expect(scaleUtc({ domain }).domain()).toEqual(domain);
  });

  test('set range', () => {
    const range = [1, 2];
    expect(scaleUtc({ range: [1, 2] }).range()).toEqual(range);
  });

  describe('set clamp', () => {

    test('true', () => {
      const scale = scaleUtc({ domain, range: [0, 10], clamp: true });
      expect(scale(new Date(Date.UTC(2019, 11, 31)))).toEqual(0);
    });

    test('false', () => {
      const scale = scaleUtc({ domain, range: [0, 10], clamp: false });
      expect(scale(new Date(Date.UTC(2019, 11, 31)))?.toFixed(2)).toEqual('-1.11');
    });
  });
  
  test('set (color) interpolate', () => {
    const scale = scaleUtc({
      domain,
      range: ['#ff0000', '#000000'],
      interpolate: 'lab',
    });
    expect(scale(new Date(Date.UTC(2020, 0, 5)))).toEqual('rgb(136, 28, 11)');
  });

  describe('set nice', () => {

    test('true', () => {
      const scale = scaleUtc({
        domain: unniceDomain,
        nice: true,
      });
      expect(scale.domain()).toEqual(domain);
    });

    test('false', () => {
      const scale = scaleUtc({ domain: unniceDomain, nice: false });
      expect(scale.domain()).toEqual(unniceDomain);
    });

    test('number', () => {
      const scale = scaleUtc({ domain: unniceDomain, nice: 5 });
      expect(scale.domain()).toEqual([
        new Date(Date.UTC(2020, 0, 1)),
        new Date(Date.UTC(2020, 0, 11)),
      ]);
    });

    test('time unit string', () => {
      const scale = scaleUtc({ domain: unniceDomain, nice: 'hour' });
      expect(scale.domain()).toEqual(unniceDomain);
    });

    test('nice object', () => {
      const scale = scaleUtc({ domain: unniceDomain, nice: { interval: 'hour', step: 3 } });
      expect(scale.domain()).toEqual([
        new Date(Date.UTC(2020, 0, 1)),
        new Date(Date.UTC(2020, 0, 9, 21)),
      ]);
    });
  });

  describe('set round', () => {

    test('true', () => {
      const scale = scaleUtc({
        domain,
        range: [1, 5],
        round: true,
      });
      expect(scale(new Date(Date.UTC(2020, 0, 5)))).toEqual(3);
    });

    test('false', () => {
      const scale = scaleUtc({
        domain,
        range: [1, 5],
        round: false,
      });
      expect(scale(new Date(Date.UTC(2020, 0, 5)))?.toFixed(2)).toEqual('2.78');
    });
  });
});

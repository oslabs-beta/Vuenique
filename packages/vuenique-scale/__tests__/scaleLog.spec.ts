import { scaleLog } from '..';

describe('scaleLog()', () => {

    test('should be defined', () => {
      expect(scaleLog).toBeDefined();
    });

    test('set domain', () => {
      const domain = [2, 3];
      expect(scaleLog({ domain: [2, 3] }).domain()).toEqual(domain);
    });

    test('set range', () => {
      const range = [3, 4];
      expect(scaleLog({ range: [3, 4] }).range()).toEqual(range);
    });

    test('set base', () => {
      expect(scaleLog({ base: 5 }).base()).toEqual(5);
    });

    describe('set clamp', () => {

      test('true', () => {
        const scale = scaleLog({ range: [1, 4], clamp: true });
        expect(scale(100)).toEqual(4);
      });

      test('false', () => {
        const scale = scaleLog({ range: [1, 2], clamp: false });
        expect(scale(10000)).toEqual(5);
      });
    });

    test('set (color) interpolate', () => {
      const scale = scaleLog({
        domain: [1, 100],
        range: ['#ff0000', '#000000'],
        interpolate: 'lab',
      });
      expect(scale(10)).toEqual('rgb(122, 27, 11)');
    });

    describe('set nice', () => {

      test('true', () => {
        const scale = scaleLog({ domain: [0.1, 0.89], nice: true });
        expect(scale.domain()).toEqual([0.1, 1]);
      });

      test('false', () => {
        const scale = scaleLog({ domain: [0.1, 0.78], nice: false });
        expect(scale.domain()).toEqual([0.1, 0.78]);
      });
    });

    describe('set round', () => {

      test('true', () => {
        const scale = scaleLog({ domain: [1, 10], range: [1, 10], round: true });
        expect(scale(2.2)).toEqual(4);
      });

      test('false', () => {
        const scale = scaleLog({ domain: [1, 10], range: [1, 10], round: false });
        expect(scale(5)?.toFixed(2)).toEqual('7.29');
      });
    });
  });
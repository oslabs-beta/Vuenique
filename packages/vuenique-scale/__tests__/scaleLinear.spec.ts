import { scaleLinear } from '..';

describe('scaleLinear()', () => {
  
  test('should be defined', () =>{
    expect(scaleLinear).toBeDefined();
  });
  
  test('set domain', () => {
      const domain = [1, 2];
      expect(scaleLinear({ domain }).domain()).toEqual([1, 2]);
  });

  test('set range', () => {
    const range = [1, 2];
    expect(scaleLinear({ range }).range()).toEqual([1, 2]);
  });

  test('set reverse', () => {
    expect(scaleLinear({ reverse: true }).range()).toEqual([1, 0]);
    expect(scaleLinear({ range: [2, 5], reverse: true }).range()).toEqual([5, 2]);
  });

  describe('set clamp', () => {
    test('true', () => {
      const scale = scaleLinear({ clamp: true});
      expect(scale(20)).toEqual(1);
    });

    test('false', () => {
      const scale = scaleLinear({ clamp: false});
      expect(scale(20)).toEqual(20);
    });
  });

  describe('set color interpolate', () => {

    test('string', () => {
      const scale = scaleLinear({ 
      domain: [0, 10],
      range: ['#ff0000', '#000000'],
      interpolate: 'lab',
      });
      expect(scale(5)).toEqual('rgb(122, 27, 11)');
    });

    test('config object', () => {
      const scale = scaleLinear({
        domain: [0, 10],
        range: ['#ff0000', '#000000'], 
        interpolate: {
          type: 'rgb',
        },
      });
      expect(scale(5)).toEqual('rgb(128, 0, 0)');
    });

    test('config object with gamma', () => {
      const scale = scaleLinear({ 
        domain: [0, 10],
        range:['#ff0000', '#000000'], 
        interpolate:{
          type: 'rgb',
          gamma: 0.9,
        },
      });
      expect(scale(5)).toEqual('rgb(118, 0, 0)');
    });
  });

  describe('set nice', () => {

    test('true', () => {
      const scale = scaleLinear({domain: [0.1, 0.91], nice: true});
      expect(scale.domain()).toEqual([0.1, 1]);
    });

    test('false', () => {
      const scale = scaleLinear({ domain: [0.1, 0.91], nice: false});
    });
  });

  describe('set round', () => {
    
    test('true', () => {
      const scale = scaleLinear({ domain: [0, 10], range: [0, 10], round: true });
      expect(scale(2.2)).toEqual(2);
      expect(scale(2.6)).toEqual(3);
    });

    test('false', () => {
      const scale = scaleLinear({ domain: [0, 10], range: [0, 10], round: false });
      expect(scale(2.2)).toEqual(2.2);
      expect(scale(2.6)).toEqual(2.6);
    });

    test('warns if do both interpolate and round', () => {
      //can be accomplished either using global to access warn or spyOn
      global.console = {warn: vi.fn()};
      scaleLinear({
        domain: [0, 10],
        range: [0, 10],
        interpolate: 'hsl',
        round: true,
      });
      //vi.spyOn(global.console, 'warn');
      expect(console.warn).toHaveBeenCalledTimes(1);
    });  
  });

  describe('set zero', () => {
    test('true', () => {
      expect(scaleLinear({ domain: [1, 2], zero: true }).domain()).toEqual([0, 2]);
      expect(scaleLinear({ domain: [1, -2], zero: true }).domain()).toEqual([1, -2]);
      expect(scaleLinear({ domain: [-2, -1], zero: true }).domain()).toEqual([-2, 0]);
      expect(scaleLinear({ domain: [-2, 3], zero: true }).domain()).toEqual([-2, 3]);
    });
    test('false', () => {
      expect(scaleLinear({ domain: [1, 2], zero: false }).domain()).toEqual([1, 2]);
      expect(scaleLinear({ domain: [-2, -1], zero: false }).domain()).toEqual([-2, -1]);
      expect(scaleLinear({ domain: [-2, 3], zero: false }).domain()).toEqual([-2, 3]);
    });

  });
});
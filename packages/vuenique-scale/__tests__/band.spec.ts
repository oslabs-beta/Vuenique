import band from '../scales/band.ts';

describe('scaleBand as band', () => {
    
  test('should be defined', () => {
    expect(band).toBeDefined();
  });

  test('set domain', () => {
    const domain = [0, 350];
    const scale = band({ domain });
    expect(scale.domain()).toEqual(domain);
  });

  test('set range', () => {
    const range = [2, 3]
    const scale = band({ range });
    expect(scale.range()).toEqual(range);
  });
  
  test('set align', () => {
    expect(band({ align: 0.7}).align()).toEqual(0.7);
  });
  
  test('set padding', () => {
    expect(band({ padding: 0.2 }).padding()).toEqual(0.2);
  });
  
  test('set paddingInner', () => {
    expect(band({ paddingInner: 0.5 }).paddingInner()).toEqual(0.5);
  });

  test('set paddingOuter', () => {
    expect(band({paddingOuter: 0.9}).paddingOuter()).toEqual(0.9);
  });

  describe('set round', () => {
    test('true', () => {
      const scale = band({ domain: ['a', 'b', 'c', 'd'], range: [1.1, 3.5], round: true });
      expect(scale('a')).toEqual(2);
      expect(scale('b')).toEqual(2);
      expect(scale('c')).toEqual(2);
      expect(scale('c')).toEqual(2);
    });
    test('false', () => {
      const scale = band({ domain: ['a', 'b', 'c', 'd'], range: [1.1, 3.1], round: false });
      expect(scale('a')).toEqual(1.1);
      expect(scale('b')).toEqual(1.6);
      expect(scale('c')).toEqual(2.1);
      expect(scale('d')).toEqual(2.6);
    })

  })
})
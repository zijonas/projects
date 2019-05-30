import { Math } from './math';

describe('Math', () => {

  let math: Math;

  beforeEach(() => {
    math = new Math();
  });

  it('should add the 2 numbers', () => {
    expect(math.add(3, 4)).toBe(7);
  });


  afterEach(() => {
    console.log('run after');
  });
});

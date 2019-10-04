import './custom-matcher';

test('10 is divisible by 2', () => expect(10).toBeDivisibleBy(2));
test('REVERSE TEST FAILS -  10 is not divisible by 2', () => expect(10).not.toBeDivisibleBy(2));


test('10 is not divisible by 3', () => expect(10).not.toBeDivisibleBy(3));
test('REVERSE TEST FAILs - 10 is divisible by 3', () => expect(10).toBeDivisibleBy(3));

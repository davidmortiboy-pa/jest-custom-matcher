import './custom-matcher';

describe('Tests', () => {
  test('Custom matcher pass', () => expect(1).toCustomEqual(2));
  test('Custom matcher not to pass', () => expect(2).not.toCustomEqual(2));

  test('Custom matcher fail', () => expect(2).toCustomEqual(2));
  test('Custom matcher not to fail', () => expect(1).not.toCustomEqual(2));
});

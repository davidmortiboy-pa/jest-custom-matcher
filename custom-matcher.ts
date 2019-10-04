export {}

declare global {
  namespace jest {
    interface Matchers<R> {
      // add any of your custom matchers here
      toCustomEqual: (argument: number) => {};
    }
  }
}

// this will extend the expect with a custom matcher
expect.extend({
  toCustomEqual(received: number, argument: number) {

    received += 1;

    try {
      expect(received).toEqual(argument);
      return {
        message: () => `expected ${received} not to eq ${argument}`,
        pass: true
      }
    } catch(ex) {
      return {
        message: ex.matcherResult.message,
        pass: false
      }
    }
  }
});

export {}

declare global {
  namespace jest {
    interface Matchers<R> {
      // add any of your custom matchers here
      toBeDivisibleBy: (argument: number) => {};
    }
  }
}

// this will extend the expect with a custom matcher
expect.extend({
  toBeDivisibleBy(received: number, argument: number) {
    const pass = received % argument === 0;
    if (pass) {
      return {
        message: () => `expected ${received} not to be divisible by ${argument}`,
        pass: true
      };
    } else {
      return {
        message: () => `expected ${received} to be divisible by ${argument}`,
        pass: false
      };
    }
  }
});

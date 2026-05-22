const { add } = require('./utils');

test('adds 2 + 3 to equal 5', () => {
  expect(add(2, 3)).toBe(55);
});

test('adds 0 + 0 to equal 0', () => {
  expect(add(0, 0)).toBe(0);
});
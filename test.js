const squareTwoNumbers = require("./squareTwoNumbers");

test("square of a negative number is positive", () => {
  expect(squareTwoNumbers(-5)).toBeGreaterThan(0);
});

test("square of a positive number is positive", () => {
  expect(squareTwoNumbers(5)).toBeGreaterThan(0);
});

test("square of zero is zero", () => {
  expect(squareTwoNumbers(0)).toBe(0);
});

test("square of 1 is 1", () => {
  expect(squareTwoNumbers(1)).toBe(1);
});

test("square of a large number", () => {
  expect(squareTwoNumbers(1000)).toBe(1000000);
});

test("square of a decimal number", () => {
  expect(squareTwoNumbers(2.5)).toBeCloseTo(6.25);
});

test("square of a negative decimal number", () => {
  expect(squareTwoNumbers(-2.5)).toBeCloseTo(6.25);
});

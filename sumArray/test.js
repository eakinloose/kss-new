const sumArray = require("./sumarray");

test("Sum of [1, 2, 3, 4, 5] should be 15", () => {
  expect(sumArray([1, 2, 3, 4, 5])).toBe(15);
});

test("Sum of [-1, -2, -3, -4] should be -10", () => {
  expect(sumArray([-1, -2, -3, -4])).toBe(-10);
});

test("Sum of [] should be 0", () => {
  expect(sumArray([])).toBe(0);
});

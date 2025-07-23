const { findMaxNumberInArray } = require("./findMaxNumberInArray");

test("check maximum numebr from array", () => {
  expect(
    findMaxNumberInArray([3, 4, 5, 8, 7, 6, 9, 23, 23.5, 23.51, 4, 6, 7, 8, 9])
  ).toBe(23.51);
});

test("check highest number in an array of alphabeth", () => {
  expect(findMaxNumberInArray(["d", "e"])).toEqual(NaN);
  expect(findMaxNumberInArray(["d", "e"])).toBeNaN();
  expect(findMaxNumberInArray(["d", "e"])).toBe(NaN);
});

test("check maximum numebr from array of negative numbers", () => {
  expect(
    findMaxNumberInArray([
      -3, -4, -5, -8, -7, -6, -9, -23, -23.5, -23.51, -4, -6, -7, -8, -9,
    ])
  ).not.toBe(23.51);
  expect(
    findMaxNumberInArray([
      -3, -4, -5, -8, -7, -6, -9, -23, -23.5, -23.51, -4, -6, -7, -8, -9,
    ])
  ).toBe(-3);
});

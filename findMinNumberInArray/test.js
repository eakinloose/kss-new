const findMinNumberInArray = require("./findMinNumberInArray");

test("check minimum numebr from array of negative numbers", () => {
  expect(
    findMinNumberInArray([
      -3, -4, -5, -8, -7, -6, -9, -23, -23.5, -23.51, -4, -6, -7, -8, -9,
    ])
  ).toBe(-23.51);
  expect(
    findMinNumberInArray([
      -3, -4, -5, -8, -7, -6, -9, -23, -23.5, -4, -6, -7, -8, -9,
    ])
  ).toBe(-23.5);
});

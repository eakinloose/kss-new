function sumArray(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}

function sumTwoNumbers(a, b) {
  return a + b;
}

function findMinNumberInArray(arr) {
  return Math.min(...arr);
}

function findMaxNumberInArray(arr) {
  return Math.max(...arr);
}

function reverseString(stng) {
  let reversedString = stng.split("").reverse().join("");
  return reversedString;
}

function reverseString(stng) {
  let reversedString = "";

  for (let char of stng) {
    reversedString = char + reversedString;
  }

  return reversedString;
}

function reverseInt(n) {
  let revesersedInt = n.toString().split("").reverse().join("");
  let revString = parseInt(revesersedInt) * Math.sign(n);
  return revString;
}

function isPalindrom(stng) {
  let reversedString = stng.split("").reverse().join("");
  return reversedString === stng;
}

function sortNumbersInArrayInAsc(arr) {
  return arr.sort((a, b) => a - b);
}

function sortNumbersInArrayInDesc(arr) {
  return arr.sort((a, b) => b - a);
}

function cubeOfANumber(a) {
  return a ** 3;
}

function checkPrimeNumber(a) {
  if (a / 1 === a && a / a === 1) {
    return true;
  }
}

test("check reverse string of negative number", () => {
  expect(reverseInt(-10)).toBe(-1);
});

test("sum two numbers", () => {
  expect(sumTwoNumbers(3, 5)).toBe(8);
});

test("sum two negative numbers", () => {
  expect(sumTwoNumbers(-3, -5)).toBe(-8);
});

test("check positive cube of a number", () => {
  expect(cubeOfANumber(2)).toBe(8);
});

test("check negative cube of a number", () => {
  expect(cubeOfANumber(-6)).toBe(-216);
});

test("check the cube of an alphabeth", () => {
  expect(cubeOfANumber("a")).toBeNaN();
});

test("check numbers sorted in asceding order", () => {
  const sortedArray = sortNumbersInArrayInDesc([1, 3, 4, 7, 5, 4, 3, 2]);
  const lowestNumber = Math.min(...sortedArray);
  const sortedArrayLastNumber = sortedArray.pop();
  expect(sortedArrayLastNumber).toBe(1);
  expect(sortedArrayLastNumber).toBe(lowestNumber);
});

test("check numbers surted in asceding order", () => {
  const sortedArray = sortNumbersInArrayInAsc([1, 3, 4, 7, 5, 4, 3, 1]);
  const highestNumberInArray = Math.max(...sortedArray);
  const sortedArrayLastNumber = sortedArray.pop();
  expect(sortedArrayLastNumber).toBe(7);
  expect(sortedArrayLastNumber).toBe(highestNumberInArray);
});

test("check Palindrom", () => {
  expect(isPalindrom("noon")).toBe(true);
});

test("check Palindrom", () => {
  expect(isPalindrom("noons")).toBe(false);
});

test("check Palindrom yay", () => {
  expect(isPalindrom("yay")).toBe(true);
});

test("check reversed string value", () => {
  expect(reverseString("dolapo")).toBe("opalod");
});

test("Sum of [1, 2, 3, 4, 5] should be 15", () => {
  expect(sumArray([1, 2, 3, 4, 5])).toBe(15);
});

test("Sum of [-1, -2, -3, -4] should be -10", () => {
  expect(sumArray([-1, -2, -3, -4])).toBe(-10);
});

test("Sum of [] should be 0", () => {
  expect(sumArray([])).toBe(0);
});

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

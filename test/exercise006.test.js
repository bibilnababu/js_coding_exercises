import {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
  createMatrix,
  areWeCovered,
} from "../challenges/exercise006";

describe("sumMultiples", () => {
  test("returns the sum of any numbers that are multiples of 3 and 5", () => {
    expect(sumMultiples([1, 3, 5])).toBe(8);
    expect(sumMultiples([6, 9, 10])).toBe(25);
  });
});

describe("isValidDNA", () => {
  test(" return true if it is a valid DNA string. A valid DNA string may contain characters C, G, T or A only", () => {
    expect(isValidDNA("ACGTAGCTAG")).toBe(true);
  });
  test("returns false if it is a non valid DNA", () => {
    expect(isValidDNA("ACGTAGCTZG")).toBe(false);
  });
});

describe("getComplementaryDNA", () => {
  test("returns complementary DNA ie:T always pairs with A, and C always pairs with G.", () => {
    expect(getComplementaryDNA("ACTG")).toBe("TGAC");
    expect(getComplementaryDNA("CAGT")).toBe("GTCA");
    expect(getComplementaryDNA("GGGG")).toBe("CCCC");
  });
});

describe("isItPrime", () => {
  test("returns true if the number is prime ", () => {
    expect(isItPrime(7)).toBe(true);
  });
  test("returns false if the number is not prime ", () => {
    expect(isItPrime(4)).toBe(false);
  });
  test("returns false if the number is not prime ", () => {
    expect(isItPrime(1)).toBe(false);
  });
  test("returns false if the number is not prime ", () => {
    expect(isItPrime(-7)).toBe(false);
  });
});

describe("createMatrix", () => {
  test("return a matrix of size 3 filled with fill ", () => {
    const n = 3;
    const fill = "foo";
    const expectedMatrix = [
      ["foo", "foo", "foo"],
      ["foo", "foo", "foo"],
      ["foo", "foo", "foo"],
    ];
    expect(createMatrix(n, fill)).toEqual(expectedMatrix);
  });
});

describe("createMatrix", () => {
  test("return a matrix of size 2 filled with fill ", () => {
    const n = 2;
    const fill = "boo";
    const expectedMatrix = [
      ["boo", "boo"],
      ["boo", "boo"],
    ];
    expect(createMatrix(n, fill)).toEqual(expectedMatrix);
  });
});

describe("areWeCovered", () => {
  test(" return true if there are enough staff for Monday", () => {
    const staff = [
      { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
      { name: "Pedro", rota: ["Saturday", "Sunday", "Monday","Tuesday", "Wednesday"] },
      { name: "Sam", rota: ["Monday"] },
    ];
    const day = "Monday";
    expect(areWeCovered(staff, day)).toBe(true);
  });
  test(" return false if there are not  enough staff for Sunday", () => {
    const staff = [
      { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
      { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
      { name: "Sam", rota: ["Monday"] },
    ];
    const day = "Sunday";
    expect(areWeCovered(staff, day)).toBe(false);
  });
});

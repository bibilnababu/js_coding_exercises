import {
  sumDigits,
  createRange,
  getScreentimeAlertList,
  hexToRGB,
  findWinner,
} from "../challenges/exercise007";

describe("sumDigits", () => {
  test("returns the sum of digits", () => {
    expect(sumDigits(123)).toBe(6);
    expect(sumDigits(66)).toBe(12);
  });
});

describe("createRange", () => {
  test("returns  a range of numbers with a given step", () => {
      const start = 3;
      const end = 11;
      const step = 2;
      const expected=[3, 5, 7, 9, 11];
     expect(createRange(start, end, step)).toEqual(expected);

    //expect(createRange(3, 11, 2)).toBe([3, 5, 7, 9, 11]);
  });

  test("returns a range of numbers when step is not provided", () => {
    const start = 2;
    const end = 5;
    expect(createRange(start, end)).toEqual([2, 3, 4, 5]);
  });
});

describe("getScreentimeAlertList", () => {
  test("returns an array of usernames for users who have used more than 100 minutes of screentime on a given date", () => {
    const users = [
      {
        username: "beth_1234",
        name: "Beth Smith",
        screenTime: [
          {
            date: "2019-05-01",
            usage: { twitter: 34, instagram: 22, facebook: 40 },
          },
          {
            date: "2019-05-02",
            usage: { twitter: 56, instagram: 40, facebook: 31 },
          },
          {
            date: "2019-05-03",
            usage: { twitter: 12, instagram: 15, facebook: 19 },
          },
          {
            date: "2019-05-04",
            usage: { twitter: 10, instagram: 56, facebook: 61 },
          },
        ],
      },
      {
        username: "sam_j_1989",
        name: "Sam Jones",
        screenTime: [
          {
            date: "2019-06-11",
            usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10 },
          },
          {
            date: "2019-06-13",
            usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16 },
          },
          {
            date: "2019-06-14",
            usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31 },
          },
        ],
      },
    ];

    const date = "2019-05-04";

    expect(getScreentimeAlertList(users, date)).toEqual(["beth_1234"]);
  });
  test("returns an empty array if no users have used more than 100 minutes of screentime on a given date", () => {
    const users = [
      {
        username: "beth_1234",
        name: "Beth Smith",
        screenTime: [
          {
            date: "2019-05-01",
            usage: { twitter: 34, instagram: 22, facebook: 40 },
          },
          {
            date: "2019-05-02",
            usage: { twitter: 56, instagram: 40, facebook: 31 },
          },
          {
            date: "2019-05-03",
            usage: { twitter: 12, instagram: 15, facebook: 19 },
          },
          {
            date: "2019-05-04",
            usage: { twitter: 10, instagram: 56, facebook: 61 },
          },
        ],
      },
      {
        username: "sam_j_1989",
        name: "Sam Jones",
        screenTime: [
          {
            date: "2019-06-11",
            usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10 },
          },
          {
            date: "2019-06-13",
            usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16 },
          },
          {
            date: "2019-06-14",
            usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31 },
          },
        ],
      },
    ];

    const date = "2019-05-05";

    expect(getScreentimeAlertList(users, date)).toEqual([]);
  });
});

describe("hexToRGB", () => {
  test("return a hexadecimal color code to RGB format", () => {
    const hexStr = "#FF1133";
    expect(hexToRGB(hexStr)).toBe("rgb(255,17,51)");
  });

  test("return a lowercase hexadecimal color code to RGB format", () => {
    const hexStr = "#ff1133";
    expect(hexToRGB(hexStr)).toBe("rgb(255,17,51)");
  });

  test("returns an error message for invalid hex code", () => {
    const hexStr = "#G1133";
    expect(hexToRGB(hexStr)).toBe("Invalid Hexadecimal code");
  });
});

describe("findWinner", () => {
  test("returns 'X' when player X has a winning row", () => {
    const board = [
      ["X", "X", "X"],
      ["0", null, "0"],
      [null, null, null],
    ];
    expect(findWinner(board)).toBe("X");
  });

  test("returns '0' when player 0 has a winning row", () => {
    const board = [
      [null, "X", "X"],
      ["0", "0", "0"],
      [null, null, null],
    ];
    expect(findWinner(board)).toBe("0");
  });
  test("returns null when there is no winner", () => {
    const board = [
      ["X", "0", null],
      [null, null, "0"],
      [null, null, "X"],
    ];
    expect(findWinner(board)).toBe(null);
  });
});

// import the function used in the test suite
import { makeMove } from "../move-maker.js";

// create a test suite that tests all edge cases
describe("makeMove", () => {
  const cases = [
    { input: "1,2", expected: true },
    { input: "-2,2", expected: false },
    { input: "0,3", expected: false },
    { input: "2,4", expected: false },
    { input: "h,2", expected: false },
    { input: "1,22", expected: false },
    { input: "1.2", expected: false },
    { input: NaN, expected: false },
    { input: null, expected: false },
    { input: undefined, expected: false },
    { input: "3,3", expected: false },
    { input: "1,2 ", expected: false },
    { input: [1, ",", 3], expected: true },
  ];

  cases.forEach(({ input, expected }) =>
    it(`returns true for valid input and false for invalid input (input : ${input})`, () => {
      const board = [
        ["X", "_", "_"],
        ["_", "X", "_"],
        ["O", "O", "X"],
      ];
      const player = "O";

      expect(makeMove(board, input, player)).toEqual(expected);
    })
  );
});

import { checkRow, checkColumn, checkDiagonal } from "../status-checker.js";

describe("Tic Tac Toe status check functions", () => {
  const board = [
    ["X", "O", "O"],
    ["X", "X", "X"],
    ["O", "O", "X"],
  ];
  describe("checkRow", () => {
    test("returns true when player fills entire row", () => {
      expect(checkRow(board, "X", 1)).toBe(true);
    });

    test("returns false when player does not fill row", () => {
      expect(checkRow(board, "O", 0)).toBe(false);
    });
  });

  const columnBoard = [
    ["O", "X", "O"],
    ["O", "X", "_"],
    ["O", "X", "X"],
  ];
  describe("checkColumn", () => {
    test("returns true when player fills entire column", () => {
      expect(checkColumn(columnBoard, "X", 1)).toBe(true);
    });

    test("returns false when player does not fill column", () => {
      expect(checkColumn(columnBoard, "O", 2)).toBe(false);
    });
  });

  const diagBoard = [
    ["X", "_", "_"],
    ["_", "X", "_"],
    ["_", "_", "X"],
  ];
  const diagBoard2 = [
    ["_", "_", "O"],
    ["_", "O", "_"],
    ["O", "_", "_"],
  ];
  describe("checkDiagonal", () => {
    test("returns true when player fills main diagonal", () => {
      expect(checkDiagonal(diagBoard, "X")).toBe(true);
    });

    test("returns true when player fills anti-diagonal", () => {
      expect(checkDiagonal(diagBoard2, "O")).toBe(true);
    });

    test("returns false when no diagonal is complete", () => {
      expect(checkDiagonal(board, "O")).toBe(false);
    });
  });
});

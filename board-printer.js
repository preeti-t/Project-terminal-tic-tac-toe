/* 
    Given a tic-tac-toe board represented by an array of arrays - output the board to the terminal.
    For example, if we have the following board:
        let board = [
            ['X', '_', '_'],
            ['_', 'X', '_'],
            ['O', 'O', 'X']
        ];
    We should output something like this (feel free to be creative):
          X  |     |     
        =================
             |  X  |     
        =================
          O  |  O  |  X  
        =================
    Test your function by calling it with an example tic-tac-toe board.
*/
export function printBoard(board) {
  for (let row of board) {
    console.log(row.join(" | "));
    console.log("---------");
  }
}

export function checkIfNoMovesLeft(board) {
  for (let row of board) {
    for (let cell of row) {
      if (cell === "_") {
        return false;
      }
    }
  }
  return true;
}

const board = [
  ["X", "_", "_"],
  ["_", "X", "_"],
  ["O", "O", "X"],
];



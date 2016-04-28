/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  var solution = [];

  //create a board of nxn s ize
  var board = new Board({n: n});
  var rows = board.rows();
  // debugger;
  // iterate over all rows
  for (var i = 0; i < rows.length; i++) {
    // iterate over individual row
    for (var j = 0; j < rows[i].length; j++) {
      // if square is 0
      if (!rows[i][j]) {
        // toggle to 1
        board.togglePiece(i, j);
      }
      // if any row/col conflicts
      if (board.hasAnyRowConflicts() || board.hasAnyColConflicts()) {
        // toggle back to 0 move to next square
        board.togglePiece(i, j); 
      } 
    }
    solution.push(rows[i]);
  }
  // solution.push(board);
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  // var solutionCount = 1;
  // for (var i = 1; i < n + 1; i++) {
  //   solutionCount *= i;
  // }
  // console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  // return solutionCount;

  // instantiate new board for n
  var board = new Board(n);
  // store rows in var
  var rows = this.rows();
  var thisBoard = this;
  // declare recursive function for iterating over row
  var checkRow = function(row) {
  // iterate over first row
    row.forEach(function(square, index, row) {
    // toggle index
      thisBoard.togglePiece(index, a);
      // if conflict
        // toggle back
      // call recursively on next row
    });
  };

  rows.forEach(function(row, rowIndex) {

  });

};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};

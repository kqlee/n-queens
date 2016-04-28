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

  var board = new Board({n: n});
  var rows = board.rows();
  for (var i = 0; i < rows.length; i++) {
    for (var j = 0; j < rows.length; j++) {
      board.togglePiece(i, j);
      if (board.hasAnyRooksConflicts()) {
        board.togglePiece(i, j); 
      } 
    }
    solution.push(rows[i]);
  }
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0;
  var board = new Board({n: n});
  var rows = board.rows();
  var checkRow = function(rowNum) {
    if (rowNum === rows.length) {
      solutionCount++;
      return;
    }
    for (var col = 0; col < rows.length; col++) {
      board.togglePiece(rowNum, col);
      if (!board.hasAnyRooksConflicts()) {
        checkRow(++rowNum);
        board.togglePiece(--rowNum, col);
      } else {
        board.togglePiece(rowNum, col);
      }      
    }
  };

  checkRow(0);
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = [];
  var board = new Board({n: n});
  var rows = board.rows();

  var checkRow = function(rowNum) {
    if (rowNum === rows.length) {
      solution = solution.concat(rows);
      return;
    }
    for (var col = 0; col < rows.length; col++) {
      board.togglePiece(rowNum, col);
      if (!board.hasAnyQueensConflicts()) {
        checkRow(++rowNum);
        if (solution.length > 0) {
          return solution; 
        }
        board.togglePiece(--rowNum, col);
      } else {
        board.togglePiece(rowNum, col);
      }
    }
  };
  checkRow(0);
  if (n === 2 || n === 3) {
    solution = rows;
  }

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = 0;
  var board = new Board({n: n});
  var rows = board.rows();

  var checkRow = function(rowNum) {
    if (rowNum === rows.length) {
      solutionCount++;
      return;
    }
    for (var col = 0; col < rows.length; col++) {
      board.togglePiece(rowNum, col);
      if (!board.hasAnyQueensConflicts()) {
        checkRow(++rowNum);
        board.togglePiece(--rowNum, col);
      } else {
        board.togglePiece(rowNum, col);
      }
    }
  };

  checkRow(0);
  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};

import React, { useState } from 'react';
import Square from './square'; 

function Tictac() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [nextMove, setMove] = useState(true); // true means X's turn, false means O's turn


  function handleClick(i) {
    if (winner(squares) || squares[i]) {
      return;
    }
    const curr = squares.slice(); 
    curr[i] = nextMove ? "X" : "O"; 
    setSquares(curr);
    setMove(!nextMove); 
  }

  function winner(squares) {
    const possibilities = [
      [0, 1, 2], // Row 1
      [3, 4, 5], // Row 2
      [6, 7, 8], // Row 3
      [0, 3, 6], // Column 1
      [1, 4, 7], // Column 2
      [2, 5, 8], // Column 3
      [0, 4, 8], // Diagonal 1
      [2, 4, 6], // Diagonal 2
    ];

    for (let i = 0; i < possibilities.length; i++) {
      const [a, b, c] = possibilities[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a]; // Return winner (either "X" or "O")
      }
    }
    return null;
  }

  // Check if there's a winner
  const declare = winner(squares);
  let status;
  if (declare) {
    status = 'Winner: ' + declare;
  } else {
    status = 'Next player: ' + (nextMove ? 'X' : 'O');
  }
  function handlebtn() {
    setSquares(Array(9).fill(null));
  }
  return (
    <>
      <div className="row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
      <p>{status}</p>
      <button onClick={handlebtn}>reset</button>
    </>
  );
}

export default Tictac;

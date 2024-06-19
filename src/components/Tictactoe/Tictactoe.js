import React, { useState } from "react";
import "./styles.css"; // Ensure to add some styles to make it look better

// Square component represents a single square in the tic-tac-toe board
function Square({ value, onClick }) {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
}

// Board component renders the tic-tac-toe board by arranging Square components
function Board({ squares, onClick }) {
  // Function to render individual squares
  const renderSquare = (i) => {
    return <Square value={squares[i]} onClick={() => onClick(i)} />;
  };

  // Render the board with 3 rows of 3 squares each
  return (
    <div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}

// TicTacToe component manages the game state and logic
function TicTacToe() {
  const [squares, setSquares] = useState(Array(9).fill(null)); // State to store the value of each square
  const [xIsNext, setXIsNext] = useState(true); // State to track which player's turn it is

  // Function to handle a square being clicked
  const handleClick = (i) => {
    const newSquares = squares.slice();
    // Ignore click if there's a winner or the square is already filled
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    newSquares[i] = xIsNext ? "X" : "O"; // Set the square to X or O based on the current player
    setSquares(newSquares); // Update the squares state
    setXIsNext(!xIsNext); // Toggle the player turn
  };

  const winner = calculateWinner(squares); // Determine if there's a winner
  let status;
  if (winner) {
    status = "Winner: " + winner; // Display the winner
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O"); // Display the next player
  }

  // Render the status message and the Board component
  return (
    <div>
      <div className="status">{status}</div>
      <Board squares={squares} onClick={(i) => handleClick(i)} />
    </div>
  );
}

// Function to calculate the winner of the game
function calculateWinner(squares) {
  // Possible winning combinations
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  // Check each winning combination
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]; // Return the winner (X or O)
    }
  }
  return null; // Return null if there's no winner
}

export default TicTacToe; // Export the TicTacToe component as the default export

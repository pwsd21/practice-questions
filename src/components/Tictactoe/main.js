import React from "react";
import "./styles.css"; // Ensure to add some styles to make it look better
import TicTacToe from "./Tictactoe";

function Main() {
  return (
    <div className="Main">
      <h1>Tic-Tac-Toe</h1>
      <TicTacToe />
    </div>
  );
}

export default Main;

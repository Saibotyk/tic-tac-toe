import React, { useState } from 'react';

export default function Square({ value, id, boardArray, setBoardArray }) {
  const [playerMoved, setPlayerMoved] = useState(false);

  const handleClick = (id) => {
    if (!playerMoved) {
      const boardArrayCopy = boardArray.map((square) => {
        if (square.id === id && square.value === "") {
          return { ...square, value: "X" };
        }
        return square;
      });
      setBoardArray(boardArrayCopy);
      setPlayerMoved(true);

      let randomize;
      let totalMoves = 0;

      do {
        randomize = Math.floor(Math.random() * 9);
        totalMoves = boardArrayCopy.filter((square) => square.value !== "").length;
      } while (boardArrayCopy[randomize].value !== "" && totalMoves < 9);

      if (totalMoves < 9) {
        boardArrayCopy[randomize].value = "O";
        setBoardArray(boardArrayCopy);
      }
    }
  };

  return (
    <li key={id}>
      <button className="square" onClick={() => handleClick(id)}>
        {value}
      </button>
    </li>
  );
}

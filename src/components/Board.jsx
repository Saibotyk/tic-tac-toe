import React from 'react'
import Square from './Square'
import { useState } from 'react';


export default function Board({ boardArray, setBoardArray }) {
  const [victoryArray, setVictoryArray] = useState([
    0, 0
  ])
  const verifyCross = (array) => {
    if (
      (array[0].value === "X") &&
      (array[1].value === "X") &&
      (array[2].value === "X")
    ) {
      return true;
    } else if (
      (array[3].value === "X") &&
      (array[4].value === "X") &&
      (array[5].value === "X")) {
      return true;
    } else if (
      (array[6].value === "X") &&
      (array[7].value === "X") &&
      (array[8].value === "X")) {
      return true;
    } else if (
      (array[0].value === "X") &&
      (array[3].value === "X") &&
      (array[6].value === "X")) {
      return true;
    } else if (
      (array[1].value === "X") &&
      (array[4].value === "X") &&
      (array[7].value === "X")) {
      return true;
    } else if (
      (array[2].value === "X") &&
      (array[5].value === "X") &&
      (array[8].value === "X")) {
      return true;
    } else if (
      (array[0].value === "X") &&
      (array[4].value === "X") &&
      (array[8].value === "X")) {
      return true;
    } else if (
      (array[2].value === "X") &&
      (array[4].value === "X") &&
      (array[6].value === "X")) {
      return true;
    }
  };


  const verifyCircle = (array) => {
    if (
      (array[0].value === "O") &&
      (array[1].value === "O") &&
      (array[2].value === "O")
    ) {
      return true;
    } else if (
      (array[3].value === "O") &&
      (array[4].value === "O") &&
      (array[5].value === "O")) {
      return true;
    } else if (
      (array[6].value === "O") &&
      (array[7].value === "O") &&
      (array[8].value === "O")) {
      return true;
    } else if (
      (array[0].value === "O") &&
      (array[3].value === "O") &&
      (array[6].value === "O")) {
      return true;
    } else if (
      (array[1].value === "O") &&
      (array[4].value === "O") &&
      (array[7].value === "O")) {
      return true;
    } else if (
      (array[2].value === "O") &&
      (array[5].value === "O") &&
      (array[8].value === "O")) {
      return true;
    } else if (
      (array[0].value === "O") &&
      (array[4].value === "O") &&
      (array[8].value === "O")) {
      return true;
    } else if (
      (array[2].value === "O") &&
      (array[4].value === "O") &&
      (array[6].value === "O")) {
      return true;
    }
  };
  let victoryArrayCopy = [...victoryArray]
  if (verifyCross(boardArray)) {
    victoryArrayCopy[0]++
    setVictoryArray(victoryArrayCopy);
  } else if (verifyCircle(boardArray)) {
    victoryArrayCopy[1]++
    setVictoryArray(victoryArrayCopy);
  }

  const handleRestart = (boardArray) => {
    let boardArrayCopy = [...boardArray]
    boardArrayCopy = boardArrayCopy.map((move) => { return { ...move, value: "" } })
    setBoardArray(boardArrayCopy)
  }

  if (verifyCross(boardArray)) {
    return (
      <div>
        <p>Vous avez gagné</p>
        <button onClick={() => handleRestart(boardArray)}>Rejouer</button>
        <h2>Scores</h2>
        <ul>
          <li>Joueur = {victoryArrayCopy[0]} point(s)</li>
          <li>Ordinateur = {victoryArrayCopy[1]} point(s)</li>
        </ul>
      </div>
    );
  } else if (verifyCircle(boardArray)) {
    return (
      <div>
        <p>L'ordinateur a gagné</p>
        <button onClick={() => handleRestart(boardArray)}>Rejouer</button>
        <h2>Scores</h2>
        <ul>
          <li>Joueur = {victoryArrayCopy[0]} point(s)</li>
          <li>Ordinateur = {victoryArrayCopy[1]} point(s)</li>
        </ul>
      </div>
    );
  } 
  return (
    <div>
      <ul className="board">
        {boardArray.map((square) => (
          <Square
            key={square.id}  // Ajoutez une clé unique pour chaque élément dans le tableau
            id={square.id}
            value={square.value}
            boardArray={boardArray}
            setBoardArray={setBoardArray}
          />
        ))}
      </ul>
      <h2>Scores</h2>
      <ul>
        <li>Joueur = {victoryArrayCopy[0]} point(s)</li>
        <li>Ordinateur = {victoryArrayCopy[1]} point(s)</li>
      </ul>
    </div>
  );}


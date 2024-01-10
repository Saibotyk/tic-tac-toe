import React from 'react'
import { useState } from 'react'
import './App.css'
import Board from './components/Board'



export default function App() {
  // state
  
const [boardArray, setBoardArray] = useState([
  {id:1, value:""},
  {id:2, value:""},
  {id:3, value:""},
  {id:4, value:""},
  {id:5, value:""},
  {id:6, value:""},
  {id:7, value:""},
  {id:8, value:""},
  {id:9, value:""}
])

console.log(boardArray);

  return (
    <div>
      <h1>Morback 2000</h1>
      <Board boardArray={boardArray} setBoardArray={setBoardArray}/>
    </div>
  )
}

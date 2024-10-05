import React, { useState } from 'react'
import Board from './Board'
import './App.css'
import Players from './Players'


const App = () => {
  const [reset, setReset] = useState(false)
  const [winner, setWinner] = useState('')
  const Reset = ()=>{
    setReset(true)
  }
  return (
    <div className='App'>
      <h1>TIC TAC TOE</h1>
      <div className={`winner ${winner !=="" ? "" : "shrink"}`}>
        <div className='winner-text'>{winner}</div>
      <button onClick={Reset}>Reset</button>
      </div>
      <Board reset={reset} setReset={setReset} winner={winner} setWinner={setWinner}/>
      <Players/>
    </div>
  )
}

export default App
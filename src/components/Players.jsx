import React,{ useEffect,useState } from 'react'
import './style.css'
const Players = () => {
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");
  useEffect(() => {
    console.log('Players');
  },[setPlayer1, setPlayer2])

  const firstPlayer = (e) =>{
    setPlayer1(e.target.value);
  }
  const secondPlayer = (e) =>{
    setPlayer2(e.target.value);
  }
  return (
    <div className='players-container'>
      <input className='input1' type="text" placeholder="Player 1" onChange={firstPlayer} value={player1}/>
      <input type="text" placeholder="Player 2" onChange={secondPlayer} value={player2}/>
      <div className='players-title'>
      <h6>Player_1: {player1}</h6>
      <h6>Player_2: {player2}</h6>
      </div>
    </div>
  )
}

export default Players

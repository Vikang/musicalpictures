import React, {useState, useEffect} from 'react'
import { GameForm, Header } from '../components'

import './Game.css';

function Game() {
  const [data, setData] = useState([{}])
  useEffect(() => {
    fetch("/game").then(
      res => res.json()
  ).then(
     data => {
        setData(data)
        console.log(data)
      }
    )
  }, [])
  return (
    <div>
      <Header/>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {(typeof data.artist === 'undefined') ? (
          <p>Loading...</p>
        ) : (
          data.links.map((link,i) => (
            <img src = {link} alt = {link} class="center" key = {i} height={250} width={250}/>
          ))
        )}
      </div>
      <GameForm/>
    </div>
  )
}

export default Game
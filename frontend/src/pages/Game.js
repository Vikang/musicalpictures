import React, {useState, useEffect} from 'react'

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
      {(typeof data.artist === 'undefined') ? (
        <p>Loading...</p>
      ) : (
        data.links.map((link,i) => (
          <img src = {link} alt = {link} key = {i}  width="400" height="500"/>
        ))
      )}
    </div>
  )
}

export default Game
import React from 'react'
import play from '../images/play.png'
import help from '../images/help.png'
import settings from '../images/settings.png'
import styled from 'styled-components'
import { SoundBar } from '../components'

const PlayBtn = styled.img`
/* position: fixed;
top: 2rem;
left: 50%;
transform: translate(-50%, 0);
background-color: #FCF6F4;
padding: 0.3rem;
border-radius: 50%;
border: 1px solid #000;
width: 2.5rem;
height: 2.5rem;
display: flex;
justify-content: center;
align-items:center;
z-index:3; */

cursor: pointer;
&:hover{
    background-color: rgba(0,255,0,0.4);
    box-shadow: 0 0 8px 6px rgba(0,255,0,0.2);
}
&>*:first-child{
    text-decoration: none;
    color: inherit;
}
`

function Home() {
  return (
    <div>
      <SoundBar/>
      <h1>Sound Check</h1>
      <a href="/genre">
        <PlayBtn src={play} alt="play button"/>
      </a>
      <a href="/settings">
        <PlayBtn src={settings} alt="settings button"/>
      </a>
      <a href="/help">
        <PlayBtn src={help} alt="help button"/>
      </a>
    </div>
  )
}

export default Home
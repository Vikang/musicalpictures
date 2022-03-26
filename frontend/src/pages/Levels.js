import React from 'react'

import easy from '../images/easy.png'
import medium from '../images/medium.png'
import hard from '../images/hard.png'
import emoji from '../images/emoji.png'


import home from '../images/home.png'
import help from '../images/help.png'
import settings from '../images/settings.png'


function Levels() {
  return (
    <div>
        <h1>Level Pack</h1>
        <a href="/game">
            <img src={easy} alt="easy button"/>
        </a>
        <a href="/game">
            <img src={medium} alt="medium button"/>
        </a>
        <a href="/game">
            <img src={hard} alt="hard button"/>
        </a>
        <a href="/game">
            <img src={emoji} alt="emoji button"/>
        </a>
        <a href="/">
            <img src={home} alt="home button"/>
        </a>
        <a href="/settings">
            <img src={settings} alt="settings button"/>
        </a>
        <a href="/help">
            <img src={help} alt="help button"/>
        </a>
    </div>
  )
}

export default Levels
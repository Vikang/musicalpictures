import React from 'react'

import hiphop from '../images/hiphop.png'
import pop from '../images/pop.png'
import tophits from '../images/tophits.png'
import indie from '../images/indie.png'

import home from '../images/home.png'
import help from '../images/help.png'
import settings from '../images/settings.png'

function Genre() {
  return (
    <div>
        <h1>Select Genre</h1>
        <a href="/levels">
            <img src={tophits} alt="top hits button"/>
        </a>
        <a href="/levels">
            <img src={pop} alt="pop button"/>
        </a>
        <a href="/levels">
            <img src={hiphop} alt="hip hop button"/>
        </a>
        <a href="/levels">
            <img src={indie} alt="indie button"/>
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

export default Genre
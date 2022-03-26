import React from 'react'
import play from '../images/play.png'
import help from '../images/help.png'
import settings from '../images/settings.png'

function Home() {
  return (
    <div>
      <h1>Sound Check</h1>
      <a href="/genre">
        <img src={play} alt="play button"/>
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

export default Home
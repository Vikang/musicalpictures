import React, {useState, useEffect} from 'react'
import { GlobalStyle } from './styles'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Home, Help, Settings, Game, Genre, Levels, GameLyrics } from './pages'


function App() {

    return (
      <div className="App">
        <GlobalStyle/>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/help" element={<Help />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/genre" element={<Genre />} />
            <Route path="/levels" element={<Levels />} />
            <Route path="/game" element={<Game />} />
            <Route path="/gameLyrics" element={<GameLyrics />} />
          </Routes>
        </Router>
      </div>
    )
}
export default App

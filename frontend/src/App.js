import React, {useState, useEffect} from 'react'
import { GlobalStyle } from './styles'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Home, Help, Settings, Game, Genre, Levels } from './pages'

function App() {
    return (
      <div className="App">
        <GlobalStyle/>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/help" element={<Help />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/game" element={<Game />} />
            <Route path="/genre" element={<Genre />} />
            <Route path="/levels" element={<Levels />} />
          </Routes>
        </Router>
      </div>
    )
}
export default App

// function App() {

//   const [data, setData] = useState([{}])

//   useEffect(() => {
//     fetch("/members").then(
//       res => res.json()
//     ).then(
//       data => {
//         setData(data)
//         console.log(data)
//       }
//     )
//   }, [])


//   return (
//     <div>
//       {(typeof data.members === 'undefined') ? (
//         <p>Loading...</p>
//       ) : (
//         data.members.map((member,i) => (
//           <p key={i}>{member}</p>
//         ) )
//       )}
//     </div>
//   )
// }

// export default App

import React, {useState, useEffect} from 'react'
import { Header } from '../components'

// function Game() {
//   const [data, setData] = useState([{}])
//   useEffect(() => {
//     fetch("/game").then(
//       res => res.json()
//   ).then(
//      data => {
//         setData(data)
//         console.log(data)
//       }
//     )
//   }, [])
//   return (
//     <div>
//       {(typeof data.artist === 'undefined') ? (
//         <p>Loading...</p>
//       ) : (
//         data.links.map((link,i) => (
//           <img src = {link} alt = {link} key = {i}  width="400" height="500"/>
//         ))
//       )}
//     </div>
//   )
// }


//     return (
//         <div>
//             <h1>Game</h1>
//             <form>
//                 <label>
//                     Song Title:
//                     <input type="text" name="name" />
//                 </label>
//                 <input type="submit" value="Submit" />
//                 </form>
//         </div>

//   )
// }

// export default Game

class Game extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
      this.setState({value: event.target.value});
    }

    handleSubmit(event) {
      alert('A song title was submitted: ' + this.state.value);
      event.preventDefault();
    }

    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <Header/>
          <h1>Game</h1>
          <label>
            Song Title Guess:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

  export default Game
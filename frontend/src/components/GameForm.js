import React, {useState, useEffect} from 'react'
import { Header, GetImages } from '.'

class GameForm extends React.Component {

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
          <h1>Musical Pictures</h1>

          <GetImages/>

          <label>
            Song Title Guess:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

  export default GameForm
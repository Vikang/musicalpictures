import React, {useState, useEffect} from 'react'
import { Header } from '.'

import "bootstrap/dist/css/bootstrap.min.css";
import './GameForm.css';

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
      alert('Correct! ');
      window.location.reload(false);
      event.preventDefault();
    }

    render() {

      return (
        <div style={{ display: "flex", justifyContent: "center" }}>
        <form onSubmit={this.handleSubmit}>
          <label>
              <input class="form-control" type="text" name="songName" value={this.state.value} onChange={this.handleChange} placeholder="Try a Song Name"/>
            </label>
            <button class="btn btn-primary" type="submit">Submit</button>
        </form>
        </div>
      );
    }
  }

  export default GameForm
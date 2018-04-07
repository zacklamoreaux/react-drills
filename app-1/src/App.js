import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super() 

    this.state = {
      input: ''
    }
    this.handleInput = this.handleInput.bind(this)
  }

  handleInput(e) {
    this.setState({
      input: e.target.value
    })

  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p><input value={this.state.input} onChange={this.handleInput} /></p>
        </div>
        <p className="App-intro">
          {this.state.input}
        </p>
      </div>
    );
  }
}

export default App;

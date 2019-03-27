import React, { Component } from 'react';
import './App.css';
import Travels from "./Travels";
class App extends Component {
  render() {
    return (
    <div className="App">
    <header className="App-header">
    <h1 className="App-title">Travels</h1>
    </header>
    <Travels />
    </div>
    );
  }  
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Travel from "./Travel";
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My travels</h1>
        </header>
        <Travel
          travel="London"
          country="England"
          image="https://cdn.civitatis.com/reino-unido/londres/guia/distritos.jpg"
          distance="1200kms"
        />
        <Travel
          travel="Lausanne"
          country="Switzerland"
          image="https://www.railtour.ch/_images/ccd/417878/Lausanne-42666398.jpg"
          distance="1000kms"
        />
      </div>
    );
  }
}

export default App;

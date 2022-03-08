import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './style.css'
import Card from './Cards.js'
import MainPage from './MainPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> 
            <Card symbol="je sais pas" affichage={true}/> 
            <MainPage connect="connexion"/>
            <MainPage connect="peut etre"/>
        </header>
      </div>
    );
  }
}

export default App;
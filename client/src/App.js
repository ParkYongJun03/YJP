import logo from './logo.svg';
import React from 'react';
import './App.css';
import ImportComponent from './R003_ImportComponent'
import LifecycleEx from './R006_LifecycleEx'
function App() {
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
        <h1>시작해볼까?</h1>
        <ImportComponent></ImportComponent>
        <LifecycleEx prop_value = 'FromApp.js'></LifecycleEx>
      </header>
    </div>
  );
}

export default App;

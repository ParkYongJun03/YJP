/*
import logo from './logo.svg';
import React from 'react';
import './App.css';
import LifecycleEx from './R008_LifecycleEx'
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
        <LifecycleEx prop_value = 'FromApp.js'></LifecycleEx>
      </header>
    </div>
  );
}

export default App;
*/
//템플릿 문자열 사용하기
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import AAA from './R037_ReactstrapDropdown'

function App(){
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>CSS 적용하기</p>
      <AAA/>
    </div>
  );
}
export default App;
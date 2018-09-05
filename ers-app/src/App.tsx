import * as React from 'react';
import './App.css';

import logo from './logo.svg';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Sup Pham</h1>
        </header>
        <p className="App-intro">
          To get started, smoke the dankest weed you can find.
        </p>
      </div>
    );
  }
}

export default App;

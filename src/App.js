import React, { Component } from 'react';
import './App.css';

// importing components that has been created
import Main from './components/MainComponent';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Main />
      </div>
    );
  }

}

export default App;

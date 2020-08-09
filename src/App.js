import React, { Component } from 'react';

// importing internal component to enable routing in the react application
import { BrowserRouter } from 'react-router-dom';

import './App.css';

// importing components that has been created
import Main from './components/MainComponent';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Main />
        </div>
      </BrowserRouter>
    );
  }

}

export default App;

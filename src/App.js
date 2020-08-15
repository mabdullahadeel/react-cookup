import React, { Component } from 'react';

// importing internal component to enable routing in the react application
import { BrowserRouter } from 'react-router-dom';


// importing components that has been created
import Main from './components/MainComponent';

import './App.css';

// Implementing redux
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

const store = ConfigureStore();

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Main />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }

}

export default App;

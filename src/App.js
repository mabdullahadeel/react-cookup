import React, { Component } from 'react';

// importing react based components from bootstrap that are already made for reuse
import { Navbar, NavbarBrand } from 'reactstrap';

// importing components that has been created
import Menu from './components/MenuComponent';

// imorting dishes information from a separate file in the dihese folder
import { DISHES } from './shared/dishes';
import { render } from '@testing-library/react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    }
  };

  render() {
    return (
      <div className="App">
        {/* Adding the Navbar from the reactstrap based Bootstrap */}
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">My First React Application</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes} />
      </div>
    );
  }

}

export default App;

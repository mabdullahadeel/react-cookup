import React from 'react';

// importing react based components from bootstrap that are already made for reuse
import { Navbar, NavbarBrand } from 'reactstrap';

// importing components that has been created
import Menu from './components/MenuComponent';

function App() {
  return (
    <div className="App">
      {/* Adding the Navbar from the reactstrap based Bootstrap */}
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">My First React Application</NavbarBrand>
        </div>
      </Navbar>
      <Menu />
    </div>
  );
}

export default App;

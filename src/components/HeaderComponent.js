import React, { Component } from 'react';
// importing react based components from bootstrap that are already made for reuse
import { Navbar, NavbarBrand, Jumbotron } from 'reactstrap';

class Header extends Component {
    render() {
        return (
            <React.Fragment>
                {/* Adding the Navbar from the reactstrap based Bootstrap */}
                < Navbar dark >
                    <div className="container">
                        <NavbarBrand href="/">My First React Application</NavbarBrand>
                    </div>
                </Navbar >

                <Jumbotron>
                    <div className='container'>
                        <div className='row row-header'>
                            <div className="col-12 col-sm-6">
                                <h1>Food by Abdullah!</h1>
                                <h5>Let's make and taste something different out of this world!</h5>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </React.Fragment>
        )
    }
}

export default Header; 
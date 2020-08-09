import React, { Component } from 'react';
// importing react based components from bootstrap that are already made for reuse
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isNavOpen: false
        };
        this.toggleNave = this.toggleNave.bind(this);
        // To use toggleNave method inside the premade JSX components from ReactStra we need to bind it

    }

    toggleNave() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        })
    }

    render() {
        return (
            <React.Fragment>
                {/* Adding the Navbar from the reactstrap based Bootstrap */}
                < Navbar dark expand="md" > {/* expand="md" will only show the navebar for medium to extra large screens */}
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNave} />
                        <NavbarBrand href="/" className="mr-auto" >
                            <img src='https://seeklogo.com/images/R/restaurant-chief-food-hotel-logo-9DE9D03812-seeklogo.com.png'
                                height="30" width="41" alt="Murga Khana by Abdullah" />
                                Murga Khana
                        </NavbarBrand>
                        <Collapse navbar isOpen={this.state.isNavOpen}>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className='nav-link' to="/home">
                                        <span className="fa fa-home fa-lg"></span>  Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className='nav-link' to="/about">
                                        <span className="fa fa-info fa-lg" />  About
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className='nav-link' to="/menu">
                                        <span className="fa fa-list fa-lg" />  Menu
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className='nav-link' to="/contact">
                                        <span className="fa fa-address-card fa-lg" />  Contact Us
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
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
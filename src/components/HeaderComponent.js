import React, { Component, } from 'react';
// importing react based components from bootstrap that are already made for reuse
import {
    Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button, Modal, ModalHeader, ModalBody,
    FormGroup, Label, Form, Input,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isNavOpen: false,
            isModalOpen: false,
        };
        // To use toggleNave method inside the premade JSX components from ReactStra we need to bind it
        this.toggleNave = this.toggleNave.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogIn = this.handleLogIn.bind(this);

    }

    toggleNave() {
        this.setState({
            isNavOpen: !this.state.isNavOpen,
        })
    };

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen,
        })
    };

    handleLogIn(event) {
        this.toggleModal();
        alert(('Username:' + this.username.value +
            " ......Password: " + this.password.value +
            " Remember: " + this.remember.checked));
        event.preventDefault();
    };

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
                            {/* adding button for uncrolled form (LogIn form) */}
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <Button outline onClick={this.toggleModal}>
                                        <span className='fa fa-sign-in fa-lg'></span> Login
                                    </Button>
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

                {/* Implementing uncontrolled form (LogIn Form) */}
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>LogIn</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogIn}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type='text' id='username' name='username'
                                    placeholder="Username"
                                    innerRef={(input) => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type='password' id='password' name='password'
                                    placeholder="Password"
                                    innerRef={(input) => this.password = input} />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox"
                                        name='remember'
                                        innerRef={(input) => this.remember = input} />Remember me
                                </Label>
                            </FormGroup>
                            <Button type='submit' color='primary' value='submit'>LogIn</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </React.Fragment>
        )
    }
}

export default Header; 
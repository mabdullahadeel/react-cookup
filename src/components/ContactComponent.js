import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
    Breadcrumb, BreadcrumbItem,
    Input, Form, Button, Label, FormGroup, Col,
} from 'reactstrap';


class Contact extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            telNumber: '',
            email: '',
            agree: false,
            contectType: 'Tel.',
            message: '',
        };
        // To make the function available inside the JSX
        this.handleSubmission = this.handleSubmission.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.type === 'check' ? target.checked : target.value;
        const name = target.name
        this.setState({
            [name]: value
        })
    }

    handleSubmission(event) {
        console.log("Current State is : " + JSON.stringify(this.state));
        alert("Current State is : " + JSON.stringify(this.state));
        event.preventDefault();
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Contact</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Contact Us</h3>
                        <hr />
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                        <h3>Location Information</h3>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                        <h5>Our Address</h5>
                        <address>
                            Main Chapel Street<br />
                            Main Bullevard Road Gulber III<br />
                            Pakistan<br />
                            <i className="fa fa-phone"></i>: +852 1234 5678<br />
                            <i className="fa fa-fax"></i>: +852 8765 4321<br />
                            <i className="fa fa-envelope"></i>: <a href="mailto:luxurystuff4@gmail.com">luxurystuff4@gmail.com</a>
                        </address>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Map of our Location</h5>
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1">
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                            <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                            <a role="button" className="btn btn-success" href="mailto:luxurystuff4@gmail.com"><i className="fa fa-envelope-o"></i> Email</a>
                        </div>
                    </div>
                </div>
                {/* Integrating the form for users */}
                <div className='row row-content'>
                    <div className="col-12">
                        <h3>Send us your precious Feedback</h3>
                    </div>
                    <div className="col-12 col-md-9">
                        <Form onSubmit={this.handleSubmission}>
                            <FormGroup row>
                                <Label htmlFor='firstName' md={2}>First Name</Label>
                                <Col md={10}>
                                    <Input type='text' id='firstName'
                                        name='firstName'
                                        placeholder="Fist Name"
                                        value={this.state.firstName}
                                        onChange={this.handleChange} />
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label htmlFor='lastName' md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Input type='text' id='lastName'
                                        name='lastName'
                                        placeholder="Last Name"
                                        value={this.state.lastName}
                                        onChange={this.handleChange} />
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label htmlFor='telNumber' md={2}>Contact Number</Label>
                                <Col md={10}>
                                    <Input type='text' id='telNumber'
                                        name='telNumber'
                                        placeholder="Contact Number"
                                        value={this.state.telNumber}
                                        onChange={this.handleChange} />
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label htmlFor='email' md={2}>email</Label>
                                <Col md={10}>
                                    <Input type='email' id='email'
                                        name='email'
                                        placeholder="email address - example@example.com"
                                        value={this.state.email}
                                        onChange={this.handleChange} />
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Col md={{ size: 6, offset: 2 }}>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox" name="agree"
                                                checked={this.state.agree}
                                                onChange={this.handleChange} /> {' '}
                                            <strong>May we contact you?</strong>
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col md={{ size: 3, offset: 1 }}>
                                    <Input type="select" name="contactType"
                                        value={this.state.contactType}
                                        onChange={this.handleChange}>
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Input>
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label htmlFor='feedback' md={2}>Your Feedback</Label>
                                <Col md={10}>
                                    <Input type='textarea' id='message'
                                        name='message'
                                        placeholder="Start typing....."
                                        rows='12'
                                        value={this.state.message}
                                        onChange={this.handleChange} />
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Col md={{ size: 10, offset: 2 }}>
                                    <Button type='submit' color='primary'>Send Feedback</Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
                </div>

            </div>
        );
    }
}


export default Contact;
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
    Breadcrumb, BreadcrumbItem,
    Input, Button, Label, Col, Row,
} from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';


class Contact extends Component {
    constructor(props) {
        super(props);

        // To make the function available inside the JSX
        this.handleSubmission = this.handleSubmission.bind(this);
    }

    handleSubmission(values) {
        console.log("Current State is : " + JSON.stringify(values));
        alert("Current State is : " + JSON.stringify(values));
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

                        <LocalForm onSubmit={(value) => this.handleSubmission(value)}>
                            <Row className='form-group'>
                                <Label htmlFor='firstName' md={2}>First Name</Label>
                                <Col md={10}>
                                    <Control.text model='.firstName' id='firstName'
                                        className='form-control'
                                        name='firstName'
                                        placeholder="Fist Name"
                                    />
                                    {/* Displaying error messages */}
                                </Col>
                            </Row>

                            <Row className='form-group'>
                                <Label htmlFor='lastName' md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Control.text model='.lastName' id='lastName'
                                        className='form-control'
                                        name='lastName'
                                        placeholder="Last Name"
                                    />
                                </Col>
                            </Row>

                            <Row className='form-group'>
                                <Label htmlFor='telNumber' md={2}>Contact Number</Label>
                                <Col md={10}>
                                    <Control.text model='.telNumber' id='telNumber'
                                        className='form-control'
                                        name='telNumber'
                                        placeholder="Contact Number"
                                    />
                                </Col>
                            </Row>

                            <Row className='form-group'>
                                <Label htmlFor='email' md={2}>email</Label>
                                <Col md={10}>
                                    <Control.text model='.email' id='email'
                                        className='form-control'
                                        name='email'
                                        placeholder="email address - example@example.com"
                                    />
                                </Col>
                            </Row>

                            <Row className='form-group'>
                                <Col md={{ size: 6, offset: 2 }}>
                                    <div className='form-check'>
                                        <Label check>
                                            <Control.checkbox model=".agree" name="agree"
                                                className='form-check-input'
                                            /> {' '}
                                            <strong>May we contact you?</strong>
                                        </Label>
                                    </div>
                                </Col>
                                <Col md={{ size: 3, offset: 1 }}>
                                    <Control.select model=".contactType" name="contactType"
                                        className='form-control'>
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Control.select>
                                </Col>
                            </Row>

                            <Row className='form-group'>
                                <Label htmlFor='feedback' md={2}>Your Feedback</Label>
                                <Col md={10}>
                                    <Control.textarea model='.message' id='message'
                                        name='message'
                                        placeholder="Start typing....."
                                        rows='12'
                                        className='form-control'
                                    />
                                </Col>
                            </Row>

                            <Row className='form-group'>
                                <Col md={{ size: 10, offset: 2 }}>
                                    <Button type='submit' color='primary'>Send Feedback</Button>
                                </Col>
                            </Row>
                        </LocalForm>
                    </div>
                </div>

            </div >
        );
    }
}


export default Contact;
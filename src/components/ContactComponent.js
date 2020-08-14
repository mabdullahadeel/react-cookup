import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
    Breadcrumb, BreadcrumbItem,
    Input, Button, Label, Col, Row,
} from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';

// Validator functions
const required = (value) => value && value.length; // Error for the requirement of a certain field
const maxLength = (len) => (value) => !(value) || (value.length <= len); // !(value) checks foe empty string // Checkibg the maximum length is less then the rovided number
const minLenght = (len) => (value) => (value) && (value.length >= len); // Checking the minimum lengtht meets the certain specified rewuirements
const isNumber = (value) => !isNaN(Number(value)); //Check if the provided value os a number or not
// Using regular expressions to check if the provided email is a valid email with correct format
const isValidEmail = (email) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
// Regular Expression explanation ==> 
{/* 
    /^ ==> initialize the regular expression
    [A-Z0-9] ==> it starts with the letter between A to Z and can have numbers as well
    ._%+- ==> may or may not have these characters
    +@ ==> should have an @ symbol at that place
    .- ==> the A-Z or 0-9 can occure at any number of times
    {2,4} ==> At least 2 or maximum of 4 characters e.g .com .org etc

    Note:
    "." ==> ( period, dot or fullstop) provided that it is not the first or last character and it will not come one after the other.
*/}

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
                                        // validations stuff
                                        validators={{
                                            required, minLenght: minLenght(3), maxLength: maxLength(15),
                                        }}
                                    />
                                    {/* Displaying react-redux error messages */}
                                    <Errors
                                        className='text-danger'
                                        model='.firstName'
                                        show='touched' // only show errors if the field is touched
                                        messages={{
                                            // renders messages of the validator functions retuen "true"
                                            required: 'Required! ',
                                            minLenght: "The first name should contain at least 3 characters",
                                            maxLength: "Max. 15 characters are allowed for the first name",
                                        }}
                                    />

                                </Col>
                            </Row>

                            <Row className='form-group'>
                                <Label htmlFor='lastName' md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Control.text model='.lastName' id='lastName'
                                        className='form-control'
                                        name='lastName'
                                        placeholder="Last Name"
                                        // validation stuff
                                        validators={{
                                            required, minLenght: minLenght(3), maxLength: maxLength(15),
                                        }}
                                    />
                                    {/* Displaying react-redux error messages */}
                                    <Errors
                                        className='text-danger'
                                        model='.lastName'
                                        show='touched' // only show errors if the field is touched
                                        messages={{
                                            // renders messages of the validator functions retuen "true"
                                            required: 'Required! ',
                                            minLenght: "The last name should contain at least 3 characters",
                                            maxLength: "Max. 15 characters are allowed for the last name",
                                        }}
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
                                        // validation stuff
                                        validators={{
                                            required, minLenght: minLenght(3),
                                            maxLength: maxLength(15), isNumber
                                        }}
                                    />
                                    {/* Displaying react-redux error messages */}
                                    <Errors
                                        className='text-danger'
                                        model='.telNumber'
                                        show='touched' // only show errors if the field is touched
                                        messages={{
                                            // renders messages of the validator functions retuen "true"
                                            required: 'Required! ',
                                            minLenght: "The number should contain at least 2 characters.",
                                            maxLength: "Max. 15 characters are allowed for telephone number.",
                                            isNumber: "The input might contain a letter. Contact numbers does not contain letters."
                                        }}
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
                                        //validatin stuff
                                        validators={{
                                            required, isValidEmail,
                                        }}
                                    />
                                    {/* react-redux validation */}
                                    <Errors
                                        className="text-danger"
                                        model='.email'
                                        show='touched'
                                        messages={{
                                            required: "Required! ",
                                            isValidEmail: "The email format is invalid!",
                                        }} />
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

                                        // Validation stuff
                                        validators={{
                                            required,
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".message"
                                        show='touched'
                                        messages={{
                                            required: "Required! "
                                        }}
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
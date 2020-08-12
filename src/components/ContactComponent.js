import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
    Breadcrumb, BreadcrumbItem,
    Input, Form, Button, Label, FormGroup, Col,
    FormFeedback,
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

            // For vaidation purposes
            touched: {
                firstName: false,
                lastName: false,
                telNumber: false,
                email: false,
                message: false,
            }
        };
        // To make the function available inside the JSX
        this.handleSubmission = this.handleSubmission.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.type === 'check' ? target.checked : target.value;
        const name = target.name
        this.setState({
            [name]: value
        });

    }

    handleSubmission(event) {
        console.log("Current State is : " + JSON.stringify(this.state));
        alert("Current State is : " + JSON.stringify(this.state));
        event.preventDefault();
    }

    // Methods for form validation
    handleBlur = (field) => (event) => {
        this.setState({
            touched: { ...this.state.touched, [field]: true }
        });
    };

    validate(firstName, lastName, telNumber, email, message) {
        const errorMessages = {
            firstName: '',
            lastName: '',
            telNumber: '',
            email: '',
            message: '',
        };

        if (this.state.touched.firstName && firstName.length === 0)
            errorMessages.firstName = 'Invalid First Name!'

        else if (this.state.touched.firstName && firstName.length > 15)
            errorMessages.firstName = "The First Name entered is too long."

        if (this.state.touched.lastName && lastName.length === 0)
            errorMessages.lastName = 'Invalid Last Name!'
        else if (this.state.touched.firstName && lastName.length > 15)
            errorMessages.lastName = "The Last Name entered is too long."

        // Using the "regular expressions" to check if the given input contains numbers only
        const regularExpression = /^\d+$/ // representing a regular expression
        if (this.state.touched.telNumber && !regularExpression.test(telNumber))
            errorMessages.telNumber = 'Telephone number is invalid!'

        // validating the string
        if (this.state.touched.email && email.split('').filter((x) => x === '@').length !== 1)
            errorMessages.email = "Invalid email.(Email should have '@'."

        // validating the message that the message string is not empty
        if (this.state.touched.message && message == '')
            errorMessages.message = "The message field cannot be empty"

        return (errorMessages);


    }

    render() {
        // validating the form while the user is entering in the fields
        const errors = this.validate(this.state.firstName, this.state.lastName,
            this.state.telNumber, this.state.email, this.state.message)

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
                                        onChange={this.handleChange}
                                        // Checking weather the field is touched by the user or not
                                        onBlur={this.handleBlur('firstName')}
                                        valid={errors.firstName === ''}
                                        invalid={errors.firstName !== ''} />
                                    {/* Displaying error messages */}
                                    <FormFeedback>{errors.firstName}</FormFeedback>
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label htmlFor='lastName' md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Input type='text' id='lastName'
                                        name='lastName'
                                        placeholder="Last Name"
                                        value={this.state.lastName}
                                        onChange={this.handleChange}
                                        onBlur={this.handleBlur('lastName')}
                                        valid={errors.lastName === ''}
                                        invalid={errors.lastName !== ''} />
                                    <FormFeedback>{errors.lastName}</FormFeedback>
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label htmlFor='telNumber' md={2}>Contact Number</Label>
                                <Col md={10}>
                                    <Input type='text' id='telNumber'
                                        name='telNumber'
                                        placeholder="Contact Number"
                                        value={this.state.telNumber}
                                        onChange={this.handleChange}
                                        onBlur={this.handleBlur('telNumber')}
                                        valid={errors.telNumber === ''}
                                        invalid={errors.telNumber !== ''} />
                                    <FormFeedback>{errors.telNumber}</FormFeedback>
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label htmlFor='email' md={2}>email</Label>
                                <Col md={10}>
                                    <Input type='email' id='email'
                                        name='email'
                                        placeholder="email address - example@example.com"
                                        value={this.state.email}
                                        onChange={this.handleChange}
                                        onBlur={this.handleBlur('email')}
                                        valid={errors.email === ''}
                                        invalid={errors.email !== ''} />
                                    <FormFeedback>{errors.email}</FormFeedback>

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
                                        onChange={this.handleChange}
                                        onBlur={this.handleBlur('message')}
                                        valid={errors.message === ''}
                                        invalid={errors.message !== ''} />
                                    <FormFeedback>{errors.message}</FormFeedback>

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
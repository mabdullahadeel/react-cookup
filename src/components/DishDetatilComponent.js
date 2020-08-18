import React, { Component } from 'react';

import {
    Card, CardImg, CardImgOverlay, CardBody, CardText, CardTitle,
    Button, Modal, ModalHeader, ModalBody,
    Label, Row, Col
} from 'reactstrap';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';

import { LoadingSpinner } from './LoadingComponent'
import { BaseURL } from '../shared/baseURL'; // importing the main url for the backend server to fetch the dishes
import { FadeTransform, Fade, Stagger } from 'react-animation-components'; // Animation related stuff

// separating the dish detail in a separate component
function RenderDish({ dish }) {
    console.log(dish);
    if (dish != null)
        return (
            <FadeTransform in transformProps={{
                exitTransform: 'scale(0.5) translateY(-50%)'
            }}>
                <Card>
                    <CardImg top src={BaseURL + dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle><h2>{dish.name}</h2></CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </FadeTransform>
        );
    else
        return (
            <div></div >
        );
}

function RenderComments({ selectedDishComments }) {
    if (selectedDishComments != null) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' }
        return (
            <Stagger in>
                {selectedDishComments.map((comment) => {
                    return (
                        <Fade in>
                            <li key={comment.id} className='list-unstyled'>
                                <p>{comment.comment}</p>
                                <p>-- {comment.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}</p>
                            </li>
                        </Fade>
                    );
                })}
            </Stagger>
        )
    }
    else
        return (
            <div></div >
        )


}

// Comment Form Validation
// Validator functions
const required = (value) => value && value.length; // Error for the requirement of a certain field
const maxLength = (len) => (value) => !(value) || (value.length <= len); // !(value) checks foe empty string // Checkibg the maximum length is less then the rovided number
const minLenght = (len) => (value) => (value) && (value.length >= len); // Checking the minimum lengtht meets the certain specified rewuirements
// Class Based Component to Render the Button and Modal For the comment form
class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isCommentModalOpen: false,
        };
        this.toggleCommentModal = this.toggleCommentModal.bind(this)
        this.handleCommentSubmission = this.handleCommentSubmission.bind(this)
    };

    toggleCommentModal() {
        this.setState({
            isCommentModalOpen: !this.state.isCommentModalOpen,
        })
    };

    handleCommentSubmission(values) {
        this.toggleCommentModal();
        // applying jugaar to deal with the value of rating being 'undefined' when untouched '5'
        let gotRating = values.rating;
        if (gotRating === undefined) {
            gotRating = 5;
            this.props.postComment(this.props.dishId, gotRating, values.fullName, values.message)
        } else {
            this.props.postComment(this.props.dishId, gotRating, values.fullName, values.message)
        }
    };

    render() {
        return (
            <React.Fragment>
                {/* // Adding button for the Comment */}
                <Button outline onClick={this.toggleCommentModal} color='primary'>
                    <span className='fa fa-comment fa-lg' ></span> Comment
                </Button>

                {/* Modal Form controlled by react-redux-form */}
                <Modal isOpen={this.state.isCommentModalOpen} toggle={this.toggleCommentModal}>
                    <ModalHeader toggle={this.toggleCommentModal}>Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={this.handleCommentSubmission}>
                            {/* Rating Part */}
                            <Row className='form-group'>
                                <Label htmlFor='rating' md={2}><h5>Rating</h5></Label>
                                <Col md={{ size: 12, offset: 0.5 }}>
                                    <Control.select model=".rating" name="rating"
                                        className='form-control'
                                        id='rating'>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option selected>5</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            {/* Name Part */}
                            <Row className='form-group'>
                                <Label htmlFor='fullName' md={2}><h5>Name</h5></Label>
                                <Col md={{ size: 12, offset: 0.5 }}>
                                    <Control.text model='.fullName' id='fullName'
                                        className='form-control'
                                        name='fullName'
                                        placeholder="Name"
                                        // validations stuff
                                        validators={{
                                            required, minLenght: minLenght(3), maxLength: maxLength(24),
                                        }}
                                    />
                                    {/* Displaying react-redux error messages */}
                                    <Errors
                                        className='text-danger'
                                        model='.fullName'
                                        show='touched' // only show errors if the field is touched
                                        messages={{
                                            // renders messages of the validator functions retuen "true"
                                            required: 'Required! ',
                                            minLenght: "The name should contain at least 3 characters",
                                            maxLength: "Max. 22 characters are allowed for the name",
                                        }}
                                    />
                                </Col>
                            </Row>

                            {/* Message */}
                            <Row className='form-group'>
                                <Label htmlFor='feedback' md={5}><h5>Your Thoughts!</h5></Label>
                                <Col md={{ size: 12, offset: 0.5 }}>
                                    <Control.textarea model='.message' id='message'
                                        name='message'
                                        placeholder="Start typing....."
                                        rows='5'
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

                            {/* Submit Button */}
                            <Row className='form-group'>
                                <Col md={{ size: 7, offset: 0.5 }}>
                                    <Button type='submit' color='primary'>Send Feedback</Button>
                                </Col>
                            </Row>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </React.Fragment>
        )

    }
};


const DishDetail = (props) => {
    if (props.isLoading) {
        return (
            <div className="container">
                <div className="row">
                    <LoadingSpinner />
                </div>
            </div>
        );
    }
    else if (props.fetchErrorMessages) {
        return (
            <div className="container">
                <div className="row">
                    <h4>{props.fetchErrorMessages}</h4>
                </div>
            </div>
        );
    }
    else if (props.dish != null)
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <Link to='/menu'>Menu/</Link>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <br />
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <br />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {props.dish != null ? <h4>Comments</h4> : <div></div>}
                        <RenderComments selectedDishComments={props.comments} />

                        {/* Rendering the Button and form to add the Comments */}
                        <CommentForm
                            postComment={props.postComment}
                            dishId={props.dish.id} />
                    </div>
                </div >
            </div >
        )
    else
        return (
            <div></div>
        )
}
export default DishDetail;
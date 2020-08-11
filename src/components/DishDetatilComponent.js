import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardBody, CardText, CardTitle } from 'reactstrap';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';


// separating the dish detail in a separate component

function RenderDish({ dish }) {
    console.log(dish);
    if (dish != null)
        return (
            <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle><h2>{dish.name}</h2></CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
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
            selectedDishComments.map((oneComment) => {
                return (
                    <div key={oneComment.id}>
                        <li className="list-unstyled">
                            <li>{oneComment["comment"]}</li>
                            <p>-- {oneComment.author}, {new Date(oneComment.date).toLocaleDateString('en-US', options)}</p>
                        </li>
                    </div>
                )
            })
        );
    }
    else
        return (
            <div></div >
        )
}

const DishDetail = (props) => {
    if (props.dish != null)
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
                    </div>
                </div >
            </div>
        )
    else
        return (
            <div></div>
        )
}
export default DishDetail;
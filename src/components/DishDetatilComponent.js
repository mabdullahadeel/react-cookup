import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardBody, CardText, CardTitle } from 'reactstrap';


// separating the dish detail in a separate component
class DishDetail extends Component {
    constructor(props) {
        super(props);
    }

    renderDish(dish) {
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

    renderComments(comments) {
        if (comments.length != 0 || comments != null) {
            const options = { year: 'numeric', month: 'long', day: 'numeric' }
            return (
                this.props.comments.map((oneComment) => {
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


    render() {

        return (
            <div className="row">
                <div className="col-12 col-md-5 m-1">{this.renderDish(this.props.selectedDishFromMenu)}</div>
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    {this.renderComments(this.props.comments)}
                </div>
            </div >
        )
    }
}

export default DishDetail;
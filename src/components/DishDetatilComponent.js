import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardBody, CardText, CardTitle } from 'reactstrap';


// separating the dish detail in a separate component
class DishDetail extends Component {
    constructor(props) {
        super(props);

        // Checking the pattern how react makes calls to different parts of the applicaion
        console.log("constructor from the DishDetail Component is called!");

    }

    // This function is always called by react while rendering the DOM
    componentDidMount() {
        console.log("componentDidMount called in DishDetailComponent!");
    }
    componentDidUpdate() {
        console.log("componentWillMount called from DishDetailComponent!");
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

    renderComments(selectedDishComments) {
        if (selectedDishComments != null) {
            const options = { year: 'numeric', month: 'long', day: 'numeric' }
            return (
                selectedDishComments.comments.map((oneComment) => {
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
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">{this.renderDish(this.props.dish)}</div>
                    <div className="col-12 col-md-5 m-1">
                        {this.props.dish != null ? <h4>Comments</h4> : <div></div>}
                        {this.renderComments(this.props.dish)}
                    </div>
                </div >
            </div>
        )
    }
}

export default DishDetail;
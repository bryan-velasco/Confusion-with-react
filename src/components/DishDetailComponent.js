import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, ListGroup, ListGroupItem} from 'reactstrap';

class DishDetail extends Component{
    constructor(props){
        super(props)
        //dish from selected dish as a prop
        //console.log(this.props.dish.name);
        //console.log("Constructor de dish");
    }

    renderDish(dish){
        if(dish != null){
            return(
                <Card>
                    <CardImg width="100%" className="img-fluid img-thumbnail" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        }else{
            return(
                <div></div>
            );
        }
    }

    renderComments(dish){
        if(dish!=null){
            let comments = dish.comments.slice();
            return (
                <div>
                    <h4>Comments</h4>
                    <ListGroup>
                    {comments.map((comment) => {
                    return (
                        <ListGroupItem className="border-0">
                            {comment.comment}<br />
                            --{comment.author}
                        </ListGroupItem>
                    );
                    })}
                    </ListGroup>
                </div>
            );
        }else{
            return (
                <div></div>
            );
        }
    }

    render(){
        return (
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    {this.renderDish(this.props.dish)}
                </div>
                <div className="col-12 col-md-5 m-1">
                    {this.renderComments(this.props.dish)}
                </div>
            </div>
        );
    }
}

export default DishDetail;
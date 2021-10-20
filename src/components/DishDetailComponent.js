import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, ListGroup, ListGroupItem, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

/*class DishDetail extends Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        console.log('1 Dishdetail Component componentDidMount invoked');
    }

    componentDidUpdate(){
        console.log('2 Dishdetail Component componentDidUpdate invoked')
    }*/
function RenderDish({ dish }) {
    if (dish != null) {
        return (
            <Card>
                <CardImg width="100%" className="img-fluid img-thumbnail" src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );
    } else {
        return (
            <div></div>
        );
    }
}

function RenderComments({ comments }) {
    if (comments != null) {
        return (
            <div>
                <h4>Comments</h4>
                <ListGroup>
                    {comments.map((comment) => {
                        return (
                            <ListGroupItem className="border-0">
                                {comment.comment}<br />
                                --{comment.author},{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}
                            </ListGroupItem>
                        );
                    })}
                </ListGroup>
            </div>
        );
    } else {
        return (
            <div></div>
        );
    }
}

const DishDetail = (props) => {
    //console.log('Dishdetail Component render invoked');
    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to={`/menu`}>Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>
                        {props.dish.name}
                    </BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{props.dish.name}</h3>
                    <hr />
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <RenderDish dish={props.dish} />
                </div>
                <div className="col-12 col-md-5 m-1">
                    <RenderComments comments={props.comments} />
                </div>
            </div>
        </div>
    );
}


export default DishDetail;
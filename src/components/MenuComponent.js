import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import DishDetail from './DishDetailComponent';
import { Link } from 'react-router-dom';

//class Menu extends Component {
/*constructor(props) {
    super(props);
    console.log('Menu Component constructor is invoked');
}*/

/*componentDidMount(){
    console.log('Menu Component componentDidMount is invoked');
}*/

/*renderDish(dish){
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
}*/

//render() {

function RenderMenuItem({ dish }) {
    return (
        <Card>
            {/*${dish.id} define what will be the match*/}
            <Link to={`/menu/${dish.id}`}>
                <CardImg width="100%" className="img-fluid img-thumbnail" src={dish.image} alt={dish.name} />
                <CardImgOverlay className="col-9">
                    <CardTitle>{dish.name}</CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>
    );
}

const Menu = (props) => {
    const menu = props.dishes.map((dish) => {
        return (
            /*<div key={dish.id} className="col-12 mt-5">
                <Media className="row" tag="">
                    {/*To see de bullets just add li to the tag/}
                    <Media className="col-2">
                        <Media className="img-fluid img-thumbnail" src={dish.image} alt={dish.name} />
                    </Media> 
                    <Media className="col-9">
                        <Media heading>{dish.name}</Media>
                        <p>{dish.description}</p>
                    </Media>
                </Media>
            </div>*/
            <div key={dish.id} className="col-12 col-md-5 mt-5">
                <RenderMenuItem dish={dish} />
            </div>
        );
    });

    //console.log('Menu Component render is invoked');

    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to={`/home`}>Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>
                        Menu
                    </BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Menu</h3>
                    <hr />
                </div>
            </div>
            <div className="row">
                {menu}
            </div>
            {/*<DishDetail dish={this.state.selectedDish} />*/}
            {/*<div className="row">
                {this.renderDish(this.state.selectedDish)}
            </div>*/}
        </div>
    );
}

//}
//}

export default Menu;
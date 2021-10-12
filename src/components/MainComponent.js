
import Menu from './MenuComponent';
import { DISHES } from '../shared/dishes';
import { Component } from 'react';
import DishDetail from './DishDetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';


class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dishes: DISHES,
            selectedDish: null
        };
    }


    onDishSelect(dishId) {
        this.setState({
            selectedDish: dishId
        });
    }
    render() {
        return (
            <div>
                <Header/>
                {/*<h2>It is {new Date().toLocaleTimeString()}.</h2>*/}
                <Menu dishes={this.state.dishes} 
                    onClick={(dishId) => this.onDishSelect(dishId)}/>
                <div className="container">
                <DishDetail 
                    dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]}/>
                <Footer/>
                </div>
            </div>
        )
    }
}

export default Main;

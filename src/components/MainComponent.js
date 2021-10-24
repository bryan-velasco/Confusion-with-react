
import Menu from './MenuComponent';
import Home from './HomeComponent';
import About from './AboutComponent';
import Contact from './ContactComponent';
import { Component } from 'react';
import DishDetail from './DishDetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = ReduxState => {
    return {
        dishes: ReduxState.dishes,
        comments: ReduxState.comments,
        promotions: ReduxState.promotions,
        leaders: ReduxState.leaders
    }
}



class Main extends Component {
    constructor(props) {
        super(props);

        //this.state = {
            
            //selectedDish: null
        //};
    }

    /*
    onDishSelect(dishId) {
        this.setState({
            selectedDish: dishId
        });
    }*/

    render() {
        const HomePage = () => {
            return(
                <Home dish={this.props.dishes.filter((dish) => dish.featured)[0]}
                promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
                leader={this.props.leaders.filter((leader) => leader.featured)[0]}
                />
            );
        }


        /*The three props are passed here, but we only take the match prop*/

        const DishWithId = ({match}) => {
            return(
                <DishDetail dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
                    comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}/>
            );
        }

        return (
            <div>
                <Header />
                {/*<h2>It is {new Date().toLocaleTimeString()}.</h2>*/}
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route path='/aboutus' component={() => <About leaders={this.props.leaders}/> } />
                    <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes} />} />
                    <Route path="/menu/:dishId" component={DishWithId} />
                    <Route exact path="/contactus" component={Contact} />
                    <Redirect to="/home" />
                </Switch>
                <Footer />
            </div>
        )
    }
}

export default withRouter(connect(mapStateToProps)(Main));

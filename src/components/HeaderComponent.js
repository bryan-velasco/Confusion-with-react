import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron, Nav
        ,Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input} from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isNavOpen: false,
            isModalOpen: false
        };

        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleLogin(event){
        this.toggleModal()
        alert("Username: "+this.username.value + ", Password: "+ this.password.value
            + ", Remember: "+ this.remember.checked);
        event.preventDefault();
    }

    render() {
        return (
            <>
                <Navbar dark expand='md'>
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/">
                            <img src="assets/images/logo.png" height="30" width="41" alt="Ristorante Con Fusion"></img>
                        </NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">
                                        <span className="fa fa-home fa-lg"></span>Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/aboutus">
                                        <span className="fa fa-info fa-lg"></span>About Us
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/menu">
                                        <span className="fa fa-list fa-lg"></span>Menu
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/contactus">
                                        <span className="fa fa-address-card fa-lg"></span>Contact Us
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <Nav className="ms-auto">
                                <NavItem>
                                    <Button outline onClick={this.toggleModal}>
                                        <span className="fa fa-sign-in fa-lg"></span>
                                    </Button>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                {/*<Jumbotron style={{backgroundColor: "LightGray"}}>*/}
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Ristorante Con Fusion</h1>
                                <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creation will tickle your culinary senses!</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    {/*the toggle before help us to close the modal when we click outside it*/}
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username"
                                    innerRef={(input) => this.username = input}/>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">password</Label>
                                <Input type="password" id="password" name="password"
                                    innerRef={(input) => this.password = input}/>
                            </FormGroup>
                            <FormGroup check>
                                    <Label check>
                                        <Input type="checkbox" name="remember" 
                                            innerRef={(input) => this.remember = input}/>
                                        {/*innerRef will take the current created or modified dom of the child component (<Input>) an store it in the parent component <the current component>*/}
                                        Remember me
                                    </Label>
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Login</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </>
        );
    }
}

export default Header;
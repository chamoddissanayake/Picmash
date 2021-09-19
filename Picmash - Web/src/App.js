import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from "./components/home";
import Login from "./components/login";
import Register from "./components/register";
import Sell from "./components/sell";
import Footer from "./components/footer";
import Results from "./components/results";
import logo_image from '../src/assets/images/logo-new.png'
import Browse from "./components/browse";
import Contact from "./components/contact";
import AboutUs from "./components/about";
import './css/general.css';
import AuthService from "../src/services/auth.service";


import React, {Component} from 'react';
// import '../css/about.css';

export default class App extends Component {

    constructor() {
        super();
        this.state = {
            is_loggedIn: false,
            logged_in_user_type: '',
            logged_in_user: {}
        };
    }

    componentDidMount() {
        const currentUser = AuthService.getCurrentUser();
        if (currentUser === null) {
            this.setState({is_loggedIn: false});
        } else {
            this.setState({
                is_loggedIn: true,
                logged_in_user_type: currentUser.type,
                logged_in_user: JSON.parse(currentUser.user)
            });
        }

    }

    handleLogoutPressed() {
        AuthService.logout()
    }

    render() {
        return (
            <Router>

                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <a href="/">
                            <img src={logo_image} alt="Logo" className="top-logo"/>
                        </a>

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link" href="/browse">Browse Items</a>
                                </li>
                                <li></li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/sell">Sell My Items</a>
                                </li>
                                <li></li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/contact">Contact Us</a>
                                </li>
                                <li></li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/about">About Us</a>
                                </li>


                            </ul>

                            {this.state.is_loggedIn === false && <div>
                                <a href="/login">
                                    <button className="btn btn-outline-primary" type="submit">Login</button>
                                </a>
                            </div>}

                            <div style={{width: "10px"}}></div>
                            {this.state.is_loggedIn === false && <div>
                                <a href="/register">
                                    <button className="btn btn-outline-warning" type="submit">Register</button>
                                </a>
                            </div>}

                            {this.state.is_loggedIn === true && (this.state.logged_in_user_type === 'general' ||
                                this.state.logged_in_user_type === 'google') &&
                            <div style={{width: "10px"}}></div>}


                            {this.state.is_loggedIn === true && (this.state.logged_in_user_type === 'google') && <div>
                                <img src={this.state.logged_in_user.profileObj.imageUrl} alt="User" width="50" height="50"/>
                            </div>}

                            {this.state.is_loggedIn === true && (this.state.logged_in_user_type === 'google') && <div>
                                <div style={{width: "10px"}}></div>
                            </div>}

                            {this.state.is_loggedIn === true && (this.state.logged_in_user_type === 'google') && <div>
                                <button className="btn btn-light"
                                        type="submit">Hi, {this.state.logged_in_user.profileObj.givenName}</button>
                            </div>}

                            {this.state.is_loggedIn === true && (this.state.logged_in_user_type === 'general') && <div>
                                <button className="btn btn-light"
                                        type="submit">Hi, {this.state.logged_in_user.username}</button>
                            </div>}


                            {this.state.is_loggedIn === true && this.state.logged_in_user_type === 'general' &&
                            <div style={{width: "10px"}}></div>}

                            {this.state.is_loggedIn === true && (this.state.logged_in_user_type === 'general' ||
                                this.state.logged_in_user_type === 'google') && <div>
                                <a href="/">
                                    <button className="btn btn btn-link" type="submit"
                                            onClick={() => this.handleLogoutPressed()}>Logout
                                    </button>
                                </a>
                            </div>}


                        </div>
                    </div>
                </nav>


                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route path="/login">
                        <Login/>
                    </Route>
                    <Route path="/register">
                        <Register/>
                    </Route>
                    <Route path="/sell">
                        <Sell/>
                    </Route>
                    <Route path="/results">
                        <Results/>
                    </Route>
                    <Route path="/browse">
                        <Browse/>
                    </Route>
                    <Route path="/contact">
                        <Contact/>
                    </Route>
                    <Route path="/about">
                        <AboutUs/>
                    </Route>

                </Switch>

                <Footer/>
            </Router>
        )
    }
}

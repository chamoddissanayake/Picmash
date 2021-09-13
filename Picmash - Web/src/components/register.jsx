import React, {Component} from 'react';
import '../css/login.css';
import '../css/util.css';
import fb_button from '../assets/images/buttons/facebook.png'
import google_btn from '../assets/images/buttons/google.png'
import linkedin_btn from '../assets/images/buttons/linkedin.png'
import register_bg from '../assets/images/register-bg.jpg'
import AuthService from "../services/auth.service";
import {  Redirect, Link } from 'react-router-dom';

export default class Register extends Component {

    constructor() {
        super();
        this.state = {
            reg_username_txt: '',
            reg_email_txt: '',
            reg_password_txt: '',

            message: '',
            is_registered: false
        };

        this.handleChangeRegUsername = this.handleChangeRegUsername.bind(this);
        this.handleChangeRegEmail = this.handleChangeRegEmail.bind(this);
        this.handleChangeRegPassword = this.handleChangeRegPassword.bind(this);
    }

    componentDidMount() {
    }

    handleChangeRegUsername(event) {
        console.log(event.target.value)
        this.setState({reg_username_txt: event.target.value});
    }

    handleChangeRegEmail(event) {
        console.log(event.target.value)
        this.setState({reg_email_txt: event.target.value});
    }

    handleChangeRegPassword(event) {
        console.log(event.target.value)
        this.setState({reg_password_txt: event.target.value});
    }

    handleRegFormSubmit() {
        if (!this.validateInputs()) {
            return
        }

        this.saveUser();
    }

    saveUser() {
        AuthService.register(
            this.state.reg_username_txt,
            this.state.reg_email_txt,
            this.state.reg_password_txt
        ).then(
            response => {
                this.setState({
                   message: response.data.message,
                   is_registered: true
                }, () => {
                    alert("User registered successfully. Please login")
                    window.location.href = "/login";
                });
            },
            error => {
                const resMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();

                this.setState({
                    is_registered: false,
                    message: resMessage
                }, () => {
                    alert(this.state.message)
                    window.location.href = "/register";
                });

            }
        );
    }

    validateInputs() {

        if (this.state.reg_email_txt == "" || this.state.reg_username_txt == "" || this.state.reg_password_txt == "") {
            alert("Please fill all fields")
            return false
        }

        if (this.state.reg_password_txt.length < 6) {
            alert("Password should be longer than 6 characters.")
            return false
        }

        const emailRegex = /\S+@\S+\.\S+/;
        if (emailRegex.test(this.state.reg_email_txt)) {
            return true
        } else {
            alert("Incorrect email address")
            return false
        }
    }

    render() {
        return (
            <div>
                <div className="limiter">
                    <div className="container-login100">
                        <div className="wrap-login100">
                            <div className="login100-form validate-form">
                                <span className="login100-form-title p-b-5">
                                    <h2>Register</h2>
                                </span>

                                <div className="mb-0">
                                    <label htmlFor="exampleInputEmail1" className="reg-form-label">Username</label>
                                    <input type="text" className="form-control"
                                           aria-describedby="emailHelp" onChange={this.handleChangeRegUsername}/>
                                </div>

                                <div className="mb-0">
                                    <label htmlFor="exampleInputEmail1" className="reg-form-label">Email address</label>
                                    <input type="email" className="form-control"
                                           aria-describedby="emailHelp" onChange={this.handleChangeRegEmail}/>
                                </div>
                                <div className="mb-0">
                                    <label htmlFor="exampleInputPassword1" className="reg-form-label">Password</label>
                                    <input type="password" className="form-control"
                                           onChange={this.handleChangeRegPassword}/>
                                </div>
                                <div className="flex-sb-m w-full p-t-3 p-b-32">
                                    <div className="contact100-form-checkbox">
                                        <input className="input-checkbox100" id="ckb1" type="checkbox"
                                               name="remember-me"/>
                                        <label className="label-checkbox100" htmlFor="ckb1">
                                            Remember me
                                        </label>
                                    </div>

                                    <div>
                                        <a href="" className="txt1">
                                            Forgot Password?
                                        </a>
                                    </div>
                                </div>
                                <div className="redirect-login-register">
                                    <span className="txt2">
                                        Do You have an account? <a href="/login">Login </a>now
                                    </span>
                                </div>

                                <div className="container-login100-form-btn">
                                    <button className="login100-form-btn" onClick={() => this.handleRegFormSubmit()}>
                                        Register
                                    </button>
                                </div>


                                <div className="text-center p-t-46 p-b-20 temp-upper-padding">

                                    <span className="txt2">
                                        or sign up using
                                    </span>

                                </div>
                                <div className="social-btn-container">
                                    <div>
                                        <img src={fb_button} className="social-btn-common" alt="Sign with Facebook"/>
                                    </div>
                                    <div>
                                        <img src={google_btn} className="social-btn-common" alt="Sign with Google"/>
                                    </div>
                                    <div>
                                        <img src={linkedin_btn} className="social-btn-common" alt="Sign with Linkedin"/>
                                    </div>
                                </div>

                            </div>

                            <img className="login100-more" src={register_bg} alt="Login Image"/>

                            {/*<div className="login100-more" style={{*/}
                            {/*    backgroundImage: `url("https://images.pexels.com/photos/2769188/pexels-photo-2769188.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")`*/}
                            {/*}}>*/}


                            {/*    /!*<img src={require('/images/image-name.png')} />*!/*/}

                            {/*</div>*/}

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

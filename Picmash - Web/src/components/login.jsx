import React, {Component} from 'react';
import '../css/login.css';
import '../css/util.css';
import fb_button from '../assets/images/buttons/facebook.png'
import google_btn from '../assets/images/buttons/google.png'
import linkedin_btn from '../assets/images/buttons/linkedin.png'

import login_bg from '../assets/images/login-bg.jpg'
import AuthService from "../services/auth.service";

export default class Login extends Component {

    constructor() {
        super();
        this.state = {
            log_username_txt: '',
            log_password_txt: '',

            message: '',
        };
        this.handleChangeLogUsername = this.handleChangeLogUsername.bind(this);
        this.handleChangeLogPassword = this.handleChangeLogPassword.bind(this);
    }

    handleChangeLogUsername(event) {
        this.setState({log_username_txt: event.target.value});
    }

    handleChangeLogPassword(event) {
        this.setState({log_password_txt: event.target.value});
    }

    handleLoginFormSubmit() {
        console.log(this.state.log_username_txt)
        console.log(this.state.log_password_txt)
        if (!this.validateInputs()) {
            console.log(5)
            return
        }
        console.log("%%%%")
        this.loginUser();
    }

    loginUser() {
        AuthService.login(this.state.log_username_txt, this.state.log_password_txt).then(
            () => {
                alert('logged in successfully')
                window.location.href = "/";
            },
            error => {
                const resMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();


                this.setState({
                    message: resMessage
                }, () => {
                    alert(this.state.message)
                });

            }
        );
    }

    validateInputs() {
        console.log(1)
        if (this.state.log_username_txt == "" || this.state.log_password_txt == "") {
            alert("Please fill all fields")
            console.log(2)
            return false
        }
        console.log(3)
        if (this.state.log_password_txt.length < 6) {
            alert("Password should be longer than 6 characters.")
            console.log(4)
            return false
        }
        return true
    }

    componentDidMount() {

    }

    render() {
        return (
            <div>
                <div className="limiter">
                    <div className="container-login100">
                        <div className="wrap-login100">
                            <div className="login100-form validate-form">
					<span className="login100-form-title p-b-35">
                        <h2>Login to continue</h2>
					</span>

                                <div className="mb-0">
                                    <label htmlFor="exampleInputEmail1" className="reg-form-label">Username</label>
                                    <input type="text" className="form-control" id="exampleInputEmail1"
                                           aria-describedby="emailHelp" onChange={this.handleChangeLogUsername}/>
                                </div>

                                <div className="mb-0">
                                    <label htmlFor="exampleInputPassword1" className="reg-form-label">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1"
                                           onChange={this.handleChangeLogPassword}/>
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
                                        Don't You have an account? <a href="/register">Register </a>now
                                    </span>
                                </div>


                                <div className="container-login100-form-btn">
                                    <button className="login100-form-btn" onClick={() => this.handleLoginFormSubmit()}>
                                        Login
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

                            <img className="login100-more" src={login_bg} alt="Login Image"/>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

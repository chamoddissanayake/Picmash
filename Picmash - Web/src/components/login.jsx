import React, {Component} from 'react';
import '../css/login.css';
import '../css/util.css';

import login_bg from '../assets/images/login-bg.jpg'
import AuthService from "../services/auth.service";
import GoogleLogin from 'react-google-login';
import * as constants from '../constants';

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
                window.location.href = "/";
            },
            error => {
                const resMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();

                if (error.response.status === 401) {
                    alert("username or password incorrect")
                }

                this.setState({
                    message: resMessage
                }, () => {
                    window.location.href = "/login";
                });

            }
        );
    }

    validateInputs() {
        if (this.state.log_username_txt === "" || this.state.log_password_txt === "") {
            alert("Please fill all fields")
            return false
        }
        if (this.state.log_password_txt.length < 6) {
            alert("Password should be longer than 6 characters.")
            return false
        }
        return true
    }

    componentDidMount() {}

    responseGoogleSuccess(response) {

        localStorage.setItem("user", JSON.stringify(response));
        localStorage.setItem("type", "google");
        window.location.href = "/";

    }
    responseGoogleFailure(response) {
        if (response.error !== 'popup_closed_by_user'){
            alert("Something went wrong")
        }
        window.location.href = "/login";
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

                                    <div className="google-div-aaa">
                                        {/*TODO:*/}
                                        {/*<img src={google_btn} className="social-btn-common" alt="Sign with Google"/>*/}
                                        <GoogleLogin
                                            // clientId="801360513499-u7sc20pvp4nkkigtgvnnaajp4hcq4ate.apps.googleusercontent.com"
                                            clientId={constants.CLIENT_ID}
                                            buttonText="Login"
                                            onSuccess={this.responseGoogleSuccess}
                                            onFailure={this.responseGoogleFailure}
                                            cookiePolicy={'single_host_origin'}
                                        />

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

import React, {Component} from 'react';
import '../css/login.css';
import '../css/util.css';
import fb_button from '../assets/images/buttons/facebook.png'
import google_btn from '../assets/images/buttons/google.png'
import linkedin_btn from '../assets/images/buttons/linkedin.png'

export default class Register extends Component {

    constructor() {
        super();
    }

    componentDidMount() {

    }

    render() {
        return (
            <div>
                <div className="limiter">
                    <div className="container-login100">
                        <div className="wrap-login100">
                            <form className="login100-form validate-form">
					<span className="login100-form-title p-b-43">
						Register
					</span>


                                <div className="wrap-input100 validate-input"
                                     data-validate="Valid email is required: ex@abc.xyz">
                                    <input className="input100" type="text" name="email"/>
                                    <span className="focus-input100"></span>
                                    <span className="label-input100">Email</span>
                                </div>


                                <div className="wrap-input100 validate-input" data-validate="Password is required">
                                    <input className="input100" type="password" name="pass"/>
                                    <span className="focus-input100"></span>
                                    <span className="label-input100">Password</span>
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
                                        <a href="#" className="txt1">
                                            Forgot Password?
                                        </a>
                                    </div>
                                </div>
                                <div className= "redirect-login-register">
                                    <span className="txt2">
                                        Do You have an account? <a href="/login">Login </a>now
                                    </span>
                                </div>

                                <div className="container-login100-form-btn">
                                    <button className="login100-form-btn">
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

                            </form>

                            <div className="login100-more" style={{
                                backgroundImage: `url("https://images.pexels.com/photos/2769188/pexels-photo-2769188.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")`
                            }}>


                                {/*<img src={require('/images/image-name.png')} />*/}

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

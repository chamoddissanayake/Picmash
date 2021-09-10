import React, {Component} from 'react';
import '../css/sell.css';
import '../css/util.css';
import sell_bg from '../assets/images/sell-bg.jpg'

export default class Sell extends Component {

    constructor() {
        super();
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="container-contact100">
                {/*<div className="contact100-map" style={{*/}
                {/*    backgroundImage: `url("https://firebasestorage.googleapis.com/v0/b/projects-storage-8af30.appspot.com/o/ssd%2Fsell-bg.jpg?alt=media&token=9a94ae01-dc0b-44f9-8d2e-8c1474063017")`*/}
                {/*}}></div>*/}
                <img className="contact100-map" src={sell_bg} />

                <div className="wrap-contact100">
                    <div className="contact100-form-title" style={{
                        backgroundImage: `url("https://images.pexels.com/photos/442573/pexels-photo-442573.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")`
                    }}>
				<span className="contact100-form-title-1">
					Sell Your Photos & Videos
				</span>

                        <span className="contact100-form-title-2">
					Earn extra money with Picmas
				</span>
                    </div>

                    <form className="contact100-form validate-form">
                        <div className="wrap-input100 validate-input" data-validate="Name is required">
                            <span className="label-input100">Full Name:</span>
                            <input className="input100" type="text" name="name" placeholder="Enter full name"/>
                            <span className="focus-input100"></span>
                        </div>

                        <div className="wrap-input100 validate-input"
                             data-validate="Valid email is required: ex@abc.xyz">
                            <span className="label-input100">Email:</span>
                            <input className="input100" type="text" name="email" placeholder="Enter email addess"/>
                            <span className="focus-input100"></span>
                        </div>

                        <div className="wrap-input100 validate-input" data-validate="Phone is required">
                            <span className="label-input100">Phone:</span>
                            <input className="input100" type="text" name="phone" placeholder="Enter phone number"/>
                            <span className="focus-input100"></span>
                        </div>

                        <div className="wrap-input100 validate-input" data-validate="Message is required">
                            <span className="label-input100">Message:</span>
                            <textarea className="input100" name="message" placeholder="Your Comment..."></textarea>
                            <span className="focus-input100"></span>
                        </div>

                        <div className="container-contact100-form-btn">
                            <button className="contact100-form-btn">
						<span>
							Submit
							<i className="fa fa-long-arrow-right m-l-7" aria-hidden="true"></i>
						</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

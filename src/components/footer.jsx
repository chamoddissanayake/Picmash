import React, {Component} from 'react';
import '../css/footer.css';
import logo_image from '../assets/images/logo-new.png'
import '../css/general.css';

export default class Footer extends Component {

    constructor() {
        super();
    }

    componentDidMount() {

    }

    render() {
        return (
            <div>
                <footer className="footer-06">
                    <div className="container">
                        <div className="row align-items-center align-items-stretch mb-5">
                            <div className="col-md-4 py-4 py-md-5 aside-stretch d-flex align-items-center">
                                <div className="w-100">
                                    <span className="subheading">Subscribe to our</span>
                                    <h3 className="heading-section">Newsletter</h3>
                                </div>
                            </div>
                            <div
                                className="col-md-8 py-4 py-md-5 d-flex align-items-center pl-md-5 aside-stretch-right">
                                <div className="subscribe-form w-100">
                                    <div className="form-group d-flex">
                                        <input type="text" className="form-control rounded-left"
                                               placeholder="Enter email address"/>
                                        <button  className="form-control submit"><span>Submit</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row pt-4">
                            <div className="col-md-3 col-lg-6 order-md-last">
                                <div className="row justify-content-end">
                                    <div className="col-md-12 col-lg-9 text-md-right mb-md-0 mb-4">
                                        {/*<h2 className="footer-heading"><a href="#" className="logo">Colorlib</a></h2>*/}
                                        <img src={logo_image} alt="Logo" height={50}/>
                                        <p className="copyright">
                                            Copyright &copy; All rights reserved | Picmas - 2021
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-9 col-lg-6">
                                <div className="row">
                                    <div className="col-md-4 mb-md-0 mb-4">
                                        <h2 className="footer-heading">Links</h2>
                                        <ul className="list-unstyled">
                                            <li><a href="#" className="py-1 d-block"><span
                                                className="ion-ios-checkmark-circle-outline mr-2"></span>Home</a>
                                            </li>
                                            <li><a href="#" className="py-1 d-block"><span
                                                className="ion-ios-checkmark-circle-outline mr-2"></span>Browse
                                                Items</a></li>
                                            <li><a href="#" className="py-1 d-block"><span
                                                className="ion-ios-checkmark-circle-outline mr-2"></span>Sell My
                                                Items</a>
                                            </li>
                                            <li><a href="#" className="py-1 d-block"><span
                                                className="ion-ios-checkmark-circle-outline mr-2"></span>Contact Us</a>
                                            </li>
                                            <li><a href="#" className="py-1 d-block"><span
                                                className="ion-ios-checkmark-circle-outline mr-2"></span>About Us</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-md-8 mb-md-0 mb-4">
                                        <div className="footer-justify">
                                            <p>Picmash provides high quality and completely free stock photos licensed under
                                                the Picmash license. All photos are nicely tagged, searchable and also easy
                                                to discover through our discover pages.We have hundreds of thousands free
                                                stock photos and every day new high resolution photos will be added.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}

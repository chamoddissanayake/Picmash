import React, { Component } from 'react';
import '../css/contact.css';

export default class Contact extends Component {

    constructor() {
        super();
    }

    componentDidMount() {

    }

    render() {
        return (
            <div>

                <section className="ftco-section img bg-hero"
                         style={{"background-image": "url(https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500)"}} >
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-6 text-center mb-5">
                                <h2 className="heading-section">Contact Us 24/7</h2>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-lg-11">
                                <div className="wrapper">
                                    <div className="row no-gutters justify-content-between">
                                        <div className="col-lg-6 d-flex align-items-stretch">
                                            <div className="info-wrap w-100 p-5">
                                                <h3 className="mb-4">Contact us</h3>
                                                <div className="dbox w-100 d-flex align-items-start">
                                                    <div
                                                        className="icon d-flex align-items-center justify-content-center">
                                                        <span className="fa fa-map-marker"></span>
                                                    </div>
                                                    <div className="text pl-4">
                                                        <p><span>Address:</span> No.1 Galle Road, Colombo</p>
                                                    </div>
                                                </div>
                                                <div className="dbox w-100 d-flex align-items-start">
                                                    <div
                                                        className="icon d-flex align-items-center justify-content-center">
                                                        <span className="fa fa-phone"></span>
                                                    </div>
                                                    <div className="text pl-4">
                                                        <p><span>Phone:</span> 0111234567</p>
                                                    </div>
                                                </div>
                                                <div className="dbox w-100 d-flex align-items-start">
                                                    <div
                                                        className="icon d-flex align-items-center justify-content-center">
                                                        <span className="fa fa-paper-plane"></span>
                                                    </div>
                                                    <div className="text pl-4">
                                                        <p><span>Email:</span> info@picmas.com</p>
                                                    </div>
                                                </div>
                                                <div className="dbox w-100 d-flex align-items-start">
                                                    <div
                                                        className="icon d-flex align-items-center justify-content-center">
                                                        <span className="fa fa-globe"></span>
                                                    </div>
                                                    <div className="text pl-4">
                                                        <p><span>Website</span> <a href="/">picmas.com</a></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-5">
                                            <div className="contact-wrap w-100 p-md-5 p-4">
                                                <h3 className="mb-4">Get in touch</h3>
                                                <div id="form-message-warning" className="mb-4"></div>
                                                <div id="form-message-success" className="mb-4">
                                                    Your message was sent, thank you!
                                                </div>
                                                <form method="POST" id="contactForm" name="contactForm">
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <div className="form-group">
                                                                <input type="text" className="form-control" name="name"
                                                                       id="name" placeholder="Name"/>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <div className="form-group">
                                                                <input type="email" className="form-control"
                                                                       name="email" id="email" placeholder="Email"/>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <div className="form-group">
                                                                <input type="text" className="form-control"
                                                                       name="subject" id="subject"
                                                                       placeholder="Subject"/>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <div className="form-group">
                                                                <textarea name="message" className="form-control"
                                                                          id="message" cols="30" rows="5"
                                                                          placeholder="Message"></textarea>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <div className="form-group">
                                                                <input type="submit" value="Send Message"
                                                                       className="btn btn-primary"/>
                                                                    <div className="submitting"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

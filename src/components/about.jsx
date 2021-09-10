import React, {Component} from 'react';
import '../css/about.css';

export default class AboutUs extends Component {

    constructor() {
        super();
    }

    componentDidMount() {

    }

    render() {
        return (
            <div>
                <section className="about-section">
                    <div className="container">
                        <div className="row">
                            <div className="content-column col-lg-6 col-md-12 col-sm-12 order-2">
                                <div className="inner-column">
                                    <div className="sec-title">
                                        <span className="title">About Company</span>
                                        <h2>We are leader in <br/>Industrial market Since 1992</h2>
                                    </div>
                                    <div className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                                        do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                        cillum dolore eu fugiat nulla pariatur.
                                    </div>
                                    <ul className="list-style-one">

                                        <table>
                                            <tr>
                                                <th> <img src="https://cdn-icons-png.flaticon.com/512/1355/1355667.png" alt="*" width="30" height="30"/> </th>
                                                <th>Lorem Ipsum is simply dummy tex</th>
                                            </tr>
                                            <tr>
                                                <td><img src="https://cdn-icons-png.flaticon.com/512/1355/1355667.png" alt="*" width="30" height="30"/></td>
                                                <td>Consectetur adipisicing elit</td>
                                            </tr>
                                            <tr>
                                                <td><img src="https://cdn-icons-png.flaticon.com/512/1355/1355667.png" alt="*" width="30" height="30"/></td>
                                                <td>Sed do eiusmod tempor incididunt</td>
                                            </tr>
                                        </table>




                                    </ul>
                                    <div className="btn-box">
                                        <a href="/contact" className="theme-btn btn-style-one">Contact Us</a>
                                    </div>
                                </div>
                            </div>

                            <div className="image-column col-lg-6 col-md-12 col-sm-12">
                                <div className="inner-column wow fadeInLeft">
                                    <figure className="image-1">
                                        <a className="lightbox-image"
                                           data-fancybox="images">
                                            <img src="https://images.pexels.com/photos/821749/pexels-photo-821749.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt=""/></a></figure>
                                    <figure className="image-2"><a className="lightbox-image"
                                                                   data-fancybox="images"><img
                                        src="https://images.pexels.com/photos/167832/pexels-photo-167832.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" width="80%" alt=""/></a></figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

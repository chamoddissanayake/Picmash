import React, {Component} from 'react';
import {IMAGE_DATA} from '../data/image_data'
import {VIDEO_DATA} from '../data/video_data'


export default class Browse extends Component {

    constructor() {
        super();
    }

    componentDidMount() {
        console.log("%%")
        console.log(IMAGE_DATA)
        console.log("**")
        console.log(VIDEO_DATA)
        console.log("--")
    }

    render() {
        return (
            <div>
                {/*Photo Section start*/}
                <div id="cards_landscape_wrap-2">
                    <div className="container">
                        <h2 className="card-grid-title">All Photos</h2>
                        <div className="row">


                            {IMAGE_DATA.map((image, index) => (
                                <div key={index} className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                                    <div className="card-flyer">
                                        <div className="text-box">
                                            <div className="image-box">
                                                <img
                                                    src={image.link}
                                                    alt=""/>
                                            </div>
                                            <div className="text-container">
                                                <h6>{image.title}</h6>
                                                <p className="justify-card">{image.description}</p>
                                            </div>
                                            <div className="card-bottom-div">
                                                <p className="price-font"
                                                   style={{"fontSize": "20px"}}>$ {image.price}</p>
                                                <button type="button" className="btn btn-primary">Try for Free Now
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
                {/*Photo Section end*/}


                {/*Photo Section start*/}
                <div id="cards_landscape_wrap-2">
                    <div className="container">
                        <h2 className="card-grid-title">All Videos</h2>
                        <div className="row">

                            {VIDEO_DATA.map((video, index) => (
                                <div key={index} className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                                    <div className="card-flyer">
                                        <div className="text-box">
                                            <div className="image-box">
                                                <div style={{height: "150px"}}>
                                                    <video height={"150px"} controls="controls" preload="metadata">
                                                        <source src={video.link + "#t=0.5"} type="video/mp4"/>
                                                    </video>
                                                </div>
                                            </div>
                                            <div className="text-container">
                                                <h6>{video.title}</h6>
                                                <p className="justify-card">{video.description}</p>
                                            </div>
                                            <div className="card-bottom-div">
                                                <p className="price-font"
                                                   style={{"fontSize": "20px"}}>$ {video.price}</p>
                                                <button type="button" className="btn btn-primary">Try for Free Now
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            {/*<div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">*/}
                            {/*    <a href="">*/}
                            {/*        <div className="card-flyer">*/}
                            {/*            <div className="text-box">*/}
                            {/*                <div className="image-box">*/}
                            {/*                    <img*/}
                            {/*                        src="https://cdn.pixabay.com/photo/2018/03/30/15/11/deer-3275594_960_720.jpg"*/}
                            {/*                        alt=""/>*/}
                            {/*                </div>*/}
                            {/*                <div className="text-container">*/}
                            {/*                    <h6>Title 01AA</h6>*/}
                            {/*                    <p className="justify-card">Lorem Ipsum is simply dummy text of the*/}
                            {/*                        printing and typesetting*/}
                            {/*                        industry. Lorem Ipsum has been the industry's standard dummy text*/}
                            {/*                        ever since the 1500s.</p>*/}
                            {/*                </div>*/}
                            {/*                <div className="card-bottom-div">*/}
                            {/*                    <p className="price-font" style={{"fontSize": "20px"}}>$ 10.00</p>*/}
                            {/*                    <button type="button" className="btn btn-primary">Try for Free Now*/}
                            {/*                    </button>*/}
                            {/*                </div>*/}
                            {/*            </div>*/}
                            {/*        </div>*/}
                            {/*    </a>*/}
                            {/*</div>*/}

                            {/*<div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">*/}
                            {/*    <a href="">*/}
                            {/*        <div className="card-flyer">*/}
                            {/*            <div className="text-box">*/}
                            {/*                <div className="image-box">*/}
                            {/*                    <img*/}
                            {/*                        src="https://cdn.pixabay.com/photo/2018/03/30/15/11/deer-3275594_960_720.jpg"*/}
                            {/*                        alt=""/>*/}
                            {/*                </div>*/}
                            {/*                <div className="text-container">*/}
                            {/*                    <h6>Title 01AA</h6>*/}
                            {/*                    <p className="justify-card">Lorem Ipsum is simply dummy text of the*/}
                            {/*                        printing and typesetting*/}
                            {/*                        industry. Lorem Ipsum has been the industry's standard dummy text*/}
                            {/*                        ever since the 1500s.</p>*/}
                            {/*                </div>*/}
                            {/*                <div className="card-bottom-div">*/}
                            {/*                    <p className="price-font" style={{"fontSize": "20px"}}>$ 10.00</p>*/}
                            {/*                    <button type="button" className="btn btn-primary">Try for Free Now*/}
                            {/*                    </button>*/}
                            {/*                </div>*/}
                            {/*            </div>*/}
                            {/*        </div>*/}
                            {/*    </a>*/}
                            {/*</div>*/}

                            {/*<div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">*/}
                            {/*    <a href="">*/}
                            {/*        <div className="card-flyer">*/}
                            {/*            <div className="text-box">*/}
                            {/*                <div className="image-box">*/}
                            {/*                    <img*/}
                            {/*                        src="https://cdn.pixabay.com/photo/2018/03/30/15/11/deer-3275594_960_720.jpg"*/}
                            {/*                        alt=""/>*/}
                            {/*                </div>*/}
                            {/*                <div className="text-container">*/}
                            {/*                    <h6>Title 01AA</h6>*/}
                            {/*                    <p className="justify-card">Lorem Ipsum is simply dummy text of the*/}
                            {/*                        printing and typesetting*/}
                            {/*                        industry. Lorem Ipsum has been the industry's standard dummy text*/}
                            {/*                        ever since the 1500s.</p>*/}
                            {/*                </div>*/}
                            {/*                <div className="card-bottom-div">*/}
                            {/*                    <p className="price-font" style={{"fontSize": "20px"}}>$ 10.00</p>*/}
                            {/*                    <button type="button" className="btn btn-primary">Try for Free Now*/}
                            {/*                    </button>*/}
                            {/*                </div>*/}
                            {/*            </div>*/}
                            {/*        </div>*/}
                            {/*    </a>*/}
                            {/*</div>*/}

                            {/*<div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">*/}
                            {/*    <a href="">*/}
                            {/*        <div className="card-flyer">*/}
                            {/*            <div className="text-box">*/}
                            {/*                <div className="image-box">*/}
                            {/*                    <img*/}
                            {/*                        src="https://cdn.pixabay.com/photo/2018/03/30/15/11/deer-3275594_960_720.jpg"*/}
                            {/*                        alt=""/>*/}
                            {/*                </div>*/}
                            {/*                <div className="text-container">*/}
                            {/*                    <h6>Title 01AA</h6>*/}
                            {/*                    <p className="justify-card">Lorem Ipsum is simply dummy text of the*/}
                            {/*                        printing and typesetting*/}
                            {/*                        industry. Lorem Ipsum has been the industry's standard dummy text*/}
                            {/*                        ever since the 1500s.</p>*/}
                            {/*                </div>*/}
                            {/*                <div className="card-bottom-div">*/}
                            {/*                    <p className="price-font" style={{"fontSize": "20px"}}>$ 10.00</p>*/}
                            {/*                    <button type="button" className="btn btn-primary">Try for Free Now*/}
                            {/*                    </button>*/}
                            {/*                </div>*/}
                            {/*            </div>*/}
                            {/*        </div>*/}
                            {/*    </a>*/}
                            {/*</div>*/}

                            {/*<div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">*/}
                            {/*    <a href="">*/}
                            {/*        <div className="card-flyer">*/}
                            {/*            <div className="text-box">*/}
                            {/*                <div className="image-box">*/}
                            {/*                    <img*/}
                            {/*                        src="https://cdn.pixabay.com/photo/2018/03/30/15/11/deer-3275594_960_720.jpg"*/}
                            {/*                        alt=""/>*/}
                            {/*                </div>*/}
                            {/*                <div className="text-container">*/}
                            {/*                    <h6>Title 01AA</h6>*/}
                            {/*                    <p className="justify-card">Lorem Ipsum is simply dummy text of the*/}
                            {/*                        printing and typesetting*/}
                            {/*                        industry. Lorem Ipsum has been the industry's standard dummy text*/}
                            {/*                        ever since the 1500s.</p>*/}
                            {/*                </div>*/}
                            {/*                <div className="card-bottom-div">*/}
                            {/*                    <p className="price-font" style={{"fontSize": "20px"}}>$ 10.00</p>*/}
                            {/*                    <button type="button" className="btn btn-primary">Try for Free Now*/}
                            {/*                    </button>*/}
                            {/*                </div>*/}
                            {/*            </div>*/}
                            {/*        </div>*/}
                            {/*    </a>*/}
                            {/*</div>*/}

                            {/*<div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">*/}
                            {/*    <a href="">*/}
                            {/*        <div className="card-flyer">*/}
                            {/*            <div className="text-box">*/}
                            {/*                <div className="image-box">*/}
                            {/*                    <img*/}
                            {/*                        src="https://cdn.pixabay.com/photo/2018/03/30/15/11/deer-3275594_960_720.jpg"*/}
                            {/*                        alt=""/>*/}
                            {/*                </div>*/}
                            {/*                <div className="text-container">*/}
                            {/*                    <h6>Title 01AA</h6>*/}
                            {/*                    <p className="justify-card">Lorem Ipsum is simply dummy text of the*/}
                            {/*                        printing and typesetting*/}
                            {/*                        industry. Lorem Ipsum has been the industry's standard dummy text*/}
                            {/*                        ever since the 1500s.</p>*/}
                            {/*                </div>*/}
                            {/*                <div className="card-bottom-div">*/}
                            {/*                    <p className="price-font" style={{"fontSize": "20px"}}>$ 10.00</p>*/}
                            {/*                    <button type="button" className="btn btn-primary">Try for Free Now*/}
                            {/*                    </button>*/}
                            {/*                </div>*/}
                            {/*            </div>*/}
                            {/*        </div>*/}
                            {/*    </a>*/}
                            {/*</div>*/}

                            {/*<div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">*/}
                            {/*    <a href="">*/}
                            {/*        <div className="card-flyer">*/}
                            {/*            <div className="text-box">*/}
                            {/*                <div className="image-box">*/}
                            {/*                    <img*/}
                            {/*                        src="https://cdn.pixabay.com/photo/2018/03/30/15/11/deer-3275594_960_720.jpg"*/}
                            {/*                        alt=""/>*/}
                            {/*                </div>*/}
                            {/*                <div className="text-container">*/}
                            {/*                    <h6>Title 01AA</h6>*/}
                            {/*                    <p className="justify-card">Lorem Ipsum is simply dummy text of the*/}
                            {/*                        printing and typesetting*/}
                            {/*                        industry. Lorem Ipsum has been the industry's standard dummy text*/}
                            {/*                        ever since the 1500s.</p>*/}
                            {/*                </div>*/}
                            {/*                <div className="card-bottom-div">*/}
                            {/*                    <p className="price-font" style={{"fontSize": "20px"}}>$ 10.00</p>*/}
                            {/*                    <button type="button" className="btn btn-primary">Try for Free Now*/}
                            {/*                    </button>*/}
                            {/*                </div>*/}
                            {/*            </div>*/}
                            {/*        </div>*/}
                            {/*    </a>*/}
                            {/*</div>*/}

                            {/*<div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">*/}
                            {/*    <a href="">*/}
                            {/*        <div className="card-flyer">*/}
                            {/*            <div className="text-box">*/}
                            {/*                <div className="image-box">*/}
                            {/*                    <img*/}
                            {/*                        src="https://cdn.pixabay.com/photo/2018/03/30/15/11/deer-3275594_960_720.jpg"*/}
                            {/*                        alt=""/>*/}
                            {/*                </div>*/}
                            {/*                <div className="text-container">*/}
                            {/*                    <h6>Title 01AA</h6>*/}
                            {/*                    <p className="justify-card">Lorem Ipsum is simply dummy text of the*/}
                            {/*                        printing and typesetting*/}
                            {/*                        industry. Lorem Ipsum has been the industry's standard dummy text*/}
                            {/*                        ever since the 1500s.</p>*/}
                            {/*                </div>*/}
                            {/*                <div className="card-bottom-div">*/}
                            {/*                    <p className="price-font" style={{"fontSize": "20px"}}>$ 10.00</p>*/}
                            {/*                    <button type="button" className="btn btn-primary">Try for Free Now*/}
                            {/*                    </button>*/}
                            {/*                </div>*/}
                            {/*            </div>*/}
                            {/*        </div>*/}
                            {/*    </a>*/}
                            {/*</div>*/}

                        </div>
                    </div>
                </div>
                {/*Photo Section end*/}

            </div>
        )
    }
}

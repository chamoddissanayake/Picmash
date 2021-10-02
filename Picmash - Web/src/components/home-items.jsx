import React, {Component} from 'react';
import '../css/homeCards.css';

export default class HomeItems extends Component {

    constructor() {
        super();
    }

    componentDidMount() {

    }

    SaveItemInDrive() {
        console.log("Save item in drive")
        // C:\\Users\\User\\Desktop\\2382371.jpg


    }

    render() {
        return (
            <div>
                {/*Photo Section start*/}
                <div id="cards_landscape_wrap-2">
                    <div className="container">
                        <h2 className="card-grid-title">Trending Photos</h2>
                        <div className="row">

                            <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                                <div className="card-flyer">
                                    <div className="text-box">
                                        <div className="image-box">
                                            <img
                                                src="https://cdn.pixabay.com/photo/2018/03/30/15/11/deer-3275594_960_720.jpg"
                                                alt=""/>
                                        </div>
                                        <div className="text-container">
                                            <h6>Title 01AA</h6>
                                            <p className="justify-card">Lorem Ipsum is simply dummy text of the
                                                printing and typesetting
                                                industry. Lorem Ipsum has been the industry's standard dummy text
                                                ever since the 1500s.</p>
                                        </div>
                                        <div className="card-bottom-div">
                                            <p className="price-font" style={{"fontSize": "20px"}}>$ 10.00</p>
                                            <div className="btn btn-primary"
                                                 onClick={this.SaveItemInDrive}>Try for Free Now
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                                <a href="">
                                    <div className="card-flyer">
                                        <div className="text-box">
                                            <div className="image-box">
                                                <img
                                                    src="https://cdn.pixabay.com/photo/2018/03/30/15/11/deer-3275594_960_720.jpg"
                                                    alt=""/>
                                            </div>
                                            <div className="text-container">
                                                <h6>Title 01AA</h6>
                                                <p className="justify-card">Lorem Ipsum is simply dummy text of the
                                                    printing and typesetting
                                                    industry. Lorem Ipsum has been the industry's standard dummy text
                                                    ever since the 1500s.</p>
                                            </div>
                                            <div className="card-bottom-div">
                                                <p className="price-font" style={{"fontSize": "20px"}}>$ 10.00</p>
                                                <button type="button" className="btn btn-primary">Try for Free Now
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>

                            <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                                <a href="">
                                    <div className="card-flyer">
                                        <div className="text-box">
                                            <div className="image-box">
                                                <img
                                                    src="https://cdn.pixabay.com/photo/2018/03/30/15/11/deer-3275594_960_720.jpg"
                                                    alt=""/>
                                            </div>
                                            <div className="text-container">
                                                <h6>Title 01AA</h6>
                                                <p className="justify-card">Lorem Ipsum is simply dummy text of the
                                                    printing and typesetting
                                                    industry. Lorem Ipsum has been the industry's standard dummy text
                                                    ever since the 1500s.</p>
                                            </div>
                                            <div className="card-bottom-div">
                                                <p className="price-font" style={{"fontSize": "20px"}}>$ 10.00</p>
                                                <button type="button" className="btn btn-primary">Try for Free Now
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>

                            <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                                <a href="">
                                    <div className="card-flyer">
                                        <div className="text-box">
                                            <div className="image-box">
                                                <img
                                                    src="https://cdn.pixabay.com/photo/2018/03/30/15/11/deer-3275594_960_720.jpg"
                                                    alt=""/>
                                            </div>
                                            <div className="text-container">
                                                <h6>Title 01AA</h6>
                                                <p className="justify-card">Lorem Ipsum is simply dummy text of the
                                                    printing and typesetting
                                                    industry. Lorem Ipsum has been the industry's standard dummy text
                                                    ever since the 1500s.</p>
                                            </div>
                                            <div className="card-bottom-div">
                                                <p className="price-font" style={{"fontSize": "20px"}}>$ 10.00</p>
                                                <button type="button" className="btn btn-primary">Try for Free Now
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>

                            <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                                <a href="">
                                    <div className="card-flyer">
                                        <div className="text-box">
                                            <div className="image-box">
                                                <img
                                                    src="https://cdn.pixabay.com/photo/2018/03/30/15/11/deer-3275594_960_720.jpg"
                                                    alt=""/>
                                            </div>
                                            <div className="text-container">
                                                <h6>Title 01AA</h6>
                                                <p className="justify-card">Lorem Ipsum is simply dummy text of the
                                                    printing and typesetting
                                                    industry. Lorem Ipsum has been the industry's standard dummy text
                                                    ever since the 1500s.</p>
                                            </div>
                                            <div className="card-bottom-div">
                                                <p className="price-font" style={{"fontSize": "20px"}}>$ 10.00</p>
                                                <button type="button" className="btn btn-primary">Try for Free Now
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>

                            <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                                <a href="">
                                    <div className="card-flyer">
                                        <div className="text-box">
                                            <div className="image-box">
                                                <img
                                                    src="https://cdn.pixabay.com/photo/2018/03/30/15/11/deer-3275594_960_720.jpg"
                                                    alt=""/>
                                            </div>
                                            <div className="text-container">
                                                <h6>Title 01AA</h6>
                                                <p className="justify-card">Lorem Ipsum is simply dummy text of the
                                                    printing and typesetting
                                                    industry. Lorem Ipsum has been the industry's standard dummy text
                                                    ever since the 1500s.</p>
                                            </div>
                                            <div className="card-bottom-div">
                                                <p className="price-font" style={{"fontSize": "20px"}}>$ 10.00</p>
                                                <button type="button" className="btn btn-primary">Try for Free Now
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>

                            <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                                <a href="">
                                    <div className="card-flyer">
                                        <div className="text-box">
                                            <div className="image-box">
                                                <img
                                                    src="https://cdn.pixabay.com/photo/2018/03/30/15/11/deer-3275594_960_720.jpg"
                                                    alt=""/>
                                            </div>
                                            <div className="text-container">
                                                <h6>Title 01AA</h6>
                                                <p className="justify-card">Lorem Ipsum is simply dummy text of the
                                                    printing and typesetting
                                                    industry. Lorem Ipsum has been the industry's standard dummy text
                                                    ever since the 1500s.</p>
                                            </div>
                                            <div className="card-bottom-div">
                                                <p className="price-font" style={{"fontSize": "20px"}}>$ 10.00</p>
                                                <button type="button" className="btn btn-primary">Try for Free Now
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>

                            <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                                <a href="">
                                    <div className="card-flyer">
                                        <div className="text-box">
                                            <div className="image-box">
                                                <img
                                                    src="https://cdn.pixabay.com/photo/2018/03/30/15/11/deer-3275594_960_720.jpg"
                                                    alt=""/>
                                            </div>
                                            <div className="text-container">
                                                <h6>Title 01AA</h6>
                                                <p className="justify-card">Lorem Ipsum is simply dummy text of the
                                                    printing and typesetting
                                                    industry. Lorem Ipsum has been the industry's standard dummy text
                                                    ever since the 1500s.</p>
                                            </div>
                                            <div className="card-bottom-div">
                                                <p className="price-font" style={{"fontSize": "20px"}}>$ 10.00</p>
                                                <button type="button" className="btn btn-primary">Try for Free Now
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
                {/*Photo Section end*/}


                {/*Photo Section start*/}
                <div id="cards_landscape_wrap-2">
                    <div className="container">
                        <h2 className="card-grid-title">Trending Videos</h2>
                        <div className="row">

                            <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                                <a href="">
                                    <div className="card-flyer">
                                        <div className="text-box">
                                            <div className="image-box">
                                                <img
                                                    src="https://cdn.pixabay.com/photo/2018/03/30/15/11/deer-3275594_960_720.jpg"
                                                    alt=""/>
                                            </div>
                                            <div className="text-container">
                                                <h6>Title 01AA</h6>
                                                <p className="justify-card">Lorem Ipsum is simply dummy text of the
                                                    printing and typesetting
                                                    industry. Lorem Ipsum has been the industry's standard dummy text
                                                    ever since the 1500s.</p>
                                            </div>
                                            <div className="card-bottom-div">
                                                <p className="price-font" style={{"fontSize": "20px"}}>$ 10.00</p>
                                                <button type="button" className="btn btn-primary">Try for Free Now
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>

                            <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                                <a href="">
                                    <div className="card-flyer">
                                        <div className="text-box">
                                            <div className="image-box">
                                                <img
                                                    src="https://cdn.pixabay.com/photo/2018/03/30/15/11/deer-3275594_960_720.jpg"
                                                    alt=""/>
                                            </div>
                                            <div className="text-container">
                                                <h6>Title 01AA</h6>
                                                <p className="justify-card">Lorem Ipsum is simply dummy text of the
                                                    printing and typesetting
                                                    industry. Lorem Ipsum has been the industry's standard dummy text
                                                    ever since the 1500s.</p>
                                            </div>
                                            <div className="card-bottom-div">
                                                <p className="price-font" style={{"fontSize": "20px"}}>$ 10.00</p>
                                                <button type="button" className="btn btn-primary">Try for Free Now
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>

                            <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                                <a href="">
                                    <div className="card-flyer">
                                        <div className="text-box">
                                            <div className="image-box">
                                                <img
                                                    src="https://cdn.pixabay.com/photo/2018/03/30/15/11/deer-3275594_960_720.jpg"
                                                    alt=""/>
                                            </div>
                                            <div className="text-container">
                                                <h6>Title 01AA</h6>
                                                <p className="justify-card">Lorem Ipsum is simply dummy text of the
                                                    printing and typesetting
                                                    industry. Lorem Ipsum has been the industry's standard dummy text
                                                    ever since the 1500s.</p>
                                            </div>
                                            <div className="card-bottom-div">
                                                <p className="price-font" style={{"fontSize": "20px"}}>$ 10.00</p>
                                                <button type="button" className="btn btn-primary">Try for Free Now
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>

                            <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                                <a href="">
                                    <div className="card-flyer">
                                        <div className="text-box">
                                            <div className="image-box">
                                                <img
                                                    src="https://cdn.pixabay.com/photo/2018/03/30/15/11/deer-3275594_960_720.jpg"
                                                    alt=""/>
                                            </div>
                                            <div className="text-container">
                                                <h6>Title 01AA</h6>
                                                <p className="justify-card">Lorem Ipsum is simply dummy text of the
                                                    printing and typesetting
                                                    industry. Lorem Ipsum has been the industry's standard dummy text
                                                    ever since the 1500s.</p>
                                            </div>
                                            <div className="card-bottom-div">
                                                <p className="price-font" style={{"fontSize": "20px"}}>$ 10.00</p>
                                                <button type="button" className="btn btn-primary">Try for Free Now
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>

                            <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                                <a href="">
                                    <div className="card-flyer">
                                        <div className="text-box">
                                            <div className="image-box">
                                                <img
                                                    src="https://cdn.pixabay.com/photo/2018/03/30/15/11/deer-3275594_960_720.jpg"
                                                    alt=""/>
                                            </div>
                                            <div className="text-container">
                                                <h6>Title 01AA</h6>
                                                <p className="justify-card">Lorem Ipsum is simply dummy text of the
                                                    printing and typesetting
                                                    industry. Lorem Ipsum has been the industry's standard dummy text
                                                    ever since the 1500s.</p>
                                            </div>
                                            <div className="card-bottom-div">
                                                <p className="price-font" style={{"fontSize": "20px"}}>$ 10.00</p>
                                                <button type="button" className="btn btn-primary">Try for Free Now
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>

                            <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                                <a href="">
                                    <div className="card-flyer">
                                        <div className="text-box">
                                            <div className="image-box">
                                                <img
                                                    src="https://cdn.pixabay.com/photo/2018/03/30/15/11/deer-3275594_960_720.jpg"
                                                    alt=""/>
                                            </div>
                                            <div className="text-container">
                                                <h6>Title 01AA</h6>
                                                <p className="justify-card">Lorem Ipsum is simply dummy text of the
                                                    printing and typesetting
                                                    industry. Lorem Ipsum has been the industry's standard dummy text
                                                    ever since the 1500s.</p>
                                            </div>
                                            <div className="card-bottom-div">
                                                <p className="price-font" style={{"fontSize": "20px"}}>$ 10.00</p>
                                                <button type="button" className="btn btn-primary">Try for Free Now
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>

                            <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                                <a href="">
                                    <div className="card-flyer">
                                        <div className="text-box">
                                            <div className="image-box">
                                                <img
                                                    src="https://cdn.pixabay.com/photo/2018/03/30/15/11/deer-3275594_960_720.jpg"
                                                    alt=""/>
                                            </div>
                                            <div className="text-container">
                                                <h6>Title 01AA</h6>
                                                <p className="justify-card">Lorem Ipsum is simply dummy text of the
                                                    printing and typesetting
                                                    industry. Lorem Ipsum has been the industry's standard dummy text
                                                    ever since the 1500s.</p>
                                            </div>
                                            <div className="card-bottom-div">
                                                <p className="price-font" style={{"fontSize": "20px"}}>$ 10.00</p>
                                                <button type="button" className="btn btn-primary">Try for Free Now
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>

                            <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                                <a href="">
                                    <div className="card-flyer">
                                        <div className="text-box">
                                            <div className="image-box">
                                                <img
                                                    src="https://cdn.pixabay.com/photo/2018/03/30/15/11/deer-3275594_960_720.jpg"
                                                    alt=""/>
                                            </div>
                                            <div className="text-container">
                                                <h6>Title 01AA</h6>
                                                <p className="justify-card">Lorem Ipsum is simply dummy text of the
                                                    printing and typesetting
                                                    industry. Lorem Ipsum has been the industry's standard dummy text
                                                    ever since the 1500s.</p>
                                            </div>
                                            <div className="card-bottom-div">
                                                <p className="price-font" style={{"fontSize": "20px"}}>$ 10.00</p>
                                                <button type="button" className="btn btn-primary">Try for Free Now
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
                {/*Photo Section end*/}

            </div>
        )
    }
}

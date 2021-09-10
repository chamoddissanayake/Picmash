import React, {Component} from 'react';
import '../css/sell.css';
import '../css/util.css';
import sell_bg from '../assets/images/sell-bg.jpg'


import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

export default class Sell extends Component {


    constructor(props) {
        super(props);
        this.state = {
            file_select_type: 'local'
        };

        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
    }

    handleChange(event) {
        if (event.target.value == 'local') {
            this.setState({ file_select_type: 'local' });
        } else if (event.target.value == 'drive') {
            this.setState({ file_select_type: 'drive' });
        } else if (event.target.value == 'facebook') {
            this.setState({ file_select_type: 'facebook' });
        }

    }

    render() {
        return (
            <div className="container-contact100">
                {/*<div className="contact100-map" style={{*/}
                {/*    backgroundImage: `url("https://firebasestorage.googleapis.com/v0/b/projects-storage-8af30.appspot.com/o/ssd%2Fsell-bg.jpg?alt=media&token=9a94ae01-dc0b-44f9-8d2e-8c1474063017")`*/}
                {/*}}></div>*/}
                <img className="contact100-map" src={sell_bg}/>

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
                    <div className="form-container">
                        <form>
                            <div className="row">
                                <div className="col-25">
                                    <label>Title</label>
                                </div>
                                <div className="col-75">
                                    <input type="text" id="fName" name="firstName"
                                           placeholder="Title of the photo or video"/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-25">
                                    <label>Type</label>
                                </div>
                                <div className="col-75">
                                    <select id="type" name="type">
                                        <option value="photo">Photo</option>
                                        <option value="video">Video</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-25">
                                    <label>Price (USD)</label>
                                </div>
                                <div className="col-75">
                                    <input type="text" id="price" name="price" placeholder="Price of the item ($)"/>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-25">
                                    <label>Description</label>
                                </div>
                                <div className="col-75">
                                        <textarea id="description" name="description"
                                                  placeholder="Say something about your photo or video"
                                                  style={{height: "100px"}}></textarea>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-25">
                                    <label>Choose Image</label>
                                </div>
                                {/*    <div className="col-75">*/}
                                {/*        <div className="form-check form-check-inline">*/}
                                {/*            <input className="form-check-input" type="radio" name="radio_local"*/}
                                {/*                   id="radio_local" value="radio_local" checked/>*/}
                                {/*            <label className="form-check-label" htmlFor="inlineRadio1">Local File</label>*/}
                                {/*        </div>*/}
                                {/*        <div className="form-check form-check-inline">*/}
                                {/*            <input className="form-check-input" type="radio" name="google_drive"*/}
                                {/*                   id="google_drive" value="google_drive"/>*/}
                                {/*            <label className="form-check-label" htmlFor="inlineRadio2">Google Drive</label>*/}
                                {/*        </div>*/}
                                {/*        <div className="form-check form-check-inline">*/}
                                {/*            <input className="form-check-input" type="radio" name="facebook"*/}
                                {/*                   id="facebook" value="facebook"/>*/}
                                {/*            <label className="form-check-label" htmlFor="inlineRadio2">Facebook</label>*/}
                                {/*        </div>*/}
                                {/*    </div>*/}
                                {/*</div>*/}

                                {/*value={value} onChange={handleChange}*/}
                                <div className="col-75">
                                    <RadioGroup aria-label="resource-select-type" name="resource-select-type"
                                                onChange={this.handleChange} value={this.state.file_select_type}>
                                        <div className="form-check form-check-inline">
                                            <FormControlLabel value="local" control={<Radio/>} label="Local File"/>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <FormControlLabel value="drive" control={<Radio/>} label="Google"/>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <FormControlLabel value="facebook" control={<Radio/>} label="Facebook"/>
                                        </div>
                                    </RadioGroup>

                                    {this.state.file_select_type == "local" && <span>
                                        <div>
                                            <p>Local file selector</p>
                                        </div>
                                    </span>}

                                    {this.state.file_select_type == "drive" && <span>
                                        <div>
                                            <p>Drive file selector</p>
                                        </div>
                                    </span>}

                                    {this.state.file_select_type == "facebook" && <span>
                                        <div>
                                            <p>Facebook file selector</p>
                                        </div>
                                    </span>}

                                </div>
                            </div>


                            <div className="row">
                                <input type="submit" value="Submit"/>
                            </div>
                        </form>
                    </div>


                    {/*<form className="contact100-form validate-form">*/}
                    {/*    <div className="wrap-input100 validate-input" data-validate="Name is required">*/}
                    {/*        <span className="label-input100">Full Name:</span>*/}
                    {/*        <input className="input100" type="text" name="name" placeholder="Enter full name"/>*/}
                    {/*        <span className="focus-input100"></span>*/}
                    {/*    </div>*/}

                    {/*    <div className="wrap-input100 validate-input"*/}
                    {/*         data-validate="Valid email is required: ex@abc.xyz">*/}
                    {/*        <span className="label-input100">Email:</span>*/}
                    {/*        <input className="input100" type="text" name="email" placeholder="Enter email addess"/>*/}
                    {/*        <span className="focus-input100"></span>*/}
                    {/*    </div>*/}

                    {/*    <div className="wrap-input100 validate-input" data-validate="Phone is required">*/}
                    {/*        <span className="label-input100">Phone:</span>*/}
                    {/*        <input className="input100" type="text" name="phone" placeholder="Enter phone number"/>*/}
                    {/*        <span className="focus-input100"></span>*/}
                    {/*    </div>*/}

                    {/*    <div className="wrap-input100 validate-input" data-validate="Message is required">*/}
                    {/*        <span className="label-input100">Message:</span>*/}
                    {/*        <textarea className="input100" name="message" placeholder="Your Comment..."></textarea>*/}
                    {/*        <span className="focus-input100"></span>*/}
                    {/*    </div>*/}

                    {/*    <div className="container-contact100-form-btn">*/}
                    {/*        <button className="contact100-form-btn">*/}
                    {/*	<span>*/}
                    {/*		Submit*/}
                    {/*		<i className="fa fa-long-arrow-right m-l-7" aria-hidden="true"></i>*/}
                    {/*	</span>*/}
                    {/*        </button>*/}
                    {/*    </div>*/}
                    {/*</form>*/}
                </div>
            </div>
        )
    }
}

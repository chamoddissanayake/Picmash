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
            this.setState({file_select_type: 'local'});
        } else if (event.target.value == 'drive') {
            this.setState({file_select_type: 'drive'});
        } else if (event.target.value == 'facebook') {
            this.setState({file_select_type: 'facebook'});
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


                                <div className="col-75">
                                    <RadioGroup aria-label="resource-select-type" name="resource-select-type"
                                                onChange={this.handleChange} value={this.state.file_select_type}>
                                            <span>
                                                <div className="form-check form-check-inline">
                                                    <FormControlLabel value="local" control={<Radio/>}
                                                                      label="Local File"/>
                                                </div>
                                                <div className="form-check form-check-inline">
                                                    <FormControlLabel value="drive" control={<Radio/>} label="Google"/>
                                                </div>
                                                <div className="form-check form-check-inline">
                                                    <FormControlLabel value="facebook" control={<Radio/>}
                                                                      label="Facebook"/>
                                                </div>
                                            </span>
                                    </RadioGroup>
                                    {/*value={value} onChange={handleChange}*/}
                                    <div className="col-75">

                                        {this.state.file_select_type == "local" && <span>
                                        <div className="selected-choose-type-container">
                                            {/*Local Image Picker start*/}
                                            {/*<p>Local file selector</p>*/}
                                            <input type="file"
                                                   id="avatar" name="avatar"
                                                   accept="image/png, image/jpeg"/>
                                            {/*Local Image picker end*/}
                                        </div>
                                    </span>}

                                        {this.state.file_select_type == "drive" && <span>
                                        <div className="selected-choose-type-container">
                                            <p>Drive file selector</p>
                                        </div>
                                    </span>}

                                        {this.state.file_select_type == "facebook" && <span>
                                        <div className="selected-choose-type-container">
                                            <p>Facebook file selector</p>
                                        </div>
                                    </span>}

                                    </div>
                                </div>


                            </div>


                            <div className="row">
                                <input type="submit" value="Submit"/>
                            </div>
                        </form>
                    </div>


                </div>
            </div>
        )
    }
}

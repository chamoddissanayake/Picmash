import React, {Component} from 'react';
import '../css/landing.css';
import HomeItems from "./home-items";

export default class Home extends Component {

    constructor() {
        super();
    }

    componentDidMount() {

    }

    render() {
        return (
            <div>
                <div className="s002">
                    <form>
                        <fieldset>
                            <legend>SEARCH PHOTOS/VIDEOS</legend>
                        </fieldset>
                        <div className="inner-form">
                            <div className="input-field first-wrap">
                                <div className="icon-wrap">
                                    <img src="https://cdn-icons-png.flaticon.com/128/1042/1042339.png" alt="" width="24"
                                         height="24" viewBox="0 0 24 24"/>

                                </div>
                                <input id="search" type="text" placeholder="What are you looking for?" style={{"fontSize":"24px"}}/>
                            </div>

                            <div className="input-field fouth-wrap">
                                <div className="icon-wrap">
                                    <img src="https://cdn-icons-png.flaticon.com/128/1042/1042339.png" alt="" width="24"
                                         height="24" viewBox="0 0 24 24"/>
                                </div>
                                <select className="search-type-drop-down" data-trigger="" name="choices-single-defaul">
                                    <option placeholder="">Photos</option>
                                    <option>Videos</option>
                                </select>
                            </div>

                            <div className="input-field fifth-wrap">
                                <button className="btn-search" type="button">SEARCH</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

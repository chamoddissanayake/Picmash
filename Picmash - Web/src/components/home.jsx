import React, {Component} from 'react';
import '../css/landing.css';

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
                                    {/*<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">*/}
                                    {/*    <path*/}
                                    {/*        d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path>*/}
                                    {/*</svg>*/}
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

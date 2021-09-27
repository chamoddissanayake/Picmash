import React, {Component} from 'react';
import {IMAGE_DATA} from '../data/image_data'
import {VIDEO_DATA} from '../data/video_data'
import axios from "axios";
import '../css/browse.css';

var SCOPE = 'https://www.googleapis.com/auth/drive.file';
var discoveryUrl = 'https://www.googleapis.com/discovery/v1/apis/drive/v3/rest';

export default class Browse extends Component {

    constructor() {
        super()
        this.state = {
            name: '',
            googleAuth: '',
            body: '',
            isSigned: false,
            isSaveProcessing: false,
            processingIndex: -1
        };
        this.fileUpload = this.fileUpload.bind(this);
    }

    componentDidMount() {
        var script = document.createElement('script');
        script.onload = this.handleClientLoad;
        script.src = "https://apis.google.com/js/api.js";
        document.body.appendChild(script);
    }


    initClient = () => {
        try {
            window.gapi.client.init({
                'apiKey': "AIzaSyBJG2E08YMitCRBQSzyuJX6I57MOhfXrRs",
                'clientId': "801360513499-u7sc20pvp4nkkigtgvnnaajp4hcq4ate.apps.googleusercontent.com",
                'scope': SCOPE,
                'discoveryDocs': [discoveryUrl]
            }).then(() => {
                this.setState({
                    googleAuth: window.gapi.auth2.getAuthInstance()
                })
                this.state.googleAuth.isSignedIn.listen(this.updateSigninStatus);
                document.getElementById('signin-btn').addEventListener('click', this.signInFunction);
                document.getElementById('signout-btn').addEventListener('click', this.signOutFunction);

            });
        } catch (e) {
            console.log(e);
        }
    }

    signInFunction = () => {
        this.state.googleAuth.signIn().then(a => {
            console.log("successfully signed in")
            this.setSigninStatus();
        });

    }

    signOutFunction = () => {
        this.state.googleAuth.signOut().then(a => {
            console.log("successfully signed out")
            this.setSigninStatus();
        });

    }



    setSigninStatus = async () => {
        var user = this.state.googleAuth.currentUser.get();

        if (user.$b == null) {
            this.setState({
                name: '',
                isSigned: false
            });
        } else {
            this.setState({
                name: 'testuser',
                isSigned: true
            });
        }
    }

    fileUpload(image_location, index) {

        if (this.state.googleAuth.isSignedIn.Xd == false) {
            alert("Please signed in with google")
        } else {
            this.setState({
                isSaveProcessing: true,
                processingIndex: index
            });

            var request22 = new XMLHttpRequest();
            request22.open('GET', image_location, true);
            request22.responseType = 'blob';
            request22.onload = function () {
                var fileData = request22.response;


                const boundary = '-------314159265358979323846';
                const delimiter = "\r\n--" + boundary + "\r\n";
                const close_delim = "\r\n--" + boundary + "--";

                var reader = new FileReader();
                reader.readAsDataURL(fileData);
                reader.onload = function (e) {
                    var contentType = fileData.type || 'application/octet-stream';

                    var metadata = {
                        'name': Date.now(),
                        'mimeType': contentType
                    };
                    var data = reader.result;

                    var multipartRequestBody =
                        delimiter + 'Content-Type: application/json\r\n\r\n' +
                        JSON.stringify(metadata) +
                        delimiter +
                        'Content-Type: ' + contentType + '\r\n';

                    //Transfer images as base64 string.
                    if (contentType.indexOf('image/') === 0) {
                        var pos = data.indexOf('base64,');
                        multipartRequestBody += 'Content-Transfer-Encoding: base64\r\n' + '\r\n' +
                            data.slice(pos < 0 ? 0 : (pos + 'base64,'.length));
                    } else {
                        multipartRequestBody += +'\r\n' + data;
                    }
                    multipartRequestBody += close_delim;


                    var request = window.gapi.client.request({
                        'path': '/upload/drive/v3/files',
                        'method': 'POST',
                        'params': {'uploadType': 'multipart'},
                        'headers': {
                            'Content-Type': 'multipart/mixed; boundary="' + boundary + '"'
                        },
                        'body': multipartRequestBody
                    });

                    request.execute(function (file) {
                        if (file.id) {
                            // send id to STM and mark uploaded
                            // alert("request execute: " + JSON.stringify(file));
                            alert("Successfully saved to your Google Drive.");
                        }
                    });

                };
            };
            request22.send();
            this.setState({
                isSaveProcessing: false,
                processingIndex: -1
            });

        }

    }

    getBase64(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
    }


    handleChange = async file => {
        let image
        if (file.currentTarget) {
            image = file.currentTarget.currentSrc;
        } else {
            if (!file.file.url && !file.file.preview) {
                file.file.preview = await this.getBase64(file.file.originFileObj);
            }
            image = file.file.preview;
            this.setState({
                body: file.file.preview
            });


        }
    }


    handleClientLoad = () => {
        window.gapi.load('client:auth2', this.initClient);
    }

    saveImageInDriveClicked(imagelink) {
        var status = axios
            .post("http://localhost:8001/api/save/image", {})
            .then(response => {
                return response;
            });

    }

    render() {
        return (
            <div>

                <div className="center-req">
                    <table>
                        <tr>
                            <td className="td-space" id="td-title">
                                <p>We need Write permission to your google Drive:</p>
                            </td>
                            {/*<td className="td-space">*/}
                            {/*    <button id="signin-btn">Allow Access</button>*/}
                            {/*</td> */}
                            <td className="td-space">
                                <button id="signin-btn">{this.state.isSigned === false && <span> Allow Access </span>}</button>
                                <button id="signin-btn">{this.state.isSigned === true && <span> Permission Allowed </span>}</button>
                            </td>
                            <td className="td-space">
                                <button id="signout-btn">Remove</button>
                            </td>
                        </tr>
                    </table>
                </div>

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
                                                {/*<div type="button" className="btn btn-primary"*/}
                                                {/*     onClick={() => this.handleChange(image.link)}>Save this image*/}
                                                {/*</div>*/}


                                                {this.state.isSaveProcessing === false &&
                                                <div type="button" className="btn btn-primary"
                                                     onClick={() => this.fileUpload(image.link, index)}>Save to my
                                                    Google Drive
                                                </div>}

                                                {this.state.isSaveProcessing === true && this.state.processingIndex === index &&
                                                <div type="button" className="btn btn-primary"
                                                     style={{opacity: "0.2"}}>Saving. Please wait...
                                                </div>}


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
                                                <button type="button" className="btn btn-primary">Save this video
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

            </div>
        )
    }
}

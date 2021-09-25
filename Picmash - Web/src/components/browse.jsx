import React, {Component} from 'react';
import {IMAGE_DATA} from '../data/image_data'
import {VIDEO_DATA} from '../data/video_data'
import axios from "axios";

var SCOPE = 'https://www.googleapis.com/auth/drive.file';
var discoveryUrl = 'https://www.googleapis.com/discovery/v1/apis/drive/v3/rest';

export default class Browse extends Component {

    constructor() {
        super()
        this.state = {
            name: '',
            googleAuth: '',
            body: '',
            isSigned:false
        };
        this.fileUpload = this.fileUpload.bind(this);
        this.aaa = this.aaa.bind(this);
    }

    componentDidMount() {
        var script = document.createElement('script');
        script.onload=this.handleClientLoad;
        script.src="https://apis.google.com/js/api.js";
        document.body.appendChild(script);
    }


    initClient = () => {
        try{
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
        }catch(e){
            console.log(e);
        }
    }

    signInFunction =()=>{
        // console.log(this.state.googleAuth)
        this.state.googleAuth.signIn().then(a=>{
            console.log("successfully signed in")
            this.setSigninStatus();
        });
        // console.log(this.state.googleAuth)
        // this.updateSigninStatus()

    }

    signOutFunction =()=>{
        // this.state.googleAuth.signOut();
        // this.setSigninStatus();

        this.state.googleAuth.signOut().then(a=>{
            console.log("successfully signed out")
            this.setSigninStatus();
        });

        // this.updateSigninStatus()
    }

    // updateSigninStatus = ()=> {
    //      this.setSigninStatus();
    // }


    setSigninStatus= async ()=>{
        // console.log(this.state.googleAuth.currentUser.get())
        var user = this.state.googleAuth.currentUser.get();

        // if (user.dt.uU == null || user.dt.uU==''){
        if (user.$b == null){
            console.log("111")
            this.setState({
                name: '',
                isSigned:false
            });
        }else{
            console.log("222")
            this.setState({
                name: 'testuser',
                isSigned:true
            });
        }
    }

    fileUpload(image_location){

        if (this.state.googleAuth.isSignedIn.Xd == false){
            alert("Please signed in")
        }else{
            var request22 = new XMLHttpRequest();
            request22.open('GET', image_location, true);
            request22.responseType = 'blob';
            request22.onload = function() {
                var fileData = request22.response;


                const boundary = '-------314159265358979323846';
                const delimiter = "\r\n--" + boundary + "\r\n";
                const close_delim = "\r\n--" + boundary + "--";

                var reader = new FileReader();
                reader.readAsDataURL(fileData);
                reader.onload =  function(e){
                    var contentType = fileData.type || 'application/octet-stream';

                    var metadata = {
                        'name': Date.now(),
                        'mimeType': contentType
                    };
                    var data = reader.result;

                    var multipartRequestBody =
                        delimiter +  'Content-Type: application/json\r\n\r\n' +
                        JSON.stringify(metadata) +
                        delimiter +
                        'Content-Type: ' + contentType + '\r\n';

                    //Transfer images as base64 string.
                    if (contentType.indexOf('image/') === 0) {
                        var pos = data.indexOf('base64,');
                        multipartRequestBody += 'Content-Transfer-Encoding: base64\r\n' + '\r\n' +
                            data.slice(pos < 0 ? 0 : (pos + 'base64,'.length));
                    } else {
                        multipartRequestBody +=  + '\r\n' + data;
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

                    request.execute(function(file){
                        if(file.id){
                            // send id to STM and mark uploaded
                            alert("request execute: "+JSON.stringify(file));
                        }
                    });

                };
            };
            request22.send();
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
        console.log("111")
        console.log(file)
        console.log("***")
        if (file.currentTarget) {
            console.log("222")
            image = file.currentTarget.currentSrc;
            console.log(file.currentTarget)
        } else {





            if (!file.file.url && !file.file.preview) {
                file.file.preview = await this.getBase64(file.file.originFileObj);
            }
            image = file.file.preview;
            this.setState({
                body: file.file.preview
            });



        }

        console.log(image)

    }


    handleClientLoad = ()=>{
        window.gapi.load('client:auth2', this.initClient);
    }

    saveImageInDriveClicked(imagelink){
        console.log(imagelink)
        var status = axios
            .post("http://localhost:8001/api/save/image", {})
            .then(response => {
                console.log(response)
                return response;
            });
        //

    }

    aaa(){
        console.log(this.state.googleAuth);
    }

    render() {
        return (
            <div>

                {this.state.isSigned === true && <div>
                    <p>{this.state.name}</p>
                </div>}

                <button id="signin-btn">Sign In</button>
                <button id="signout-btn">Sign Out</button>
`

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
                                                <div type="button" className="btn btn-primary"
                                                     onClick={() => this.handleChange(image.link)}>Save this image
                                                </div>

                                                {/*<div type="button" className="btn btn-primary"*/}
                                                {/*     onClick={this.fileUpload} >Temp button*/}
                                                {/*</div>*/}

                                                <div type="button" className="btn btn-primary"
                                                     onClick={() => this.fileUpload(image.link)} >Temp Save
                                                </div>

                                                <div type="button" className="btn btn-primary"
                                                     onClick={this.aaa} >aaa
                                                </div>

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

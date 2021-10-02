import React, {Component} from 'react';
import '../css/sell.css';
import '../css/util.css';
import sell_bg from '../assets/images/sell-bg.jpg'

import * as constants from '../constants';
import AuthService from "../services/auth.service";

import GooglePicker from 'react-google-picker';
import axios from "axios";


export default class Sell extends Component {


    constructor(props) {
        super(props);
        this.state = {

            selected_file_type: '',  //image, video

            google_selected_file_data: null,
            google_drive_img_preview: '',
            google_drive_video_preview: '',
            selected_file_content:null
        };
        this.submitPressed = this.submitPressed.bind(this);
    }

    componentDidMount() {
    }


    fillGoogleDriveImagePreviewer() {
        this.setState({google_drive_img_preview: 'https://drive.google.com/uc?export=view&id=' + this.state.google_selected_file_data.id});
    }

    fillGoogleDriveVideoPreviewer() {
        console.log("%%%")
        console.log(this.state.google_selected_file_data)
        // google_drive_video_preview
        this.setState({google_drive_video_preview: 'https://drive.google.com/uc?export=view&id=' + this.state.google_selected_file_data.id});
    }

    submitPressed() {
        console.log("-----")

        const currentUser = AuthService.getCurrentUser();

        console.log(this.state.google_drive_img_preview);
        console.log(this.state.google_selected_file_data);
        console.log(currentUser);

        // const submitted = SellService.sellSubmit(
        //     this.state.selected_file_type,
        //     this.state.google_selected_file_data,
        //     this.state.google_drive_img_preview,
        //     this.state.google_drive_video_preview
        //     );
        // console.log("*****")
        // this.fetchImageContent();
        // console.log("-----")
        // this.downloadImageFile()
        this.sendNetworkCall();
    }

    sendNetworkCall(){
        var response  = axios
            .post("http://localhost:8001/api/sell/image", {})
            .then(response => {
                // if (response.data.accessToken) {
                //     localStorage.setItem("user", JSON.stringify(response.data));
                //     localStorage.setItem("type", "general");

                // }
                console.log("********************")
                console.log("response received")
                console.log(response)
                console.log("********************")

                return response.data;
            });
    }

    fetchImageContent(){

        // fetch("https://i.picsum.photos/id/794/1280/720.jpg?hmac=MWQL7lPs6VIfRYN9wYYq-dvXitPBPo-ZKzM_xfeR_sM",
        fetch(this.state.google_drive_img_preview,
            {
                method: "POST",
                headers: { "Content-Type": "image/jpeg"},
                body:this.state.selected_file_content
            }).then(response => response.blob()).then(response =>{
                console.log(this.state.selected_file_content)
        })
    }

    // downloadImageFile() {
    //     fetch('https://i.picsum.photos/id/723/1280/720.jpg?hmac=Mp0rVArPWiOWfMJyumAZEILRVbrloHZd0W1Sib1LXx8',
    //         {
    //             method: 'GET',
    //             headers: {
    //                 'Content-Type': 'image/jpeg',
    //             },
    //         })
    //         .then((response) => response.blob())
    //         .then((blob) => {
    //             // Create blob link to download
    //             const url = window.URL.createObjectURL(
    //                 new Blob([blob]),
    //             );
    //             console.log(url)
    //             const link = document.createElement('a');
    //             link.href = url;
    //             link.setAttribute(
    //                 'download',
    //                 `FileName.jpg`,
    //             );
    //
    //             console.log(link)
    //             // Append to html link element page
    //             document.body.appendChild(link);
    //
    //             // Start download
    //             link.click();
    //
    //             // Clean up and remove the link
    //             link.parentNode.removeChild(link);
    //         });
    // }

    render() {
        return (
            <div className="container-contact100">
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
                        <div>
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
                                    <label>Choose Image/Video</label>
                                </div>


                                <div className="col-75">
                                    <div className="selected-choose-type-container">
                                        {/*<input onClick={this.chooseGoogleFileBtnPressed} type="button" value="Choose image from Google Drive"/>*/}
                                        {/*<button onClick={this.handleOpenPicker}>Open Picker</button>*/}

                                        {/*TODO:*/}
                                        <GooglePicker
                                            // clientId={'801360513499-u7sc20pvp4nkkigtgvnnaajp4hcq4ate.apps.googleusercontent.com'}
                                            clientId={constants.CLIENT_ID}
                                            // developerKey={'AIzaSyBJG2E08YMitCRBQSzyuJX6I57MOhfXrRs'}
                                            developerKey={constants.API_KEY}
                                            scope={['https://www.googleapis.com/auth/drive.readonly']}
                                            onChange={data => console.log('on change:', data)}
                                            onAuthFailed={data => console.log('on auth failed:', data)}
                                            multiselect={true}
                                            navHidden={true}
                                            authImmediate={false}
                                            // mimeTypes={['image/png', 'image/jpeg', 'image/jpg']}
                                            query={'a query string like .txt or fileName'}
                                            viewId={'DOCS'} onChange={data => console.log('on change:', data)}
                                            onAuthFailed={data => console.log('on auth failed:', data)}
                                            multiselect={true}
                                            navHidden={true}
                                            authImmediate={false}
                                            // viewId={'FOLDERS'}
                                            createPicker={(google, oauthToken) => {
                                                const googleViewId = google.picker.ViewId.FOLDERS;
                                                const docsView = new google.picker.DocsView(googleViewId)
                                                    .setIncludeFolders(true)
                                                    // .setMimeTypes('application/vnd.google-apps.folder')
                                                    .setMimeTypes('application/vnd.google-apps.file')
                                                    .setSelectFolderEnabled(true);

                                                const picker = new window.google.picker.PickerBuilder()
                                                    .addView(docsView)
                                                    .setOAuthToken(oauthToken)
                                                    .setCallback((data) => {


                                                        if (data.action === 'picked') {

                                                            console.log(data.docs[0].mimeType)
                                                            if (data.docs[0].mimeType === 'image/jpeg') {
                                                                this.setState({
                                                                    selected_file_type: 'image',
                                                                    google_selected_file_data: data.docs[0]
                                                                }, () => {
                                                                    this.fillGoogleDriveImagePreviewer();
                                                                });
                                                            } else if (data.docs[0].mimeType === 'video/mp4') {
                                                                this.setState({
                                                                    selected_file_type: 'video',
                                                                    google_selected_file_data: data.docs[0]
                                                                }, () => {
                                                                    this.fillGoogleDriveVideoPreviewer();
                                                                });
                                                            } else {
                                                                alert('Invalid file selected. Please select a photo or video')
                                                            }


                                                        }

                                                    });

                                                picker.build().setVisible(true);
                                            }}
                                        >
                                            <span>Click here to choose file from google drive</span>
                                            <div className="google"></div>
                                        </GooglePicker>

                                    </div>
                                </div>
                            </div>


                            <div className="row">
                                <div className="col-25">

                                    {this.state.google_selected_file_data !== null && this.state.selected_file_type === 'image' &&
                                    <label>
                                        Picked Image
                                    </label>}
                                    {this.state.google_selected_file_data !== null && this.state.selected_file_type === 'video' &&
                                    <label>
                                        Picked Video
                                    </label>}

                                </div>
                                <div className="col-75">
                                    {this.state.google_selected_file_data !== null && this.state.selected_file_type === 'image' &&
                                    <div>
                                        <img src={this.state.google_drive_img_preview}
                                             alt="Loading... " width="512" height="288"/>
                                    </div>}

                                    {this.state.google_selected_file_data !== null && this.state.selected_file_type === 'video' &&
                                    <div>
                                        <video width="450px" controls="controls" preload="metadata">
                                            <source src={this.state.google_drive_video_preview + "#t=0.5"}
                                                    type="video/mp4"/>
                                        </video>
                                    </div>}


                                </div>


                            </div>
                            <div style={{height: "20px"}}> </div>

                            <div className="row">
                                {/*<input type="submit" value="Submit"/>*/}
                                <button type="button" className="btn btn-success" onClick={this.submitPressed}>Submit
                                </button>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        )
    }
}

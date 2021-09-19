import React, {Component} from 'react';
import '../css/sell.css';
import '../css/util.css';
import sell_bg from '../assets/images/sell-bg.jpg'


import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import AuthService from "../services/auth.service";

// import GooglePicker from '../';
import GooglePicker from 'react-google-picker';

// import  { useEffect } from 'react';
// import useDrivePicker from 'react-google-drive-picker'

export default class Sell extends Component {


    constructor(props) {
        super(props);
        this.state = {
            file_select_type: 'local',

            selected_file_type:'',  //image, video

            google_selected_file_data:null,
            google_drive_img_preview :'',
            google_drive_video_preview :''
        };

        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
    }

    handleChange(event) {
        if (event.target.value === 'local') {
            this.setState({file_select_type: 'local'});
        } else if (event.target.value === 'drive') {
            this.setState({file_select_type: 'drive'});
        }

    }

    chooseGoogleFileBtnPressed() {

        const currentUser = AuthService.getCurrentUser();

        // console.log(currentUser)
        console.log(currentUser.type)
        if (currentUser === 'general') {
        // google login with permission

        }else if (currentUser === 'google') {
        // get permission

        }

    }

    fillGoogleDriveImagePreviewer(){
        this.setState({google_drive_img_preview: 'https://drive.google.com/uc?export=view&id='+this.state.google_selected_file_data.id});
    }
    fillGoogleDriveVideoPreviewer(){
        console.log("%%%")
        console.log(this.state.google_selected_file_data)
        // google_drive_video_preview
        this.setState({google_drive_video_preview: 'https://drive.google.com/uc?export=view&id='+this.state.google_selected_file_data.id});
    }


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
                                            </span>
                                    </RadioGroup>
                                    {/*value={value} onChange={handleChange}*/}
                                    <div className="col-75">

                                        {this.state.file_select_type === "local" && <span>
                                        <div className="selected-choose-type-container">
                                            {/*Local Image Picker start*/}
                                            {/*<p>Local file selector</p>*/}
                                            <input type="file"
                                                   id="avatar" name="avatar"
                                                   accept="image/png, image/jpeg"/>
                                            {/*Local Image picker end*/}
                                        </div>
                                    </span>}

                                        {this.state.file_select_type === "drive" && <span>
                                        <div className="selected-choose-type-container">
                                            {/*<input onClick={this.chooseGoogleFileBtnPressed} type="button" value="Choose image from Google Drive"/>*/}
                                            {/*<button onClick={this.handleOpenPicker}>Open Picker</button>*/}

                                            <GooglePicker clientId={'801360513499-u7sc20pvp4nkkigtgvnnaajp4hcq4ate.apps.googleusercontent.com'}
                                                          developerKey={'AIzaSyBJG2E08YMitCRBQSzyuJX6I57MOhfXrRs'}
                                                          scope={['https://www.googleapis.com/auth/drive.readonly']}
                                                          onChange={data => console.log('on change:', data)}
                                                          onAuthFailed={data => console.log('on auth failed:', data)}
                                                          multiselect={true}
                                                          navHidden={true}
                                                          authImmediate={false}
                                                          // mimeTypes={['image/png', 'image/jpeg', 'image/jpg']}
                                                          query={'a query string like .txt or fileName'}
                                                          viewId={'DOCS'}  onChange={data => console.log('on change:', data)}
                                                          onAuthFailed={data => console.log('on auth failed:', data)}
                                                          multiselect={true}
                                                          navHidden={true}
                                                          authImmediate={false}
                                                          // viewId={'FOLDERS'}
                                                          createPicker={ (google, oauthToken) => {
                                                              const googleViewId = google.picker.ViewId.FOLDERS;
                                                              const docsView = new google.picker.DocsView(googleViewId)
                                                                  .setIncludeFolders(true)
                                                                  // .setMimeTypes('application/vnd.google-apps.folder')
                                                                  .setMimeTypes('application/vnd.google-apps.file')
                                                                  .setSelectFolderEnabled(true);

                                                              const picker = new window.google.picker.PickerBuilder()
                                                                  .addView(docsView)
                                                                  .setOAuthToken(oauthToken)
                                                                  // .setDeveloperKey('AIzaSyBJG2E08YMitCRBQSzyuJX6I57MOhfXrRs')
                                                                  .setCallback((data)=>{



                                                                      if(data.action === 'picked'){

                                                                          console.log(data.docs[0].mimeType)
                                                                          if(data.docs[0].mimeType=== 'image/jpeg'){
                                                                              this.setState({
                                                                                  selected_file_type:'image',
                                                                                  google_selected_file_data: data.docs[0]
                                                                              }, () => {
                                                                                  this.fillGoogleDriveImagePreviewer();
                                                                              });
                                                                          }else if(data.docs[0].mimeType=== 'video/mp4'){
                                                                              this.setState({
                                                                                  selected_file_type:'video',
                                                                                  google_selected_file_data: data.docs[0]
                                                                              }, () => {
                                                                                  this.fillGoogleDriveVideoPreviewer();
                                                                              });
                                                                          }else{
                                                                              alert('Invalid file selected. Please select a photo or video')
                                                                          }


                                                                      }

                                                                  });

                                                              picker.build().setVisible(true);
                                                          }}
                                            >
                                                <span>Click</span>
                                                <div className="google"></div>
                                            </GooglePicker>

                                        </div>
                                    </span>}

                                    </div>
                                </div>
                            </div>


                            <div className="row">
                                <div className="col-25">

                                    {this.state.google_selected_file_data !== null && this.state.selected_file_type ==='image' &&<label>
                                        Picked Image
                                    </label>}
                                    {this.state.google_selected_file_data !== null && this.state.selected_file_type ==='video' &&<label>
                                        Picked Video
                                    </label>}

                                </div>
                                <div className="col-75">
                                    {this.state.google_selected_file_data !== null && this.state.selected_file_type ==='image' &&<div>
                                        <img src={this.state.google_drive_img_preview}
                                            alt="Loading... " width="256" height="144"/>
                                    </div>}

                                    {this.state.google_selected_file_data !== null && this.state.selected_file_type ==='video' &&<div>
                                        <video width="256px" controls="controls" preload="metadata">
                                            <source src={this.state.google_drive_video_preview+"#t=0.5"} type="video/mp4"/>
                                        </video>
                                    </div>}



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

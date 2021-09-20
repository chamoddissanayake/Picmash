import axios from "axios";
import AuthService from "./auth.service";

const API_URL = "http://localhost:8001/api/sell/";

class SellService {
    sellSubmit(selected_file_type, google_selected_file_data, google_drive_img_preview, google_drive_video_preview) {

        const currentUser = AuthService.getCurrentUser();
        console.log(currentUser)
        //If Photo
        if (selected_file_type === 'image') {
            return axios
                .post(API_URL + "image", {
                  currentUser,
                  google_selected_file_data,
                  google_drive_img_preview
                })
                .then(response => {
                  return response.data;
                });
        } else if (selected_file_type === 'video') {
            // If Video
            return axios
                .post(API_URL + "video", {
                  currentUser,
                  google_selected_file_data,
                  google_drive_video_preview
                })
                .then(response => {
                  return response.data;
                });
        }
    }
}

export default new SellService();

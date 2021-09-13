import axios from "axios";

const API_URL = "http://localhost:8001/api/auth/";

class AuthService {
  login(username, password) {
    return axios
      .post(API_URL + "signin", {
        username,
        password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
          localStorage.setItem("type", "general");
        }

        return response.data;
      });
  }

  logout() {

    const logged_in_user_type = localStorage.getItem("type");
    if(logged_in_user_type=='general'){
      localStorage.removeItem("user");
      localStorage.removeItem("type");
    }

  }

  register(username, email, password) {
    return axios.post(API_URL + "signup", {
      username,
      email,
      password
    });
  }

  getCurrentUser() {
    const logged_in_user_type = localStorage.getItem("type");
    if(logged_in_user_type=='general'){
      const logged_in_user ={
        "user":localStorage.getItem('user'),
        "type":localStorage.getItem('type')
      }
      return logged_in_user;
    }
    return null


  }
}

export default new AuthService();

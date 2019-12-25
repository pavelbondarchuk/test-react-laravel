import axios from 'axios';

export default class Post{
  static getAll (page = 1, limit = 5){
    return axios({
      url: "http://api-reddit.local/api/posts?page="+page+'&limit='+limit,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    })
    .then(response => {
      return response.data;
    }).catch(error => {
      return [];
    });
  }
}

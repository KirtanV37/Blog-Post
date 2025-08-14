// https://jsonplaceholder.typicode.com/posts
// https://picsum.photos/300/400
// https://picsum.photos/384/284

import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.response.use(
  (response) => {
    console.log("Response received", response);
    return response;
  },
  (error) => {
    if (error.response) {
      console.error("❌ Error Response Data:", error.response.data);
      console.error("⚠️ Status Code:", error.response.status);
    } else if (error.request) {
      console.error("⏳ No Response from Server:", error.request);
    } else {
      console.error("⚠️ Error Message:", error.message);
    }
    return Promise.reject(error);
  }
);

export default api;

export const getPosts = () => api.get("/posts");
export const getPost = (id) => api.get(`/posts/:${id}`);
/* ?_page=1&_limit=10 */

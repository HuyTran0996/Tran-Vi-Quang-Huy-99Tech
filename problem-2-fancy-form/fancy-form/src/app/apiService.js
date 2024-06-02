import axios from "axios";

const BASE_URL = "https://interview.switcheo.com/prices.json";
// const TOKEN = process.env.REACT_APP_READ_ACCESS_TOKEN;

const apiService = axios.create({
  baseURL: BASE_URL,
});

apiService.interceptors.request.use(
  (req) => {
    // req.headers.Authorization = `Bearer ${TOKEN}`;
    console.log("Start request", req);
    return req;
  },
  (err) => {
    console.log("Request Error", err);
    return Promise.reject(err.reject.data);
  }
);

apiService.interceptors.response.use(
  (res) => {
    console.log("Response", res);
    return res;
  },
  (err) => {
    console.log("Response Error", err);
    return Promise.reject(err.reject.data);
  }
);
export { apiService };

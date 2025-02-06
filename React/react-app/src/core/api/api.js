import axios from "axios";

const API_BASE_URL ='https://jsonplaceholder.typicode.com';

const api = axios.create({
    baseURL:API_BASE_URL,
    headers:{
        "Content-Type":"application/json"
    }
});

api.interceptors.request.use(
    (config)=>{
        console.log("request sent ",config);
        return config;
    },
    (error) => Promise.reject(error)
);

api.interceptors.response.use(
    (response)=>{
        console.log("response received ",response);
        return response;
    },
    (error) => Promise.reject(error)
);

export default api;
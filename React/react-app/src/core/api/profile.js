import axios from "axios";

const API_BASE_URL ='https://jsonplaceholder.typicode.com/users';

const profile = axios.create({
    baseURL:API_BASE_URL,
    headers:{
        "Content-Type":"application/json"
    }
});
export default profile
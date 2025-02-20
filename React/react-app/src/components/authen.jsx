import axios from "axios";
axios.interceptors.request.use((config) => {
    const token = localStorage.getItem('auth_token');
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    console.log('Request sent', config);
    return config;
},
    (error) => {
        return Promise.reject(error);
    }
)
axios.interceptors.response.use((response) => {
    (response) => {
        console.log('response received', response);
        return response;
    },
        (error) => {
            if (error.reponse && error.response.status === 401) {
                console.log('redirect ');
                window.location.href = './forms'
            }
            return Promise.reject(error);
        }
})
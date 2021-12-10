import axios from "axios";

export const getLocalToken = () => {
    const token = window.localStorage.getItem('accessToken')
    return token
};

export const setToken = (accessToken) => {
    client.defaults.headers['Authorization'] ='Bearer ' + accessToken
    window.localStorage.setItem('accessToken', 'Bearer ' + accessToken)
};

export const destroyToken = () => {
    window.localStorage.removeItem('accessToken')
}

const client = axios.create({
    baseURL: process.env.baseURL,
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Authorization' : getLocalToken()
    },
});

client.interceptors.request.use(config => {
    return config
}, error => {
    return Promise.reject(error)
});

client.interceptors.response.use(async (response) => {
   
    return response.data
}, error => {
    return Promise.reject(error)
});

export default client;

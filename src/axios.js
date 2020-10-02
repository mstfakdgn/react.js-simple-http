import axios from 'axios';

const instance = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com',
});

instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN NEW INSTANCE';

/**
 * 
 * axios.interceptors.request.use(request => {
    console.log(request);
    //Edit request like adding header
    return request;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

axios.interceptors.response.use(response => {
    console.log(response);
    return response;
}, error => {
    console.log(error);
    return Promise.reject(error);
});
 */

 
export default instance;
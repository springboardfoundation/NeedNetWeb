import axios from 'axios';

const httpInstance = axios.create({
    baseURL: ' http://localhost:9001/',
});

export default httpInstance;
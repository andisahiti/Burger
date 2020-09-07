import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://myburger-4fab9.firebaseio.com/'
});

export default instance;
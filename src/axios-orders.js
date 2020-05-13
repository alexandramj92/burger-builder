import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-61694.firebaseio.com/'
});

export default instance;
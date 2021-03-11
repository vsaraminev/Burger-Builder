import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-c55f6-default-rtdb.firebaseio.com/'
});

export default instance;
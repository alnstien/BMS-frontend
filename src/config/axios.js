import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://esperanza-db.herokuapp.com',
    withCredentials: true
});

export default instance;
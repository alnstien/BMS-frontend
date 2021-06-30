import axios from 'axios'

const instance = axios.create({
    // baseURL: 'http://192.168.1.3:51219',
    baseURL:' https://esperanza-db.herokuapp.com',
    withCredentials: false
})

export default instance;
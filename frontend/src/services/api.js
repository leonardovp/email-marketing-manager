import axios from 'axios'
import Auth from './auth'

const api = axios.create({
    baseURL: 'http://localhost:4001/'
})

api.interceptors.request.use(async (config) =>{

    const token = Auth.getToken();

    if(token){
        config.headers['x-access-token'] = token
    }

    return config;

})

export default api;
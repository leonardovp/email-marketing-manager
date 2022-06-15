import axios from 'axios'
import Auth from './auth'

const baseApi = (baseUrl) => {

    const api = axios.create({
        baseURL: baseUrl
    })
    
    api.interceptors.request.use(async (config) =>{
    
        const token = Auth.getToken();
    
        if(token){
            config.headers['x-access-token'] = token
        }
    
        return config;
    
    })   

    return api;
}

export default baseApi
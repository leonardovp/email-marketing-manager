import baseApi from "./api";
import baseURLs from "../configs/baseURLs";

class AccountsService {

    constructor(){
        this.api = baseApi(baseURLs.API_ACCOUNTS);
    }   

    signup = async (userModel) => {

        const result = await this.api.post('accounts', userModel);

        return result;
    }

    signin = async (email, password) => {

        const result = await this.api.post('accounts/login', {email, password});

        return result;
    }     

    getAccounts = async () =>{

        const result = await this.api.get('accounts');       

        return result.data;

    }

}

export default AccountsService
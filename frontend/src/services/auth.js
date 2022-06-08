const TOKEN_KEY = "aplicacao-token";

const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) != null;

const getToken = () => localStorage.getItem(TOKEN_KEY);

const login = (token) => {
    localStorage.setItem(TOKEN_KEY, token);
}

const logout = () => {
    
    localStorage.removeItem(TOKEN_KEY);
}

export default {isAuthenticated, getToken, login, logout};


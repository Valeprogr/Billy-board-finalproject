import { createContext } from "react";


export const AuthContext = createContext({
    token: null,
    company: null,
    userId:null,
    login: () => {},
    logout: () => {},
    isAuthenticated: false
});


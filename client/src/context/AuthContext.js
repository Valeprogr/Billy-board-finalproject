import { createContext } from "react";


export const AuthContext = createContext({
    token: null,
    company: null,
    login: () => {},
    logout: () => {},
    isAuthenticated: false
});


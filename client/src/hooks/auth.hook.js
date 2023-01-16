import {useState, useCallback, useEffect} from "react";


//Funzione che esporta altre funzioni (vedi App.js)
export const useAuth = () => {
    const [token, setToken] = useState(null);
    const [ready, setReady] = useState(false);
    const [company, setCompany] = useState(null);
    const storageName = 'userData';

    const login = useCallback((jwtToken, company_name) => {
        setToken(jwtToken);
        setCompany(company_name);

        localStorage.setItem(storageName, JSON.stringify({
            company: company_name,
            token: jwtToken
        }));
    }, []);

    const logout = useCallback(() => {
        setToken(null);
        setCompany(null);
        localStorage.removeItem(storageName);
    }, []);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem(storageName));
        if (data && data.token) {
            login(data.token, data.company);
        }
        setReady(true);
    }, [login]);
    return {login, logout, token, company, ready}
}


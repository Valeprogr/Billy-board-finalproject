import {useState, useCallback, useEffect} from "react";


//Funzione che esporta altre funzioni (vedi App.js)
export const useAuth = () => {
    const [token, setToken] = useState(null);
    const [ready, setReady] = useState(false);
    const [companyName, setCompanyName] = useState(null);
    const storageName = 'userData';

    const login = useCallback((jwtToken, company_name) => {
        setToken(jwtToken);
        setCompanyName(company_name);

        localStorage.setItem(storageName, JSON.stringify({
            company: company_name,
            token: jwtToken
        }));
    }, []);

    const logout = useCallback(() => {
        setToken(null);
        companyName(null);
        localStorage.removeItem(storageName);
    }, []);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem(storageName));
        if (data && data.token) {
            login(data.token, data.company_name);
        }
        setReady(true);
    }, [login]);
    return {login, logout, token, companyName, ready}
}


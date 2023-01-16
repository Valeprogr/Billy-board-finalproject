import {useState, useCallback, useEffect} from "react";


//Funzione che esporta altre funzioni (vedi App.js)
export const useAuth = () => {
    const [token, setToken] = useState(null);
    const [ready, setReady] = useState(false);
    const [company, setCompany] = useState(null);
    const [userId, setUserId]=useState(null);
    const storageName = 'userData';

    const login = useCallback((jwtToken, company_name,user_id) => {
        setToken(jwtToken);
        setCompany(company_name);
        setUserId(user_id);

        localStorage.setItem(storageName, JSON.stringify({
            company: company_name,
            token: jwtToken,
            userId: user_id
        }));
    }, []);

    const logout = useCallback(() => {
        setToken(null);
        setCompany(null);
        setUserId(null)
        localStorage.removeItem(storageName);
    }, []);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem(storageName));
        if (data && data.token) {
            login(data.token, data.company,data.userId);
        }
        setReady(true);
    }, [login]);
    return {login, logout, token, company,userId, ready}
}


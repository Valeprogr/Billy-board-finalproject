import {React, useContext, useEffect, useState} from 'react';
import { AuthContext } from '../../context/AuthContext';
import "./login.css"
import { useHttp } from '../../hooks/http.hook';
import { useMessage } from '../../hooks/message.hook';
import Btnspinner from "../../btnSpinner/BtnSpinner";
import { Toaster } from "react-hot-toast";

const REACT_APP_URL_CYCLIC=process.env.REACT_APP_URL_CYCLIC;

const Login = () => {
    const auth = useContext(AuthContext);
    const {loading, request, error, clearError} = useHttp();
    const message = useMessage();
    const [form, setForm] = useState({
        email: '',
        password: ''
    });

  
    

    useEffect(() => {
        message(error);
        clearError();

    }, [error, message, clearError]);

    const changeHandler = (event)=>{
        setForm({...form, [event.target.name]: event.target.value})
    }

    const loginHandler = async(event) => {
        event.preventDefault();
        try {
            const data = await request(`${REACT_APP_URL_CYCLIC}login`, 'POST', {...form});
            auth.login(data.token, data.company_name,data.user_id);
           //console.log(data.company_name)
          
            
        } catch (e) {
        }
    }
    
    
    return (
        <div id='login' className='login-body'>
        <Toaster />
        <div className='login-box'>
        <h1>Login</h1>
            <hr></hr>
            <form>
                <label for="user-email">Email</label><br/>
                <input type="text"
                placeholder='enter email'
                name='email'
                value={form.email}
                onChange={changeHandler}></input><br/>
                <label for="user-password">Password</label><br/>
                <input type="password"
                placeholder='password'
                name="password"
                value={form.password}
                onChange={changeHandler}
                ></input><br/>
                <button type="submit" 
                className='btn btn-secondary btn-login'
                disabled={loading}
                onClick={loginHandler}>
                    Login
                    {loading && <Btnspinner />}
                </button>
            </form>
            <a href='/signin'><p className='my-2'>Don't have an account?</p></a>
        </div>
          
        </div>
    );
}

export default Login;

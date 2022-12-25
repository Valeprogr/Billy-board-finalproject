import {React, useContext, useEffect, useState} from 'react';
import { AuthContext } from '../../context/AuthContext';
import "./login.css"
import { useHttp } from '../../hooks/http.hook';
import { useMessage } from '../../hooks/message.hook';


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

    const loginHandler = async() => {
        try {
            const data = await request
        } catch (e) {
            
        }
    }

    return (
        <div id='login' className='login-body'>
        <div className='login-box'>
        <h1>Login</h1>
            <hr></hr>
            <form>
                <label for="user-email">Email</label><br/>
                <input type="text"></input><br/>
                <label for="user-password">Password</label><br/>
                <input type="text"></input><br/>
                <input type="submit" value="Login" className='btn btn-secondary'></input>
            </form>
            <p>Don't have an account?</p>
        </div>
          
        </div>
    );
}

export default Login;

import React,{useEffect, useState} from 'react';
//import { AuthContext } from '../../context/AuthContext';
import { useMessage } from '../../hooks/message.hook';
import { useHttp } from '../../hooks/http.hook';

import "./signin.css";

import Btnspinner from "../../btnSpinner/BtnSpinner";
import { Toaster } from "react-hot-toast";

const REACT_APP_URL_CYCLIC=process.env.REACT_APP_URL_CYCLIC;
const Signin = () => {
     //const auth = useContext(AuthContext);
     //console.log(auth)
    const {loading, request, error, clearError} =useHttp();
    const message= useMessage();
    const [form,setForm]=useState({
        name:"",
        lastname:"",
        email:"",
        password:"",
        company_name:"",
        user_occupation:"ceo"
    });
    useEffect(()=>{
        message(error);
        clearError();
    },[error,message,clearError]);

    const changeHandler = event =>{
        setForm({...form, [event.target.name]: event.target.value});
    }

    const registerHandler = async (event)=>{
        event.preventDefault();
        try{
            console.log(form)
            const data = await request(`${REACT_APP_URL_CYCLIC}signin`,'POST', {...form});
            message(data);
        }catch(error){
           
            
        }
    }

    return (
        <div id='signin'>
        <Toaster />
            <div id='login' className='signin-body'>
                <div className='signin-box'>
                <div className="text">
                <h1>Sign Up</h1>
                    <hr className="horizontalLine"></hr>
                    <form>
                        <label htmlFor="name">Name:</label><br />
                        <input type="text" name='name' onChange={changeHandler} value={form.name}></input><br />

                        <label htmlFor="lastname">Last Name:</label><br />
                        <input type="text" name="lastname" onChange={changeHandler} value={form.lastname}></input><br />

                        <label htmlFor="email">Email:</label><br />
                        <input type="text" name='email' onChange={changeHandler} value={form.email}></input><br />

                        <label htmlFor="password">Password:</label><br />
                        <input type="password" name='password' onChange={changeHandler} value={form.password}></input><br />

                        <label htmlFor="company_name">Company Name:</label><br />
                        <input type="text" id="company-name" name='company_name' onChange={changeHandler} value={form.company_name}/><br />
                       
                        <a href='/login'><h6 className='h6-text'>Do you have already an account ? Click here!</h6></a>
                        <button type="submit" value="Sign in" className='btn btn-secondary' onClick={registerHandler} disabled={loading}>
                            {loading && <Btnspinner />}
                            Sign Up
                        </button>
                    </form>
                </div>
                    
                </div>

            </div>
        </div>
    );
}

export default Signin;

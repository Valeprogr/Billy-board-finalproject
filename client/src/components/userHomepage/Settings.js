import React, { useState, useEffect,useContext } from 'react';
import "./settings.css";
import { useMessage } from '../../hooks/message.hook';
import { useHttp } from '../../hooks/http.hook';
import BtnSpinner from '../../btnSpinner/BtnSpinner';
import { Toaster } from 'react-hot-toast';
import { AuthContext } from '../../context/AuthContext';

const REACT_APP_URL_CYCLIC = process.env.REACT_APP_URL_CYCLIC;
const Settings = () => {
    const { loading, request, error, clearError } = useHttp();
    const message = useMessage();
    const auth=useContext(AuthContext);
    
    const [form, setForm] = useState({
        _id: "",
        name: "",
        lastname: "",
        email: "",
        password: "",
        user_occupation:''
    })
    
    useEffect(() => {
        message(error);
        clearError();

    }, [error, message, clearError])


    const changeHandler = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value });
        console.log(form)
    }

    const upDateUser = async (event) => {
        event.preventDefault();
        try {
            console.log(form)
            
            const data = await request(`${REACT_APP_URL_CYCLIC}user/settings`, 'PUT', { ...form, _id: auth.userId });
            message(data)
        } catch (error) {

        }
    }
    return (
        <div className='container-body-settings'>
            <Toaster />
            <h1>Settings</h1>
            <hr></hr>
            <div className='containair-box-settings'>
                <form>
                    <div>
                        <label htmlFor='name'>Name: </label>
                        <br></br>
                        <input type="text" name='name' onChange={changeHandler}></input>
                        <br></br>
                        <label htmlFor="lastname">Last Name: </label>
                        <br></br>
                        <input type="text" name='lastname' onChange={changeHandler}></input>
                        <br></br>
                        <label htmlFor='email'>Email:</label>
                        <br></br>
                        <input type="text" name='email' onChange={changeHandler}></input>
                        <br></br>
                        <label htmlFor='password'>New Password:</label>
                        <br></br>
                        <input type="password" name='password' onChange={changeHandler}></input>
                        <br></br>
                        <label htmlFor='password'>Occupation:</label>
                        <br></br>
                        <input type="text" name='user_occupation' onChange={changeHandler}></input>
                    </div>
                    <div className='btn-container'>
                        <button type="submit" className="btn btn-secondary" onClick={upDateUser}>
                            {loading && <BtnSpinner />}
                            Save Profile</button>
                    </div>

                </form>
            </div>
        </div>
    );
}

export default Settings;
import React, { useState, useEffect, useContext } from 'react';
import "./createProject.css";
import { useMessage } from '../../hooks/message.hook';
import { useHttp } from '../../hooks/http.hook';
import Btnspinner from "../../btnSpinner/BtnSpinner";
import { Toaster } from "react-hot-toast";
import { AuthContext } from '../../context/AuthContext.js';

const REACT_APP_URL_CYCLIC=process.env.REACT_APP_URL_CYCLIC;
const CreateNewEmployee = () => {
    const { loading, request, error, clearError } = useHttp();
    const message = useMessage();
    const auth = useContext(AuthContext);
    //console.log(auth.company)

    //Salvare l opzione
    const [form, setForm] = useState({
        name: '',
        lastname: '',
        email: '',
        password: '',
        user_occupation: '',
        company_name: auth.company,
        its_Admin: false
    });
    useEffect(() => {
        message(error);
        clearError();
    }, [error, message, clearError]);

    const changeHandler = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value });
        console.log(form)

    }

    const createUser = async (event) => {
        event.preventDefault();
        try {
            const data = await request(`${REACT_APP_URL_CYCLIC}createNewEmployee`, 'POST', { ...form });
            message(data);

        } catch (event) {

        }

    }
    return (
        <div id="createNewEmployee">
        
                <div className='container'>
                    <Toaster />
                    <div className=''>
                        <h1>Create a new Employee</h1>
                        <hr></hr>
                    </div>

                    <div className='form-container-createPro'>
                        <form>
                            <label htmlFor="name">Name:</label>
                            <br />
                            <input type="text" name='name' onChange={changeHandler}></input>
                            <br />
                            <label htmlFor="lastname">Last Name:</label>
                            <br />
                            <input type="text" name='lastname' onChange={changeHandler}></input>
                            <br />
                            <label htmlFor="email">Email:</label>
                            <br />
                            <input type="text" name='email' onChange={changeHandler}></input>
                            <br />
                            <label htmlFor="password">Password:</label>
                            <br />
                            <input type="password" name='password' onChange={changeHandler}></input>
                            <br />
                            <label htmlFor="occupation">Occupation:</label>
                            <br />
                            <input type="text" name='user_occupation' onChange={changeHandler}></input>
                            <div className='btn-container-create-project'>
                                <button type="submit" class="btn btn-secondary" onClick={createUser}>Save Profile
                                    {loading && <Btnspinner />}
                                </button>
                            </div>

                        </form>
                    </div>

                </div>
        </div>
    );
}

export default CreateNewEmployee;

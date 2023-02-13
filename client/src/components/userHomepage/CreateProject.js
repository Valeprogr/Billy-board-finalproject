import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useMessage } from '../../hooks/message.hook';
import { useHttp } from '../../hooks/http.hook';
import "./createProject.css"
import { Toaster } from 'react-hot-toast';
import BtnSpinner from '../../btnSpinner/BtnSpinner';
const REACT_APP_URL_CYCLIC=process.env.REACT_APP_URL_CYCLIC;
const CreateProject = () => {
    //Nel dropdown devo fetchare tutte le email per poterli insirire nel dropdown
    const { loading, request, error, clearError } = useHttp();
    const message = useMessage();
    const auth = useContext(AuthContext)
    //console.log(auth)
    const [form, setForm] = useState({
        name: "",
        location: "",
        start_date: "",
        end_date: "",
        company_name: auth.company,
        description: ""
    })
    useEffect(() => {
        message(error);
        clearError()
    }, [error, message, clearError])

    const changeHandler = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value });
        console.log(form)
    }
    const createProject = async (event) => {
        event.preventDefault();
        try {
            const data = await request(`${REACT_APP_URL_CYCLIC}createProject`, 'POST', { ...form });
            message({message:"Project created!"})
        } catch (error) {

        }
    }

    return (
        <div className='container-create-project'>
            <Toaster />
            <div className=''>
                <h1>Create a new Project</h1>
                <hr></hr>
            </div>

            <div>
                <form className='form-container-createPro'>
                    <label htmlFor='name'>Project Name:</label>
                    <br />
                    <input type="text" name='name' onChange={changeHandler} ></input>
                    <br />
                    <label htmlFor='location'>Location:</label>
                    <br />
                    <input type="text" name='location' onChange={changeHandler} ></input>
                    <br />
                    <label htmlFor='start_date'>Start Date:</label>
                    <br />
                    <input type="text" name='start_date' onChange={changeHandler} placeholder="es. dd.mm.yyyy"></input>
                    <br />
                    <label htmlFor='end_date'>End Date:</label>
                    <br />
                    <input type="text" name='end_date' onChange={changeHandler} placeholder="es. dd.mm.yyyy"></input>
                    <br />
                    <label htmlFor='description'>Description:</label>
                    < br />
                    <textarea name='description' onChange={changeHandler} cols="40"
                        rows="5" />
                    <div className='btn-container-create-project'>
                        <button type="submit" class="btn btn-secondary" onClick={createProject}>Create Project
                            {loading && <BtnSpinner />}</button>
                    </div>

                </form>
            </div>

        </div>
    );
}

export default CreateProject;

import React, { useEffect, useState } from 'react';
import { useHttp } from '../../../hooks/http.hook';
import { useMessage } from '../../../hooks/message.hook';
import BtnSpinner from '../../../btnSpinner/BtnSpinner';
import { Toaster } from 'react-hot-toast';
import "./createNewTask.css";



const REACT_APP_URL_CYCLIC = process.env.REACT_APP_URL_CYCLIC;

const CreateNewTask = ({ project, show }) => {
    const [close, setClose] = useState(show);
    //console.log(close)

    const { loading, request, error, clearError } = useHttp();
    const message = useMessage();
    const [form, setForm] = useState({
        title: "",
        text: "",
        "done": false,
        "todoList_id": project.todo_list

    })
    const changeHandler = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value });
        //console.log(form)
    }
    useEffect(() => {
        message(error);
        clearError()
    }, [error, message, clearError])

    const createTask = async (event) => {
        event.preventDefault();
        try {
            const data = await request(`${REACT_APP_URL_CYCLIC}createNewTask`, 'POST', { ...form });
            message(data)
        } catch (error) {

        }
    }
    return (
        <>
            {close ?
                <div className='modal-body'>
                    <div class="modaldiv  card">
                        <div className='modal-content'>
                            <div className='title-btn-container'>
                            <h1>Create your Task!</h1>
                           
                                <span onClick={() => setClose(false)} class="material-symbols-outlined">
                                    close
                                </span>
                    
                                
                            </div>
                            <hr/>
                            <Toaster />
                            <form className='form-container-createPro'>
                                <label htmlFor='title'>Title:</label>
                                <br />
                                <input type="text" name='title' onChange={changeHandler}></input>
                                <br />
                                <label htmlFor='text'>Task:</label>
                                < br />
                                <textarea name='text' onChange={changeHandler} cols="40"
                                    rows="5" />
                                <div className='btn-container-create-project'>
                                    <button type="submit" class="btn btn-secondary" onClick={createTask}>Create Task
                                        {loading && <BtnSpinner />}</button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
                :
                null
            }
        </>
    );
}

export default CreateNewTask;

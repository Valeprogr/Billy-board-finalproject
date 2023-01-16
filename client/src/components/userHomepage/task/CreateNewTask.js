import React,{useEffect,useState,useContext} from 'react';
import { useHttp } from '../../../hooks/http.hook';
import { AuthContext } from '../../../context/AuthContext';
import { useMessage } from '../../../hooks/message.hook';
import BtnSpinner from '../../../btnSpinner/BtnSpinner';
import { Toaster } from 'react-hot-toast';


const REACT_APP_URL_CYCLIC=process.env.REACT_APP_URL_CYCLIC;
const CreateNewTask = ({project}) => {
    console.log(project)
    const { loading, request, error, clearError } = useHttp();
    const message = useMessage();
    const auth = useContext(AuthContext)
    //console.log(auth)
    const [form, setForm] = useState({
        title: "",
        text: "",
        "done": false,
        "todoList_id": project.todo_list
       
    })
    console.log(form)
    const changeHandler = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value });
        console.log(form)
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
        <div>
            <h1>Create your Task!</h1>
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
    );
}

export default CreateNewTask;

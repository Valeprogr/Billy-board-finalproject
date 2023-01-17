import React, { useState, useEffect } from 'react';
import Task from './Task';
import { useHttp } from "../../../hooks/http.hook";
import CreateNewTask from './CreateNewTask';
import "./taskList.css";
//import CreateNewTask from './CreateNewTask';
const REACT_APP_URL_CYCLIC = process.env.REACT_APP_URL_CYCLIC;



const Tasklist = ({ projects }) => {
    //console.log(projects)
    const { request } = useHttp();
    const [tasks, setTask] = useState([]);
    const [createTask, setCreateTask] = useState(false);

    useEffect(() => {
        const getTask = async () => {
            const data = await request(`${REACT_APP_URL_CYCLIC}todos`, 'POST', { "todoList_id": projects.todo_list });
            setTask(prev => [...data]);
        }
        getTask();
    }, [])
    //console.log(tasks)
    return (
        <>
            <div className='task-list-body'>
                <h4>Task list :</h4>
                {tasks.length !== 0 ?
                    (tasks.map(task => <Task task={task} key={task._id} />))
                    :
                    null}
                <button className="btn btn-outline-secondary" onClick={() => setCreateTask(prev => !prev)}>Create New Task</button>
                {createTask && <CreateNewTask project={projects} show={createTask}/>}
            </div>
        </>
    );
}

export default Tasklist;

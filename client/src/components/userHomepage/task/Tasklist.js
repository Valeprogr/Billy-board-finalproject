import React from 'react';
import Task from './Task';

const Tasklist = () => {
    return (
        <>
            <div>
            <h4>Task list</h4>
                <Task />
               
                <button class="btn btn-secondary btn-projectCard">Create new Task</button>
            </div>
        </>
    );
}

export default Tasklist;

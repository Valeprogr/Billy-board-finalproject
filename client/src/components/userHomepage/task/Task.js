import React from 'react';
import "./task.css"

const Task = ({task}) => {
    //console.log(task)
    return (
        <div>
            <div class="card border-secondary mb-3 card-task">
                <div class="card-body">
                    <h5 class="card-title">{task.title}</h5>
                    <p class="card-text">Description:</p>
                    <p>{task.text}</p>
                </div>
            </div>
        </div>
    );
}

export default Task;

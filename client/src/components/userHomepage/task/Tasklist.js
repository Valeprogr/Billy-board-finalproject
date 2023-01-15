import React from 'react';
import Task from './Task';

const Tasklist = () => {
    return (
        <>
            <div>
            <h4>Task list</h4>
                <Task />
                <div class="card border-warning mb-3">
                {/* <div class="card-header">Header</div> */}
                <div class="card-body ">
                    <h5 class="card-title">Danger card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                {/* <p>Title:</p>
                <p>Description:</p>
                <input type="checkbox" /> */}
            </div>

            <div class="card border-dark mb-3">
                {/* <div class="card-header">Header</div> */}
                <div class="card-body ">
                    <h5 class="card-title">Danger card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                {/* <p>Title:</p>
                <p>Description:</p>
                <input type="checkbox" /> */}
            </div>
                <button class="btn btn-secondary btn-projectCard">Create new Task</button>
            </div>
        </>
    );
}

export default Tasklist;

import React from 'react';
import "./createProject.css"

const CreateProject = () => {
    return (
        <div className='container'>
            <h1>Create a new Employee</h1>
            <hr></hr>
            <form>
                <label>Name:</label>
                <input type="text"></input>
                <label>Last Name:</label>
                <input type="text"></input>
                <label>Email:</label>
                <input type="text"></input>
                <label>Password:</label>
                <input type="text"></input>
                <label>Occupation:</label>
                <input type="text"></input>
                <div>
                <label>Assign Role:</label>
                    <select>
                        <option value="employee" name="employee">Employee</option>
                        <option value="manager" name="manager">Manager</option>
                    </select>
                </div>
                <div className='btn-container-create-project'>
                <button type="button" class="btn btn-secondary">Save Profile</button>
                </div>

            </form>
        </div>
    );
}

export default CreateProject;

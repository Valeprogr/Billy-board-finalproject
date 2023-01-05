import React from 'react';
import "./createProject.css"

const CreateProject = () => {
//Nel dropdown devo fetchare tutte le email per poterli insirire nel dropdown
    return (
        <div className='container'>
            <div className=''>
            <h1>Create a new Project</h1>
            <hr></hr>
            </div>
          
            <div>
            <form className='form-container-createPro'>
                <label>Project Name:</label>
                <br />
                <input type="text"></input>
                <br />
                <label>Description:</label>
                <br />
                <input type="text"></input>
                <br />
                <label>Start Date:</label>
                <br />
                <input type="text"></input>
                <br />
                <label>End Date:</label>
                <br />
                <input type="text"></input>
                <br />
                <label>Select employees:</label>
                
                <div>
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
    
        </div>
    );
}

export default CreateProject;

import React from 'react';
import "./createProject.css"

const CreateNewEmployee = () => {
    return (
        <>
             <div className='container'>
            <div className=''>
            <h1>Create a new Employee</h1>
            <hr></hr>
            </div>
          
            <div className='form-container-createPro'>
            <form>
                <label>Name:</label>
                <br />
                <input type="text"></input>
                <br />
                <label>Last Name:</label>
                <br />
                <input type="text"></input>
                <br />
                <label>Email:</label>
                <br />
                <input type="text"></input>
                <br />
                <label>Password:</label>
                <br />
                <input type="text"></input>
                <br />
                <label>Occupation:</label>
                <br />
                <input type="text"></input>
                <br />
                <label>Assign Role:</label>
                
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
        </>
    );
}

export default CreateNewEmployee;

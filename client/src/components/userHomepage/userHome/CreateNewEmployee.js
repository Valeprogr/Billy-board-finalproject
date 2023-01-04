import React from 'react';
import "./createProject.css"

const CreateNewEmployee = () => {
    return (
        <>
             <div className='container'>
            <div>
            <h1>Create a new Employee</h1>
            <hr></hr>
            </div>
          
            <div>
            <form className='form-container-createPro'>
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
                
                <div className='btn-group'>
                        <button type="button" class="btn btn-sm btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                            <span>Toggle Dropdown</span>
                      
                        {/* <select>
                            <option value="employee" name="employee">Employee</option>
                            <option value="manager" name="manager">Manager</option>
                        </select> */}
                        <ul className='dropdown-menu'>
                            <li>Admin</li>
                            <li>Employee</li>
                        </ul>
                    </button>
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

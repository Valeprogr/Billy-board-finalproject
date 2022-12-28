import React from 'react';

const Settings = () => {
    return (
        <div className='container-body'>
            <h1>Settings</h1>
            <hr></hr>
            <div className='containair-box'>
            <form>
                <div>
                <label>Name: </label>
                <br></br>
                <input type="text"></input>
                <br></br>
                <label>Last Name: </label>
                <br></br>
                <input type="text"></input>
                <br></br>
                <label>Email:</label>
                <br></br>
                <input type="text"></input>
                <br></br>
                <label>New Password:</label>
                <br></br>
                <input type="text"></input>
                <br></br>
                <label>Occupation:</label>
                <br></br>
                </div>
                <div>
                    <select>
                        <option value="employee" name="employee">Employee</option>
                        <option value="manager" name="manager">Manager</option>
                    </select>
                </div>
                <div>
                <button type="button" class="btn btn-secondary">Save Profile</button>
                </div>
               
            </form>
            </div>
        </div>
    );
}

export default Settings;
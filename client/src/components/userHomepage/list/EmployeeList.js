import React from 'react';
import data from "../../../data.json"

const EmployeeList = () => {
    console.log(data)
    return (
        <div className='container-body'>
            <div className='list-title-emplyeeList'>
                <h2>Employee List</h2>

                <a href="https://www.w3schools.com">
                    <span class="material-symbols-outlined">
                        add_circle
                    </span>
                </a>
            </div>

            <hr></hr>

            <div className='cotainer-box'>
                <table class="table">
                    <thead class="table-light">
                        <tr>
                            <th>Name</th>
                            <th>Lastname</th>
                            <th>Email</th>
                            <th>Occupation</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{data.users[0].user_name}</td>
                            <td>{data.users[0].user_lastname}</td>
                            <td>{data.users[0].user_occupation}</td>
                            <td>{data.users[0].user_email}</td>
                        </tr>
                        <tr>
                            <td>{data.users[1].user_name}</td>
                            <td>{data.users[1].user_lastname}</td>
                            <td>{data.users[1].user_occupation}</td>
                            <td>{data.users[1].user_email}</td>
                        </tr>
                    </tbody>
                </table>

            </div>
            {/* <button type="button" class="btn btn-secondary">

                <span class="material-symbols-outlined">
                    add_circle
                </span>
                Add Employee
            </button> */}
        </div>
    );
}

export default EmployeeList;

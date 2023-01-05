import React from 'react';
import data from "../../../data.json"

const CardProjectsSum = () => {
    return (
        <div className='body-holiday-card'>
           
            <div className='list-title-emplyeeList'>
            <h1>Projects Summary</h1>
            </div>
            <hr></hr>
            <div className='cotainer-box'>
                <table class="table">
                    <thead class="table-light">
                    <tr>
                        <th>Name</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                    </tr>
                    </thead>
                    <tbody>
                       <tr>
                        <td>{data.projects[0].project_name}</td>
                        <td>{data.projects[0].start_date}</td>
                        <td>{data.projects[0].end_date}</td>
                       </tr>
                       <tr>
                        <td>{data.projects[1].project_name}</td>
                        <td>{data.projects[1].start_date}</td>
                        <td>{data.projects[1].end_date}</td>
                       </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default CardProjectsSum;

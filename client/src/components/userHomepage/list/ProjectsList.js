import React from 'react';
import data from "../../../data.json"
import "./list.css"


const ProjectsList = () => {
    console.log( data )
    return (
        <div className='container-body-list'>
            {/* <h2>Projects List</h2> */}
            <div className='list-title-emplyeeList'>
              <h2>Projects List</h2>

                <a href="/CreateProject">
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
                        <th>Lacation</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                    </tr>
                    </thead>
                    <tbody>
                       <tr>
                        <td>{data.projects[0].project_name}</td>
                        <td>{data.projects[0].location}</td>
                        <td>{data.projects[0].start_date}</td>
                        <td>{data.projects[0].end_date}</td>
                       </tr>
                       <tr>
                        <td>{data.projects[1].project_name}</td>
                        <td>{data.projects[1].location}</td>
                        <td>{data.projects[1].start_date}</td>
                        <td>{data.projects[1].end_date}</td>
                       </tr>
                    </tbody>
                </table>
            </div>
            <div className='buttons'>
            <button type="button" class="btn btn-secondary">Back</button>
            <button type="button" class="btn btn-secondary">Edit</button>
            </div>
        </div>
    );
}

export default ProjectsList;

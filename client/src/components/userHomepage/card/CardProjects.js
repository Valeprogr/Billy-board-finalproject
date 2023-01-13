import React,{useState} from 'react';
import "./cardProjects.css"
import user from "../../../images/png/user.png";
import Task from '../task/Tasklist';

const CardProjects = ({ projects }) => {
  const [taskVisible, setTaskVisible]= useState(false);
  console.log(projects)
  return (
    <>
      <div className='body-holiday-card'>
        <h3>Name of the projects</h3>
        <hr></hr>
        <div className='container-holiday-card'>
          <div>
            <img className='holiday-user-img' src={user} alt="profile pictures"></img>
          </div>
          <div><p>{projects.name}</p>
            <div className='box-info-location'><span class="material-symbols-outlined">
              location_on
            </span>
            <p>{projects.location}</p>
            </div>
          </div>
          <button class="btn btn-secondary btn-projectCard" onClick={()=>{setTaskVisible(taskVisible=>!taskVisible )}}>Tasks</button>
          <button class="btn btn-dark btn-projectCard">Show Members</button>
        </div>
        {
          taskVisible && <Task/>
        }
      </div>
    </>
  );
}

export default CardProjects;
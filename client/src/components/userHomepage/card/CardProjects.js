import React from 'react';
import "./cardProjects.css"
import user from "../../../images/png/user.png"

const CardProjects = ({ projects }) => {
  //console.log(projects)
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
          <button class="btn btn-secondary btn-projectCard">Crate task</button>
          <button class="btn btn-dark btn-projectCard">Qualcos'altro</button>

        </div>
      </div>
    </>
  );
}

export default CardProjects;
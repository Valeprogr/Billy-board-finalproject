import React, { useState } from 'react';
import "./cardProjects.css"
import user from "../../../images/png/user.png";
import Tasklist from '../task/Tasklist';
import MembersList from "../members-list/MembersList"
import { useHttp } from '../../../hooks/http.hook';
import { useMessage } from '../../../hooks/message.hook';
import BtnSpinner from '../../../btnSpinner/BtnSpinner';
import { Toaster } from 'react-hot-toast';

const REACT_APP_URL_CYCLIC = process.env.REACT_APP_URL_CYCLIC;
const REACT_APP_LOCALHOST= process.env.REACT_APP_LOCALHOST;

const CardProjects = ({ projects, setRefresh,index }) => {
  const [taskVisible, setTaskVisible] = useState(false);
  const [membersVisible, setMembersVisible] = useState(false);
  const { request, loading } = useHttp();
  const message = useMessage();

  const deleteHandler = async (event) => {
    event.preventDefault();
    const deletedProj = await request(`${REACT_APP_LOCALHOST}project/${projects._id}`, 'DELETE');
    console.log(deletedProj)
    message({ message: "Project deleted." });
    setRefresh(prev => !prev)
  }

  return (
    <>
      <Toaster />
      <div className='body-holiday-card' index={index}>
        <div className='title-container'>
          <h3>{projects.name}</h3>
          <button className='btn btn-danger' onClick={(event) => deleteHandler(event)}>
            {loading && <BtnSpinner />}Delete
          </button>

        </div>

        <hr></hr>
        <div className='container-holiday-card'>
          <div>
            <img className='holiday-user-img' src={user} alt="profile pictures"></img>
          </div>
          <div className='container-info-location'>
            <p>{projects.description}</p>
            <div className='box-info-location'><span class="material-symbols-outlined">
              location_on
            </span>
              <p>{projects.location}</p>
            </div>
          </div>

        </div>
        <div>
          <button className="btn btn-secondary btn-projectCard close" onClick={() => { setTaskVisible(taskVisible => !taskVisible) }}>Tasks</button>
          <button className="btn btn-dark btn-projectCard close" onClick={() => { setMembersVisible(membersVisible => !membersVisible) }}>Show Members</button>
        </div>
        <div>
          {
            taskVisible && <Tasklist projects={projects} />
          }
          {
            membersVisible && <MembersList projects={projects} />
          }
        </div>
      </div>
    </>
  );
}

export default CardProjects;
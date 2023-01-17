import React from 'react';
import FooterUser from './FooterUser';
import "../userHome/homeUser.css";
import Calender from '../calender/Calender';
import HeaderUserHome from '../header-userHome/HeaderUserHome';
import ProjectsList from '../list/ProjectsList';

const UserHome = () => {

    return (
     
        <div className='admin-home-body'>
             <HeaderUserHome/>

            <div className='admin-home-container'>
                <ProjectsList/>
                <Calender />
            </div>





            <FooterUser />
        </div>
    );
}

export default UserHome;

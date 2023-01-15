import React,{useEffect,useState} from 'react';
import FooterUser from './FooterUser';
import "../userHome/homeUser.css";
//import { useHttp } from '../../../hooks/http.hook';
import CardProjects from '../card/CardProjects';
//import CardProjectsSum from '../card/CardProjectsSum';
import Calender from '../calender/Calender';

const UserHome = () => {

    return (
        <div className='admin-home-body'>

            <div className='admin-home-container'>
                <Calender />
                
            </div>





            <FooterUser />
        </div>
    );
}

export default UserHome;

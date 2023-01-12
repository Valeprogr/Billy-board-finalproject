import React,{useEffect,useState} from 'react';
import FooterUser from './FooterUser';
import "../userHome/homeUser.css";
import { useHttp } from '../../../hooks/http.hook';
import Card from '../card/Card';
import CardHolidays from '../card/CardHolidays';
import CardProjectsSum from '../card/CardProjectsSum';

const UserHome = () => {

    return (
        <div className='admin-home-body'>

            <div className='admin-home-container'>
                <CardHolidays />
                <CardProjectsSum />
                <Card />
            </div>





            <FooterUser />
        </div>
    );
}

export default UserHome;

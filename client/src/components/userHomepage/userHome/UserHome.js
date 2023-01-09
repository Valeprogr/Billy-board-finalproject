import React,{useState,useEffect} from 'react';
import FooterUser from './FooterUser';
import "../userHome/homeUser.css";
//import FetchDB from '../../../fetchDB/fetchDB';
import Card from '../card/Card';
import CardHolidays from '../card/CardHolidays';
import CardProjectsSum from '../card/CardProjectsSum';

const UserHome = () => {
    // const [localStorageData,setLocalStorageData]=useState(true)
    // console.log(localStorageData.company)
    //FetchDB()

// useEffect(()=>{
//     getCompany()
// },[])    
//     const getCompany=()=>{setLocalStorageData(JSON.parse(localStorage.getItem('userData')))}

    return (
        <div className='admin-home-body'>
       
            <div className='admin-home-container'>
            <CardHolidays />
            <CardProjectsSum/>
            <Card />
            </div>
      
     
          
            
            
            <FooterUser />
        </div>
    );
}

export default UserHome;

import React,{useState,useEffect} from 'react';
import { useHttp } from '../../../hooks/http.hook';
import "./header-user-home.css";


const REACT_APP_URL_CYCLIC = process.env.REACT_APP_URL_CYCLIC;

const HeaderUserHome = ({userId}) => {
const{request}=useHttp();
const [userName,setUserName]=useState(null);
useEffect(() => {
  const getName= async()=>{
    const name = await request(`${REACT_APP_URL_CYCLIC}user/${userId}`)
    setUserName(prev=>name.name)
  }
  getName()
}, []);
    return (
        <div className='container-header'>
            <div className='box-header'>
            <p>Hello , {userName}</p>
            <h1 className='title-header'>Welcome to Billy Board</h1>
           
           
            </div>
        </div>
    );
}

export default HeaderUserHome;

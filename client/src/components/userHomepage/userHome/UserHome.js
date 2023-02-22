import React, { useState, useEffect,useContext } from 'react';
import FooterUser from './FooterUser';
import "../userHome/homeUser.css";
import HeaderUserHome from '../header-userHome/HeaderUserHome';
import { useHttp } from '../../../hooks/http.hook';
import CardProjects from '../card/CardProjects';
import { AuthContext } from '../../../context/AuthContext';
import EmptyProjectCard from '../card/EmptyProjectCard';

const REACT_APP_URL_CYCLIC = process.env.REACT_APP_URL_CYCLIC;
//const REACT_APP_LOCALHOST =process.env.REACT_APP_LOCALHOST;
const UserHome = () => {
    const { request } = useHttp();
    const [currentProj, setCurrentProj] = useState([]);
    const [showComponent, setShowComponent] = useState(false);
    const auth = useContext(AuthContext);
   

        useEffect(() => {
        const getProj = async () => {
            const proj = await request(`${REACT_APP_URL_CYCLIC}project/current/${auth.company}`);
            setCurrentProj(prev => [...proj]); 
            console.log(currentProj)
        }
        getProj();
    }, [])

    useEffect(()=>{
        if(currentProj !== []){
            setShowComponent(true)
        }
    },[])
        
    return (

        <div className='admin-home-body'>
            <HeaderUserHome userId={auth.userId}/>

            <div className='admin-home-container box-card'>
            <h3 className="card-title text-secondary">Your Current Project</h3>
                { !showComponent ?
                    <EmptyProjectCard />
                    :
                    <>
                     {currentProj !== null ?
                    <div className="container">
                        {currentProj.map(p => <CardProjects index={p} projects={p} />)}
                    </div>
                    :
                   null}    
                    </>
                }
               
                
            </div>





            <FooterUser />
        </div>
    );
}

export default UserHome;

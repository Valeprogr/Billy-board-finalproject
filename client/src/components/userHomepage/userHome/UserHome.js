import React, { useState, useEffect,useContext } from 'react';
import FooterUser from './FooterUser';
import "../userHome/homeUser.css";
import Calender from '../calender/Calender';
import HeaderUserHome from '../header-userHome/HeaderUserHome';
import { useHttp } from '../../../hooks/http.hook';
import CardProjects from '../card/CardProjects';
import { AuthContext } from '../../../context/AuthContext';


const REACT_APP_URL_CYCLIC = process.env.REACT_APP_URL_CYCLIC;
//const REACT_APP_LOCALHOST =process.env.REACT_APP_LOCALHOST;
const UserHome = () => {
    const { request } = useHttp();
    const [currentProj, setCurrentProj] = useState([]);
    const auth=useContext(AuthContext);
   

        useEffect(() => {
        const getProj = async () => {
            const proj = await request(`${REACT_APP_URL_CYCLIC}project/current/${auth.company}`);
            console.log(proj)
            setCurrentProj(prev => [...proj]);
        }
        getProj();
    }, [])

    return (

        <div className='admin-home-body'>
            <HeaderUserHome userId={auth.userId}/>

            <div className='admin-home-container box-card'>
                {currentProj !== null ?
                    <div className="position-relative container">
                        <h3 className="card-title text-secondary">Your Current Project</h3>
                        {currentProj.map(p => <CardProjects index={p} projects={p} />)}
                    </div>
                    :
                    null}
                <Calender />
            </div>





            <FooterUser />
        </div>
    );
}

export default UserHome;

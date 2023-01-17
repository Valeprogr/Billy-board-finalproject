import React,{useState,useEffect} from 'react';
import FooterUser from './FooterUser';
import "../userHome/homeUser.css";
import Calender from '../calender/Calender';
import HeaderUserHome from '../header-userHome/HeaderUserHome';
// import ProjectsList from '../list/ProjectsList';
import { useHttp } from '../../../hooks/http.hook';
import CardProjects from '../card/CardProjects';

const REACT_APP_URL_CYCLIC=process.env.REACT_APP_URL_CYCLIC;
const UserHome = () => {
    const {request} = useHttp();
    const [currentProj, setCurrentProj] = useState(null);

    useEffect(() => {
        const getProj = async() => {
            const proj = await request(`${REACT_APP_URL_CYCLIC}project/current`);
            setCurrentProj(prev => proj);
        }
        getProj();
    }, [])
    return (
     
        <div className='admin-home-body'>
             <HeaderUserHome/>

            <div className='admin-home-container'>
            {currentProj !== null ? <div className="position-relative"><h3 className="card-title text-secondary">Start's Today</h3><CardProjects projects={currentProj}/></div>: <>no Current</>}
                {/* <ProjectsList/> */}
                <Calender />
            </div>





            <FooterUser />
        </div>
    );
}

export default UserHome;

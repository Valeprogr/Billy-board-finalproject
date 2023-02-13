import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../../context/AuthContext';
import { useHttp } from '../../../hooks/http.hook';
import "./list.css";
import CardProjects from '../card/CardProjects';
import BtnSpinner from '../../../btnSpinner/BtnSpinner';


const REACT_APP_URL_CYCLIC = process.env.REACT_APP_URL_CYCLIC;
//console.log(REACT_APP_URL_CYCLIC)
const ProjectsList = () => {
    const { request, loading } = useHttp();
    const [data, setData] = useState(null);
    const auth = useContext(AuthContext);
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        const getData = async () => {
            const userData = await request(`${REACT_APP_URL_CYCLIC}projects`);
            setData(userData.filter(item => item.company_name === auth.company));
        }
        getData();
    },[refresh]);

    return (
        <div className='container-body-list'>

            <div className='list-title-projectList'>
                <h2>Projects List</h2>
                <div>   <a href="/createProject">
                    <button className='btn  btn-dark btn-projectCard'>Create new Project</button>
                </a>
                    <button className='btn  btn-outline-secondary btn-projectCard' onClick={() => { setRefresh(prev => !prev) }}>{loading && <BtnSpinner />}Refresh</button>
                </div></div>

            <hr></hr>
            <div className='cotainer-box'>

                {data ?
                    data.map((data, index) => (
                        <CardProjects index={index} projects={data} setRefresh={setRefresh} />))
                    :
                    null
                }

            </div>
        </div>
    );
}

export default ProjectsList;

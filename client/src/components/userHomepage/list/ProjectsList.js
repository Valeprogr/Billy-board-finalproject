import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../../context/AuthContext';
import { useHttp } from '../../../hooks/http.hook';
import "./list.css";
import CardProjects from '../card/CardProjects';


const REACT_APP_URL_CYCLIC=process.env.REACT_APP_URL_CYCLIC;
//console.log(REACT_APP_URL_CYCLIC)
const ProjectsList = () => {
    const { request} = useHttp();
    const [data, setData] = useState(null);
    const auth = useContext(AuthContext);

    useEffect(() => {
        const getData = async () => {
            const userData = await request(`${REACT_APP_URL_CYCLIC}projects`);
            setData(userData.filter(item => item.company_name === auth.company))
        }
        getData()
    }, [])

    return (
        <div className='container-body-list'>

            <div className='list-title-projectList'>
                <h2>Projects List</h2>
                <a href="/createProject">
                    <button className='btn btn-secondary btn-projectCard'>Create new Project</button>
                </a>
            </div>
            <hr></hr>
            <div className='cotainer-box'>

                {data ?
                    data.map((projects, index) => (
                        <CardProjects index={index} projects={projects} />))
                    :
                    null
                }

            </div>
        </div>
    );
}

export default ProjectsList;

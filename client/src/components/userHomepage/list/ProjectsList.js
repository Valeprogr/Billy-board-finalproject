import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../../context/AuthContext';
import { useHttp } from '../../../hooks/http.hook';
import "./list.css";
import CardProjects from '../card/CardProjects';


const ProjectsList = () => {
    const { request } = useHttp();
    const [data, setData] = useState(null);
    const auth = useContext(AuthContext);

    useEffect(() => {
        const getData = async () => {
            const userData = await request(`http://localhost:4000/projects`);
            setData(userData.filter(item => item.company_name == auth.company))
        }
        getData()
    }, [])
    //console.log(data)
    return (
        <div className='container-body-list'>

            <div className='list-title-projectList'>
                <h2>Projects List</h2>
                <a href="/CreateProject">
                    <button className='btn btn-secondary btn-projectCard'>Create new Project</button>
                </a>
            </div>
            <hr></hr>
            <div className='cotainer-box'>

                {data ?
                    data.map((projects, index) => (
                        <CardProjects index={index} projects={projects} />))
                    :
                    <div><h2>loading...</h2></div>
                }

            </div>
            {/* <div className='buttons'>
            <button type="button" class="btn btn-secondary">Back</button>
            <button type="button" class="btn btn-secondary">Edit</button>
            </div> */}
        </div>
    );
}

export default ProjectsList;

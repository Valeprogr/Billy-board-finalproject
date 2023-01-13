import React,{useState,useEffect,useContext} from 'react';
import { AuthContext } from '../../../context/AuthContext';
import { useHttp } from '../../../hooks/http.hook';
import "./list.css"


const ProjectsList = () => {
    const { request} = useHttp();
    const [data, setData] = useState(null);
    const auth =useContext(AuthContext);

    useEffect(() => {
        const getData = async () => {
            const userData = await request(`http://localhost:4000/projects`);
            setData(userData.filter(item=>item.company_name == auth.company))
        }
        getData()
    },[])
    console.log(data)
    return (
        <div className='container-body-list'>
            <h2>Projects List</h2>
            <div className='list-title-emplyeeList'>
        

                <a href="/CreateProject">
                    <span class="material-symbols-outlined">
                        add_circle
                    </span>
                </a>
            </div>
            <hr></hr>
            <div className='cotainer-box'>
                <table class="table">
                    <thead class="table-light">
                    <tr>
                        <th>Name</th>
                        <th>Lacation</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                    </tr>
                    </thead>
                    <tbody>
                    { data?
                       data.map((employee,index)=>  (
                       <tr>
                        <td>{employee.company_name}</td>
                        <td>{employee.location}</td>
                        <td>{employee.start_date}</td>
                        <td>{employee.end_date}</td>
                       </tr>))
                       :
                       <tr>
                       <td>loading...</td>
                        <td>loading...</td>
                        <td>loading...</td>
                        <td>loading...</td>
                        </tr>
                       }
                    </tbody>
                </table>
            </div>
            <div className='buttons'>
            <button type="button" class="btn btn-secondary">Back</button>
            <button type="button" class="btn btn-secondary">Edit</button>
            </div>
        </div>
    );
}

export default ProjectsList;

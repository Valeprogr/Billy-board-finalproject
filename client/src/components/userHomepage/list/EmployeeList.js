import React,{useState,useEffect,useContext} from 'react';
import { AuthContext } from '../../../context/AuthContext';
import { useHttp } from '../../../hooks/http.hook';
import CardEmployee from '../card/CardEmployee';
import "./list.css";
import Spinner from '../Spinner/Spinner';

const EmployeeList = () => {
    const {  request } = useHttp();
    const auth = useContext(AuthContext);
    //console.log(auth.company)

    const [data, setData] = useState(null);

    useEffect(() => {

        const getData = async () => {
            // const userId = await request("http://localhost:4000/user-util/settings");
            const userData = await request(`http://localhost:4000/user/`);
            setData(userData.filter(item=>item.company_name == auth.company))
           
        }
        getData()

    }, [])
    return (
        <>
            <div className='container-body-list'>
                <div className='box-list'>
                    <div className='boh'>
                        <h2>Employee List</h2>
                        <a href="/createNewEmployee">
                            Add New Employee
                            <span class="material-symbols-outlined">
                                add_circle
                            </span>
                        </a>
                    </div>

                    <hr></hr>
                    <div className='container-cards'>
                       { data?
                       data.map((employee,index)=>  (<CardEmployee index={index} employee={employee}/>))
                       :
                       <div>
                       loading...
                       </div>
                       }
                    </div>
                </div>
            </div>
        </>
    );
}

export default EmployeeList;

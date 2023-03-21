import React,{useState,useEffect,useContext} from 'react';
import { AuthContext } from '../../../context/AuthContext';
import { useHttp } from '../../../hooks/http.hook';
import CardEmployee from '../card/CardEmployee';
import "./list.css";
//import Spinner from '../Spinner/Spinner';

const REACT_APP_URL_CYCLIC=process.env.REACT_APP_URL_CYCLIC;
const EmployeeList = () => {
    const {  request } = useHttp();
    const auth = useContext(AuthContext);
    //console.log(auth.company)

    const [data, setData] = useState(null);

    useEffect(() => {

        const getData = async () => {
            const userData = await request(`${REACT_APP_URL_CYCLIC}user/`);
            setData(userData.filter(item=>item.company_name === auth.company))
           
        }
        getData()

    }, [])
    return (
    
            <div className='container-body-list container-employee-list'>
                <div className='box-list'>
                    <div className='boh'>
                        <h2>Employee List</h2>
                        <a href="/createNewEmployee">
                            <button  className="btn btn-outline-dark">
                                  Add New Employee
                            
                            </button>
                          
                        </a>
                    </div>

                    <hr></hr>
                    <div className='container-card-big'>
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
            </div>
    
    );
}

export default EmployeeList;

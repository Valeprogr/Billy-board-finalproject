import React,{useContext,useEffect,useState} from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useMessage } from '../../hooks/message.hook';
import { useHttp } from '../../hooks/http.hook';
import "./createProject.css"
import { Toaster } from 'react-hot-toast';
import BtnSpinner from '../../btnSpinner/BtnSpinner';
const CreateProject = () => {
//Nel dropdown devo fetchare tutte le email per poterli insirire nel dropdown
const {loading, request,error, clearError}= useHttp();
const message= useMessage();
const auth = useContext(AuthContext)
//console.log(auth)
const[form,setForm]=useState({
    name:"",
    location:"",
    start_date:"",
    end_date:"",
    company_name:auth.company
})
useEffect(()=>{
    message(error);
    clearError()
},[error,message,clearError])

const changeHandler= (event)=>{
    setForm({...form,[event.target.name]:event.target.value});
    console.log(form)
}
const createProject =async(event)=>{
event.preventDefault();
try{
    const data= await request('http://localhost:4000/createProject','POST',{...form});
    message(data)
}catch(error){

}
}

    return (
        <div className='container'>
        <Toaster/>
            <div className=''>
            <h1>Create a new Project</h1>
            <hr></hr>
            </div>
          
            <div>
            <form className='form-container-createPro'>
                <label htmlFor='name'>Project Name:</label>
                <br />
                <input type="text" name='name' onChange={changeHandler}></input>
                <br />
                <label htmlFor='location'>Location:</label>
                <br />
                <input type="text" name='location' onChange={changeHandler}></input>
                <br />
                <label htmlFor='start_date'>Start Date:</label>
                <br />
                <input type="text" name='start_date' onChange={changeHandler}></input>
                <br />
                <label htmlFor='end_date'>End Date:</label>
                <br />
                <input type="text" name='end_date' onChange={changeHandler}></input>
                <br />
                {/* <label>Select employees:</label>
                
                <div>
                    <select>
                        <option value="employee" name="employee">Employee</option>
                        <option value="manager" name="manager">Manager</option>
                    </select>
                </div> */}
                <div className='btn-container-create-project'>
                    <button type="submit" class="btn btn-secondary" onClick={createProject}>Save Profile
                    {loading && <BtnSpinner/>}</button>
                </div>

            </form>
                </div>
    
        </div>
    );
}

export default CreateProject;

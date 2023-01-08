import React,{useState,useEffect} from 'react';
import "./createProject.css";
import { useMessage } from '../../hooks/message.hook';
import { useHttp } from '../../hooks/http.hook';
import Btnspinner from "../../btnSpinner/BtnSpinner";
import { Toaster } from "react-hot-toast";

const CreateNewEmployee = () => {
    const {loading, request, error, clearError}= useHttp();
    const message = useMessage();
    const [form, setForm]= useState({
        name:'',
        lastName:'',
        email:'',
        password:'',
        user_occupation:'',
        company_name:'',
        its_Admin:''
    });
    useEffect(()=>{
        message(error);
        clearError();
    },[error,message,clearError]);
    
    return (
        <>
             <div className='container'>
            <div className=''>
            <h1>Create a new Employee</h1>
            <hr></hr>
            </div>
          
            <div className='form-container-createPro'>
            <form>
                <label for="name">Name:</label>
                <br />
                <input type="text" name='name'></input>
                <br />
                <label for="lastname">Last Name:</label>
                <br />
                <input type="text" name='lastname'></input>
                <br />
                <label for="email">Email:</label>
                <br />
                <input type="text" name='email'></input>
                <br />
                <label for="password">Password:</label>
                <br />
                <input type="text" name='password'></input>
                <br />
                <label for="occupation">Occupation:</label>
                <br />
                <input type="text" name='occupation'></input>
                <br />
                <label name="role">Assign Role:</label>
            
                <div>
                    <select>
                        <option value="employee" name="employee">Employee</option>
                        <option value="manager" name="manager">Manager</option>
                    </select>
                </div>
                <div className='btn-container-create-project'>
                    <button type="submit" class="btn btn-secondary">Save Profile</button>
                </div>

            </form>
                </div>
    
        </div>
        </>
    );
}

export default CreateNewEmployee;

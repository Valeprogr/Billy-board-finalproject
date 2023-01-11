import React,{useContext,useState,useEffect} from 'react';
import "./settings.css";
import { useMessage } from '../../hooks/message.hook';
import { useHttp } from '../../hooks/http.hook';
import BtnSpinner from '../../btnSpinner/BtnSpinner';
import { Toaster } from 'react-hot-toast';
import { AuthContext } from '../../context/AuthContext';

const Settings = () => {
    const {loading, request,error, clearError}= useHttp();
    const message= useMessage();
    const auth = useContext(AuthContext)
    //console.log(auth)

    const [form,setForm]= useState({
        id:"",
        name:"",
        lastname:"",
        email:"",
        password:""
    })

    useEffect(()=>{
        message(error);
        clearError();

    },[error,message,clearError])

    const changeHandler=(event)=>{
        setForm({...form,[event.target.name]:event.target.value});
        console.log(form)
    }

    const upDateUser= async (event)=>{
        event.preventDefault();
        try{
            const data= await request('http://localhost:4000/user/settings','PUT',{...form});
            message(data)
        }catch(error){

        }
    }
    return (
        <div className='container-body-settings'>
        <Toaster/>
            <h1>Settings</h1>
            <hr></hr>
            <div className='containair-box-settings'>
            <form>
                <div>
                <label htmlFor='name'>Name: </label>
                <br></br>
                <input type="text" name='name' onChange={changeHandler}></input>
                <br></br>
                <label htmlFor="lastname">Last Name: </label>
                <br></br>
                <input type="text" name='lastname' onChange={changeHandler}></input>
                <br></br>
                <label htmlFor='email'>Email:</label>
                <br></br>
                <input type="text" name='email' onChange={changeHandler}></input>
                <br></br>
                <label htmlFor='password'>New Password:</label>
                <br></br>
                <input type="text" name='password' onChange={changeHandler}></input>
                <br></br>
                </div>
                <div className='btn-container'>
                <button type="submit" class="btn btn-secondary" onClick={upDateUser}>
                {loading && <BtnSpinner/>}
                Save Profile</button>
                </div>
               
            </form>
            </div>
        </div>
    );
}

export default Settings;
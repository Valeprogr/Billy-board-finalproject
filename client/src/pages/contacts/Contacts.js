import React,{useState} from 'react';
import "./contacts.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';

const REACT_APP_SERVICE_ID= process.env.REACT_APP_SERVICE_ID;
const REACT_APP_TEMPLATE_ID= process.env.REACT_APP_TEMPLATE_ID;

const Contacts = () => {
 const[form, setForm]= useState({
    name:"",
    email:"",
    message:""
 });

   
        const changeHandler = (event)=>{
            setForm({...form, [event.target.name]: event.target.value})
        }

        const emailHandler = async(event)=>{
            event.preventDefault();
            try{
                const sendEmail= await emailjs.send(`${REACT_APP_SERVICE_ID}`, `${REACT_APP_TEMPLATE_ID}`, {...form}, 'AxIa7AvsrRgADs-aO')
                    .then(function(response) {
                       console.log('SUCCESS!', response.status, response.text);
                   }, function(error) {
                    console.log('FAILED...', error);
                 });
                
            }catch(error){
                console.log(error)
            }

            notify();
        }
    const notify = () => toast("Send!", {
        position: toast.POSITION.TOP_CENTER
    });
    return (
        <div className='body'>
            <div className='container1'>
               
            </div>
            <div className='container2'>
                <form className='box-container-contacts'>
                    <h2>Get in touch</h2>
                    <hr></hr>
                    <h5>Name</h5>
                    <input type="text" name='name' value={form.name} onChange={changeHandler}></input>
                    <h5>Email</h5>
                    <input type="email" name='email' value={form.email} onChange={changeHandler}></input>
                    <h5>Message</h5>
                   <textarea rows="4" cols="50" className='text-message' name='message' value={form
                   .message} onChange={changeHandler}></textarea>
                        <button type='submit' className=" btn-contact btn btn-secondary "  onClick={emailHandler}>Send
                        <ToastContainer /></button>
                </form>
            </div>

        </div>
    );
}

export default Contacts;

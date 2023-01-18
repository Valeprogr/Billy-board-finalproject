import React from 'react';
import "./contacts.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Contacts = () => {
    const notify = () => toast("Send!", {
        position: toast.POSITION.TOP_CENTER
    });
    return (
        <div className='body'>
            <div className='container1'>
               
            </div>
            <div className='container2'>
                <div className='box-container-contacts'>
                    <h2>Get in touch</h2>
                    <hr></hr>
                    <h5>Name</h5>
                    <input type="text"></input>
                    <h5>Email</h5>
                    <input type="text"></input>
                    <h5>Message</h5>
                   <textarea rows="4" cols="50" className='text-message'></textarea>
                        <button className=" btn-contact btn btn-secondary " onClick={notify}>Send
                        <ToastContainer /></button>
                </div>
            </div>

        </div>
    );
}

export default Contacts;

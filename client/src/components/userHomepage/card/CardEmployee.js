import React from 'react';
import"./employeeCard.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const CardEmployee = ({employee}) => {
    const notify = () => toast("Send!", {
        position: toast.POSITION.TOP_CENTER
    });
    return (
        <div>
            <div className="card-employee" >
                <img className='card-img' src="https://cdn.discordapp.com/attachments/1008786354865451019/1053355839953588335/profileimage.jpg" class="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{employee.name} {employee.lastname}</h5>
                    <p className="card-text">{employee.user_occupation}</p>
                    
                    <button class="btn btn-dark"  onClick={notify}>Send Message
                    <ToastContainer /></button>
                </div>
            </div>
        </div>
    );
}

export default CardEmployee;

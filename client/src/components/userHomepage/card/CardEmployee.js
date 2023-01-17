import React from 'react';
import"./employeeCard.css"

const CardEmployee = ({employee}) => {
    //console.log(employee)
    return (
        <div>
            <div className="card-employee" >
                <img className='card-img' src="https://cdn.discordapp.com/attachments/1008786354865451019/1053355839953588335/profileimage.jpg" class="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{employee.name} {employee.lastname}</h5>
                    <p className="card-text">{employee.user_occupation}</p>
                    
                    <a href="#" class="btn btn-dark">Send Message</a>
                </div>
            </div>
        </div>
    );
}

export default CardEmployee;

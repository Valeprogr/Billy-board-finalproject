import React from 'react';
import data from "../../data.json"
import image from "../../images/png/user.png"
import "./profileUser.css"

const ProfileUser = () => {
    console.log(data.users[0].user_name)
    return (
        <>
        <div className='container-body'>
            <h1>Profile</h1>
            <hr></hr>
            <div className="container-box">
            <div className='container-img'>
                <img src={image} alt='profile image' />
            </div>
            <div className='container-data'>
            <h6>Name: {data.users[0].user_name}</h6>
            <h6>Last Name: {data.users[0].user_lastname}</h6>
            <h6>Email: {data.users[0].user_email}</h6>
            <h6>Occupation: {data.users[0].user_occupation}</h6>
            </div>
            </div>
            <hr/>
            <div className='buttons'>
            <button type="button" class="btn btn-secondary">Back</button>
            <button type="button" class="btn btn-secondary">Settings</button>
            </div>
        </div>
        </>
    );
}

export default ProfileUser;

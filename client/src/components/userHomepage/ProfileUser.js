import React from 'react';
import data from "../../data.json"
import image from "../../images/png/user.png"
import "./profileUser.css"

const ProfileUser = () => {
    // console.log(data.companies[0].company_name)
    // console.log(data.users)
    return (
        <>
            <div className='container-body'>
                <h1>Profile</h1>
                <hr></hr>
                <div className="container-box">
                    <div className='container-img'>
                        <img src={image} alt='profile' />
                    </div>
                    <div className='container-data'>
                            <h5>Name: </h5>
                            <p>{data.users[0].user_name}</p>
                            <hr></hr>
                            <h5>Last Name:</h5>
                            <p>{data.users[0].user_lastname}</p>
                            <hr></hr>
                            <h5>Email:</h5>
                            <p>{data.users[0].user_email}</p>
                            <hr></hr>
                            <h5>Company Name:</h5>
                            <p>{data.companies[0].company_name}</p>
                            <hr></hr>
                            <h5>Occupation:</h5>
                            <p>{data.users[0].user_occupation}</p>
                       
                    </div>
                </div>
                <hr />
                <div className='buttons'>
                    <button type="button" class="btn btn-secondary">Back</button>
                    <button type="button" class="btn btn-secondary">Settings</button>
                </div>
            </div>
        </>
    );
}

export default ProfileUser;

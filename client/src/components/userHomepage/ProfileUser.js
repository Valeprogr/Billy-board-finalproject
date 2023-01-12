import React, { useContext } from 'react';
import data from "../../data.json"
import image from "../../images/png/user.png"
import "./profileUser.css"
import { AuthContext } from '../../context/AuthContext';

const ProfileUser = () => {
    const auth = useContext(AuthContext);
    console.log(auth.company)
    return (
        <>
            <div className='container-body-profile'>
                <div className="container-box-profile">

                  
                    <div className='container-img'>
                        <h1>Profile</h1>
                        <hr></hr>
                        <img src={image} alt='profile' />
                    </div>
                    <div className='container-data'>
                        <div className='personal-data'>
                            <h5><u>Name:</u> </h5>
                            <p>{data.users[0].user_name}</p>

                            <h5><u>Last Name:</u></h5>
                            <p>{data.users[0].user_lastname}</p>

                            <h5><u>Email:</u></h5>
                            <p>{data.users[0].user_email}</p>
                        </div>

                        <div className='work-data'>
                            <h5><u>Company Name:</u></h5>
                            <p>{data.companies[0].company_name}</p>

                            <h5><u>Occupation</u>:</h5>
                            <p>{data.users[0].user_occupation}</p>
                        </div>

                    </div>
                    <div className='buttons'>
                        <button type="button" class="btn btn-secondary">Edit</button>
                    </div>
                </div>

            </div>
        </>
    );
}

export default ProfileUser;

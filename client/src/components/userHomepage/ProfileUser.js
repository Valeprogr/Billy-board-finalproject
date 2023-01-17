import React, { useEffect, useState,useContext} from 'react';
import { useHttp } from '../../hooks/http.hook';
import { AuthContext } from '../../context/AuthContext';
import { useMessage } from '../../hooks/message.hook';
import "./profileUser.css"
const REACT_APP_URL_CYCLIC=process.env.REACT_APP_URL_CYCLIC;
const ProfileUser = () => {
     const auth = useContext(AuthContext);
    const { request, error, clearError} = useHttp();

    const message= useMessage();
    useEffect(() => {
        message(error);
        clearError();

    }, [error, message, clearError]);

    const [data, setData] = useState(null);

    useEffect(() => {
        const getData = async () => {
            
            const userData = await request(`${REACT_APP_URL_CYCLIC}user/${auth.userId}`);
           
            setData(userData)
        }
        getData()

    }, [])
   

    return (
        <>
            {
                data ?
                    <div className='container-body-profile'>
                        <div className='header-profile'>

                            <div className='buttons'>
                                <a href='/user/settings'><button type="button" class="btn btn-light">
                                    <span className="material-symbols-outlined">
                                        edit
                                    </span>
                                </button></a>
                            </div>
                            <div className='container-img'>
                                <img src="https://cdn.discordapp.com/attachments/1008786354865451019/1053355839953588335/profileimage.jpg" alt='profile' />

                            </div>
                        </div>
                        <div className="container-box-profile">
                            <h2 className='title-profile'>Profile</h2>
                            <hr />
                            <div className='container-data'>
                                <div>
                                    <p><u>Name:</u> </p>
                                    <h5 className='personal-data'>{data.name} {data.lastname}</h5>
                                    <p><u>Occupation:</u></p>
                                    <h5  className='personal-data'>{data.user_occupation}</h5>
                                </div>
                                <div className='icons-data-container'>
                                    <div className='icons-data'>
                                        <span className="material-symbols-outlined icons">
                                            mail
                                        </span>
                                        <p>{data.email}</p>
                                    </div>
                                    <div className='icons-data'>
                                        <span className="material-symbols-outlined icons">
                                            location_on
                                        </span>
                                        <p>{data.company_name}</p>
                                    </div>


                                </div>

                                
                            </div>
                            <hr/>
                        </div>

                    </div>
                    :
                    <loading />
            }

        </>
    );
}

export default ProfileUser;

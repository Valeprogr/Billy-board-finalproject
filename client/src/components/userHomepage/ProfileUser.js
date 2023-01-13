import React, { useEffect,useState } from 'react';
import { useHttp } from '../../hooks/http.hook';
import image from "../../images/png/user.png"
import "./profileUser.css"

const ProfileUser = () => {
    const { loading, request, error, clearError } = useHttp();


    const [data, setData] = useState(null);

    useEffect(() => {

        const getData = async () => {
            const userId = await request("http://localhost:4000/user-util/settings");
            const userData = await request(`http://localhost:4000/user/${userId.id}`);
            setData(userData)
        }
        getData()

    }, [])
    //console.log(data)

    return (
        <>
        {
            data ?
            <div className='container-body-profile'>
                <div className="container-box-profile">

                  
                    <div className='container-img'>
                        <h1>{data.name}</h1>
                    </div>
                    <div className='container-data'>
                        <div className='personal-data'>
                            <h5>Name: </h5>
                            <p>{data.name}</p>

                            <h5>Last Name:</h5>
                            <p>{data.lastname}</p>

                            <h5>Email:</h5>
                            <p>{data.email}</p>
                            <h5>Company Name:</h5>
                            <p>{data.company_name}</p>

                            <h5>Occupation:</h5>
                            <p>{data.user_occupation}</p>
                        </div>

                        <div className='work-data container-img'>
                        <img src={image} alt='profile' />
                        </div>

                    </div>
                    <div className='buttons'>
                        <a href='/user/settings'><button type="button" class="btn btn-secondary">Edit</button></a>
                    </div>
                </div>

            </div>
            :
            <loading/>
        }
            
        </>
    );
}

export default ProfileUser;

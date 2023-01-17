import React, { useContext, useState, useEffect } from 'react';
import { NavLink, Outlet } from "react-router-dom";
import "./homeUser.css";
import { AuthContext } from "../../../context/AuthContext";
import { useHttp } from '../../../hooks/http.hook';
import { useMessage } from '../../../hooks/message.hook';



const REACT_APP_URL_CYCLIC = process.env.REACT_APP_URL_CYCLIC;
const NavbarUser = ({ children }) => {
    const {  request, error, clearError } = useHttp();
    const auth = useContext(AuthContext);

    const message = useMessage();
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


    const logoutHandler = () => {
        auth.logout();
    }


    return (
        <>
            {data ?
                <>
                    <nav className="nav nav-user ">
                        <div className='avatar-img-wow text-center'>
                            <img className='avatar-img' src='https://cdn.discordapp.com/attachments/1008786354865451019/1053355839953588335/profileimage.jpg' alt='profile pictures'></img>
                            <p className='navbar-data'>{data.name}</p>
                            <p className='navbar-data'><i>{data.email}</i></p>

                        </div>
                        <div className='nav-bar-container'>
                            <div className='nav-bar-box1'>
                                <NavLink className="nav-link active" aria-current="page" to="/userHome">
                                    <span className="material-symbols-outlined navbar-icons">
                                        Home
                                    </span>
                                    <span>Home</span></NavLink >
                                <br />
                                <NavLink className="nav-link" to="user/profile">
                                    <span className="material-symbols-outlined navbar-icons">
                                        person
                                    </span>
                                    Profile</NavLink >
                                <br />
                                <NavLink className="nav-link" to="/employees">
                                    <span className="material-symbols-outlined navbar-icons">
                                        group
                                    </span>
                                    Employees</NavLink >
                                <br />
                                <NavLink className="nav-link" to="/projects">
                                    <span className="material-symbols-outlined navbar-icons">
                                        list_alt
                                    </span>
                                    Projects</NavLink >
                                <br />
                                <NavLink className="nav-link" to="/user/settings">
                                    <span className="material-symbols-outlined navbar-icons">
                                        settings
                                    </span>
                                    Settings</NavLink>
                            </div>
                        </div>
                        <div className='nav-bar-box2'>
                            <button className="btn btn-dark btn-navbar" onClick={logoutHandler}>
                                <span className="material-symbols-outlined navbar-icons">
                                    logout
                                </span>Logout</button>
                        </div>
                    </nav>


                    <Outlet />
                    {children}
                </>
                :
                <div>loading</div>

            }

        </>
    );
}

export default NavbarUser;

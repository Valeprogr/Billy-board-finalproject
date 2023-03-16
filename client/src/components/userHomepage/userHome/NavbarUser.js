import React, { useContext, useState, useEffect } from 'react';
import { NavLink, Outlet } from "react-router-dom";
import "./homeUser.css";
import { AuthContext } from "../../../context/AuthContext";
import { useHttp } from '../../../hooks/http.hook';
//import { useMessage } from '../../../hooks/message.hook';
import "../../../images/logo.png"



//const REACT_APP_URL_CYCLIC = process.env.REACT_APP_URL_CYCLIC;
const NavbarUser = ({ children }) => {
    const {  request, error, clearError } = useHttp();
    const auth = useContext(AuthContext);
const [img, setImg]= useState(true);

    


    const logoutHandler = () => {
        auth.logout();
    }


    return (
        
           
                <>
                    <nav className="nav nav-user ">
                        <div className='avatar-img-wow text-center'>
                            <img className='avatar-img' src='https://cdn.discordapp.com/attachments/1008786354865451019/1053355839953588335/profileimage.jpg' alt='profile pictures'></img>
                        </div>
                        <div className='nav-bar-container'>
                            
                                <NavLink className="nav-link active" aria-current="page" to="/userHome">
                                <div className='container-icon-navlik'>
                                      <span className="material-symbols-outlined navbar-icons">
                                        Home
                                    </span>
                                    <p className='nav-text'>Home</p>
                                </div>
                                  
                                    </NavLink >
                             
                                <NavLink className="nav-link" to="user/profile">
                                <div className='container-icon-navlik'>
                                        <span className="material-symbols-outlined navbar-icons">
                                        person
                                    </span>
                                    <p className='nav-text'>Profile</p>
                                </div>
                                </NavLink >
                                
                                <NavLink className="nav-link" to="/employees">
                                <div className='container-icon-navlik'>
                                         <span className="material-symbols-outlined navbar-icons">
                                        group
                                    </span>
                                    <p className='nav-text'>Employees</p>
                                </div>
                               </NavLink >
                            
                                <NavLink className="nav-link" to="/projects">
                                <div className='container-icon-navlik'>
                                      <span className="material-symbols-outlined navbar-icons">
                                        list_alt
                                    </span>
                                    <p className='nav-text'>Projects</p>
                                </div>
                                  </NavLink >
                                
                                <NavLink className="nav-link" to="/user/settings">
                                <div className='container-icon-navlik'>
                                      <span className="material-symbols-outlined navbar-icons">
                                        settings
                                    </span>
                                    <p className='nav-text'>Settings</p>
                                </div>
                                  </NavLink>
                </div>
                <div className='nav-bar-box2'>
                            <button className="btn btn-dark btn-navbar btn-logout" onClick={logoutHandler}>
                                <span className="material-symbols-outlined navbar-icons">
                                    logout
                                </span>
                               </button>
                        </div>
                     
                    </nav>


                    <Outlet />
                    {children}
                </>
    );
}

export default NavbarUser;

import React from 'react';
import { NavLink, Outlet } from "react-router-dom";
import "./homeUser.css";


const NavbarUser = ({ children }) => {
    return (
        <>
            <nav class="nav flex-column nav-user">
                <div className='avatar-img-wow text-center'>
                    <img className='avatar-img' src='https://cdn.discordapp.com/attachments/1008786354865451019/1053355839953588335/profileimage.jpg' alt='profile pictures'></img>
                    <p className='navbar-data'>Mario Rossi</p>
                    <p className='navbar-data'><i>mario@rossi.com</i></p>

                </div>
                <br />
                <NavLink class="nav-link active" aria-current="page" to="/userHome">
                    <span class="material-symbols-outlined">
                        Home
                    </span>
                    <span>Home</span></NavLink >
                <br />
                <NavLink class="nav-link" to="user/profile">
                    <span class="material-symbols-outlined">
                        person
                    </span>
                    Profile</NavLink >
                <br />
                <NavLink class="nav-link" to="/employees">
                    <span class="material-symbols-outlined">
                        group
                    </span>
                    Employees</NavLink >
                <br />
                <NavLink class="nav-link" to="/projects">
                    <span class="material-symbols-outlined">
                        list_alt
                    </span>
                    Projects</NavLink >
                <br />
                <NavLink class="nav-link" to="/user/settings">
                    <span class="material-symbols-outlined">
                        settings
                    </span>
                    Settings</NavLink >
                <br />
                <NavLink className="nav-link">
                    <span class="material-symbols-outlined">
                        logout
                    </span>Logout</NavLink>
            </nav>
           
            <Outlet />
            {children}
        </>
    );
}

export default NavbarUser;

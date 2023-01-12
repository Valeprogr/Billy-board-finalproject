import React, { useContext, useState, useEffect } from 'react';
import { NavLink, Outlet, useRouteError } from "react-router-dom";
import "./homeUser.css";
import { AuthContext } from "../../../context/AuthContext";
import { useHttp } from '../../../hooks/http.hook';




const NavbarUser = ({ children }) => {
    const { loading, request, error, clearError } = useHttp();
    const auth = useContext(AuthContext);


    const [data, setData] = useState(null);

    useEffect(() => {

        const getData = async () => {
            const userId = await request("http://localhost:4000/user-util/settings");
            const userData = await request(`http://localhost:4000/user/${userId.id}`);
            setData(userData)
        }
        getData()

    }, [])


    const logoutHandler = async () => {
        await auth.logout();
    }
    //console.log(auth)

    return (
        <>
        {data ?
            <>
            <nav className="nav flex-column nav-user">
                <div className='avatar-img-wow text-center'>
                    <img className='avatar-img' src='https://cdn.discordapp.com/attachments/1008786354865451019/1053355839953588335/profileimage.jpg' alt='profile pictures'></img>
                    <p className='navbar-data'>{data.name}</p>
                    <p className='navbar-data'><i>{data.email}</i></p>

                </div>
                <br />
                <NavLink className="nav-link active" aria-current="page" to="/userHome">
                    <span class="material-symbols-outlined">
                        Home
                    </span>
                    <span>Home</span></NavLink >
                <br />
                <NavLink className="nav-link" to="user/profile">
                    <span class="material-symbols-outlined">
                        person
                    </span>
                    Profile</NavLink >
                <br />
                <NavLink className="nav-link" to="/employees">
                    <span class="material-symbols-outlined">
                        group
                    </span>
                    Employees</NavLink >
                <br />
                <NavLink className="nav-link" to="/projects">
                    <span class="material-symbols-outlined">
                        list_alt
                    </span>
                    Projects</NavLink >
                <br />
                <NavLink className="nav-link" to="/user/settings">
                    <span class="material-symbols-outlined">
                        settings
                    </span>
                    Settings</NavLink >
                <br />
                <button class="btn btn-light" onClick={logoutHandler}>
                    <span class="material-symbols-outlined">
                        logout
                    </span>Logout</button>
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

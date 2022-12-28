import React from 'react';
import "./homeUser.css";


const NavbarUser = () => {
    return (
        <>
            <nav class="nav flex-column nav-user">
                <div className='avatar-img-wow text-center'>
                    <img className='avatar-img' src='https://cdn.discordapp.com/attachments/1008786354865451019/1053355839953588335/profileimage.jpg' alt='profile pictures'></img>
                    <p className='navbar-data'>Mario Rossi</p>
                    <p className='navbar-data'><i>mario@rossi.com</i></p>

                </div>
                <br />
                <a class="nav-link active" aria-current="page" href="/userHome">
                    <span class="material-symbols-outlined">
                        Home
                    </span>
                    <span>Home</span></a>
                <br />
                <a class="nav-link" href="/profile">
                    <span class="material-symbols-outlined">
                        person
                    </span>
                    Profile</a>
                <br />
                <a class="nav-link" href="/employees">
                    <span class="material-symbols-outlined">
                        group
                    </span>
                    Employees</a>
                <br />
                <a class="nav-link" href="/projects">
                    <span class="material-symbols-outlined">
                        list_alt
                    </span>
                    Projects</a>
                <br />
                <a class="nav-link" href="/settings">
                    <span class="material-symbols-outlined">
                        settings
                    </span>
                    Settings</a>
                <br />
            </nav>
        </>
    );
}

export default NavbarUser;

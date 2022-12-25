import React from 'react';
import "./homeUser.css";


const NavbarUser = () => {
    return (
        <>
            <nav class="nav flex-column">
                <div className='avatar-img-wow text-center'>
                    <img className='avatar-img' src='https://cdn.discordapp.com/attachments/1008786354865451019/1053355839953588335/profileimage.jpg' alt='profile pictures'></img>
                </div>
                <br/>
                <a class="nav-link active" aria-current="page" href="#">
                    <span class="material-symbols-outlined">
                        Home
                    </span>
                    <span>Home</span></a>
                    <br/>
                <a class="nav-link" href="#">
                    <span class="material-symbols-outlined">
                        person
                    </span>
                    Profile</a>
                <br/>
                <a class="nav-link" href="#">
                    <span class="material-symbols-outlined">
                        settings
                    </span>
                    Settings</a>
                    <br/>
            </nav>
        </>
    );
}

export default NavbarUser;

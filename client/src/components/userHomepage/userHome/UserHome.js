import React from 'react';
import NavbarUser from './NavbarUser';
import ArticleUser from './ArticleUser';
import FooterUser from './FooterUser';
import "../userHome/homeUser.css";
const UserHome = () => {
    return (
        <div className='admin-home-body'>
            <NavbarUser />
            <ArticleUser />
            <FooterUser />
        </div>
    );
}

export default UserHome;

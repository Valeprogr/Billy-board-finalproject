import React from 'react';
import NavbarUser from '../userComponets/NavbarUser';
import ArticleUser from '../userComponets/ArticleUser';
import FooterUser from '../userComponets/FooterUser';
import "../userComponets/homeUser.css";
const UserHome = () => {
    return (
        <div className='admin-home-body'>
            <NavbarUser />
            <ArticleUser/>
            <FooterUser />
        </div>
    );
}

export default UserHome;

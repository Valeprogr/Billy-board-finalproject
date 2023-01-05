import React from 'react';
// import NavbarUser from './NavbarUser';
//import ArticleUser from './ArticleUser';
import FooterUser from './FooterUser';
import "../userHome/homeUser.css";
import FetchDB from '../../../fetchDB/fetchDB';

const UserHome = () => {
    FetchDB()
    return (
        <div className='admin-home-body'>
        {/* <div className='admin-home-container'>
            <ArticleUser />
            </div> */}
            <FooterUser />
        </div>
    );
}

export default UserHome;

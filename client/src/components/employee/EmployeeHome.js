import React from 'react';
import NavbarUser from '../userHome/NavbarUser';
import ArticleUser from '../userHome/ArticleUser';
import FooterUser from '../userHome/FooterUser';
import "../userHome/homeUser.css";
const EmployeeHome = () => {
    return (
        <div className='admin-home-body'>
            <NavbarUser />
            <ArticleUser/>
            <FooterUser />
        </div>
    );
}

export default EmployeeHome;
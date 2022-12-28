import React from 'react';
import "./homeUser.css";
import ProfileUser from "../userComponets/ProfileUser"
const ArticleUser = () => {
    
    return (
        <>
              <article>
                <div className='box-body'>
                    <div className='box2-container'>
                    <ProfileUser />
                    </div>
                </div>
            </article>
        </>
    );
}

export default ArticleUser;

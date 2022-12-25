import React from 'react';
import Card from '../card/Card';
import "./homeUser.css";
const ArticleUser = () => {
    
    return (
        <>
              <article>
                <div className='box-body'>
                    <h3>Hello, Maksim!</h3>
                    <hr />
                    <div className='cards-container'>
                    <Card title="Employees List" />
                    <Card title="Create Project" />
                    <Card title="Projects" />
                    </div>
                </div>
            </article>
        </>
    );
}

export default ArticleUser;

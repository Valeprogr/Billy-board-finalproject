import React from 'react';
import { useNavigate } from 'react-router-dom'
import "./home.css";
import Navbar from './Navbar';

const Home = () => {

    const navigate = useNavigate();
    const signinHandler = () => {
        navigate('/signin');
    }

    const loginHandler = () => {
        navigate('/login');
    }

    return (
        <>
           
            <div className='home'>
                <div className='title-btn'>
                    <h1>BILLY</h1>
                    <h1>BOARD</h1>
                    <p>All your work information with you.</p>
                    <div className='btn-container'>
                    <button type="button" className="btn btn-light" onClick={signinHandler}>Sign in</button>
                    <button type="button" className="btn btn-light" onClick={loginHandler}>Login</button>
                    </div>
                  

                </div>

            </div>
        </>

    );
}

export default Home;

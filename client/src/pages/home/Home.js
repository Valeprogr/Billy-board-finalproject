import React from 'react';
import { useNavigate } from 'react-router-dom'
import "./home.css";
import About from '../about/About';
import Contacts from '../contacts/Contacts';
import FooterUser from '../../components/userHomepage/userHome/FooterUser';



const Home = () => {
    //Hook che serve per navigare su un altra pagina 
    const navigate = useNavigate();

    //Funzioni collegate al button signin e login 
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
                        <button type="button" className="btn btn-light" onClick={signinHandler}>Sign Up</button>
                        <button type="button" className="btn btn-secondary" onClick={loginHandler}>Login</button>
                    </div>

                </div>
            </div>
                <About />
                <Contacts />
                <FooterUser />
        </>

    );
}

export default Home;

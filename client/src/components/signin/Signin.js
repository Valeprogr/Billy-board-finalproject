import React from 'react';
import "../signin/signin.css"

const Signin = () => {
    return (
        <div id='signin'>
            <div id='login' className='signin-body'>
                <div className='signin-box'>
                    <h1>Sign in</h1>
                    <hr/>
                    <form>
                        <label for="name">Name:</label><br />
                        <input type="text"></input><br />
                        <label for="lastname">Last Name:</label><br />
                        <input type="text"></input><br />
                        <label for="email">Email:</label><br />
                        <input type="text"></input><br />
                        <label for="password">Password:</label><br />
                        <input type="password"></input><br />
                        <label for="company_name">Company Name:</label><br />
                        <input type="text" id="company-name" /><br />
                       
                        <a href='/login'><h6 className='h6-text'>Do you have already an account ? Click here!</h6></a>
                        <input type="submit" value="Sign in" className='btn btn-secondary'></input>
                    </form>
                </div>

            </div>
        </div>
    );
}

export default Signin;

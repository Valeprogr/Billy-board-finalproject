import React from 'react';
import "../signin/signin.css"

const Signin = () => {
    return (
        <div id='signin'>
        <div id='login' className='signin-body'>
        <div className='signin-box'>
        <h1>Sign in</h1>
            <hr></hr>
            <form>
                <label for="company-email">Email:</label><br/>
                <input type="text"></input><br/>
                <label for="company-password">Password:</label><br/>
                <input type="text"></input><br/>

                <label for="company_type">Company type and Description:</label><br/>
                <input type="text" id="company-type" name="interest"  /><br/>
                <h6>Do you have already an account ? Click here!</h6>
                <input type="submit" value="Sign in" className='btn btn-secondary'></input>
            </form>
        </div>
          
        </div>
        </div>
    );
}

export default Signin;

import React from 'react';
import "./contacts.css"

const Contacts = () => {
    return (
        <div className='body'>
            <div className='container1'>
               
            </div>
            <div className='container2'>
                <div className='box-container-contacts'>
                    <h2>Get in touch</h2>
                    <hr></hr>
                    <h5>Name</h5>
                    <input type="text"></input>
                    <h5>Email</h5>
                    <input type="text"></input>
                    <h5>Message</h5>
                   <textarea rows="4" cols="50" className='text-message'></textarea>
                        <button class=" btn-contact btn btn-secondary ">Send</button>
                </div>
            </div>

        </div>
    );
}

export default Contacts;

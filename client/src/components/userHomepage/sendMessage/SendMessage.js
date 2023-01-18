import React from 'react';
import "./sendMessage.css"

const SendMessage = () => {
    return (
        <div className='sendMessage-container'>
        <div className='sendMessage-box'>
            
             <h1>Write a message</h1>
             <hr></hr>
             <textarea rows="8" cols="50" className='message-textarea' placeholder='Write the message here. . .'></textarea>
             <button className=" btn-sendMessage btn btn-secondary">Send</button>
        </div>
           
        </div>
    );
}

export default SendMessage;

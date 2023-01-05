import React from 'react';
import "./card.css"
import user from "../../../images/png/user.png"

const CardHolidays = ({title}) => {
  // console.log(title)
    return (
        <>
        <div className='body-holiday-card'>
        <h3>Employees on Holidays</h3>
      <hr></hr>
<div className='container-holiday-card'>
 <div>
  <img className='holiday-user-img' src={user} alt="profile pictures"></img>
 </div>
 <div>Nome e Cognome</div>
</div>
</div>
        </>
    );
}

export default CardHolidays;
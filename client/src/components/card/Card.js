import React from 'react';
import images from  "../../images/png/project.png"
import "./card.css"

const Card = ({title}) => {
  // console.log(title)
    return (
        <>
<div className="card-personaliz">
  <img src={images}  alt="icons" className='card-img'/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    
    <a href="#" className="btn btn-secondary">lets go!</a>
  </div>
</div>
        </>
    );
}

export default Card;

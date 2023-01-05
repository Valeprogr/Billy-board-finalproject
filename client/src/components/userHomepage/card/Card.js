import React from 'react';

import "./card.css"

const Card = ({ title }) => {
  // console.log(title)
  return (
    <>
      <div className="card-personaliz">

        <img className="img-calender" src="https://camo.githubusercontent.com/366e44bda8cd8313fa3043f9ad8c50a205696527268fb410e22db006a917afa9/68747470733a2f2f70726f6a656374732e776f6a74656b6d616a2e706c2f72656163742d63616c656e6461722f72656163742d63616c656e6461722e6a7067" alt="icons"  />
        {/* <div className="card-body">
          <h5 className="card-title">{title}</h5>
        </div> */}
      </div>
    </>
  );
}

export default Card;

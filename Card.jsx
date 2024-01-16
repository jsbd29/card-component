/** @format */

import React from "react";
import img from "./assets/profile.jpg";

function Card() {
  return (
    <div className='card'>
      <img className='card-image' src={img} alt='profile picture' />
      <h2 className='card-title'> Profile </h2>
      <p className='card-text'> Profile component</p>
    </div>
  );
}

export default Card;

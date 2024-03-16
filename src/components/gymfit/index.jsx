import React from 'react'
import mainpic from "../../assets/images/Shape-3.svg"


export const Description = () => {
  return (
    <div className='descriptioncontainer'>
       
        <div className='imagecontainer'>
           <h1>GYMFIT</h1> 
            <img src={mainpic} alt="" />
        </div>
        <div className='content'>
            <p>Our main goal is making people feel better and healtier.</p>
        </div>
    </div>
  )}
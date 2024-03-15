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
            <p>GYM FIT APPLICATION .</p>
        </div>
    </div>
  )}
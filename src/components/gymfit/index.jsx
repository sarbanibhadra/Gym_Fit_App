import React from 'react'
import mainpic from "../../assets/images/Shape-3.svg"

export const Description = () => {
  return (
    <div className='descriptioncontainer'>
       
        <div className='imagecontainer'>
           <h1>GYMFIT APPLICATION</h1> 
            <img src={mainpic} alt="" />
        </div>
        <div className='content'>
            <p>Our main goal is making people feel better and healtier.</p>
            <p>What motivates each of us to work out is different: maybe it's a health problem, an issue with sleep, a special event you want to look great for, having more energy to play with your kids or grandkids, or simply wanting to feel better and healthier in your own skin.We are here for you!</p>
        </div>
    </div>
  )}
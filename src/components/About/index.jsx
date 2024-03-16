import React from 'react'
import "./about.css"
import image1 from "../../assets/images/img1.jpg"
import Logo from "../../assets/images/Shape-3.svg"
const About = () => {
  return (
    <div className='contentContainer'>
        <div className='content'>
            <img src= {image1} alt="" />
        </div>
        <div className='content2'>
        <p>What motivates each of us to work out is different: maybe it's a health problem, an issue with sleep, a special event you want to look great for, having more energy to play with your kids or grandkids, or simply wanting to feel better and healthier in your own skin.We are here for you!</p>    
            <img src={Logo} alt="" />
        </div>
    </div>
  )
}

export default About
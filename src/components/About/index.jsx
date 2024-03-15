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
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid dolorum corporis assumenda et! Quibusdam, laborum? A adipisci pariatur totam provident quas? Assumenda aperiam sed neque nisi, earum perspiciatis provident asperiores!</p>    
            <img src={Logo} alt="" />
        </div>
    </div>
  )
}

export default About
import React from 'react'
import './HeroStyle.css'



const Hero = ({ image, title }) => {
  return (
    <div className=' hero d-flex  justify-content-center align-items-center text-center  ' style={{ backgroundImage: `url(${image})` }}>

      {title}
      {/* <h1 className=' h1Hero'>{title}</h1> */}
 

    </div>
  )
}

export default Hero
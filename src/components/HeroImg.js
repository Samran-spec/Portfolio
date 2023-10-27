import './HeroImgStyle.css'
import React from 'react'
import bgImg  from '../assets/bg-img.jpg'
import {Link} from 'react-router-dom'

const HeroImg = () => {
  return (
    <div className='hero'>
      <div className='mask'>
        <img className='into-img' src={bgImg} alt='bg-img'/>
      </div>
      <div className='content'>
        <p>hi, i'm a</p>
        <h1>Full Stack Developer.</h1>
        <div>
          <Link to='/project' className='btn'>Projects</Link>
          <Link to='/contact' className='btn-light'>Contact</Link>
        </div>
      </div>
    </div>

  )
}

export default HeroImg
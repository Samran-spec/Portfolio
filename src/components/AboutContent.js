import { Link } from "react-router-dom"
import "./AboutContentStyles.css"
import React from 'react'
import react from '../assets/react.jpg'
import npm from '../assets/npm.jpg'

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I?</h1>
            <p>I'm a full stack developer create responsive secure websites for client</p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={react} alt="react" className="img"/>
                </div>
                <div className="img-stack bottom">
                    <img src={npm} alt="npm" className="img"/>
                </div>
            </div>
            
        </div>

    </div>
  )
}

export default AboutContent
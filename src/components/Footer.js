import "./FooterStyles.css";
import React from "react";
import { FaFacebook, FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "white", marginRight: "2rem" }} />
            <div>
              <p>City, State</p>
              <p>Country</p>
            </div>
          </div>
          <div className="phone">
            <h4><FaPhone size={20} style={{ color: "white", marginRight: "2rem" }} />
            Phone</h4>
          </div>
          <div className="email">
          <h4><FaMailBulk size={20} style={{ color: "white", marginRight: "2rem" }} />
            Email</h4>
          </div>
        </div>
        <div className="right">
            <h4>About</h4>
            <p>This is me ''. Transforming ideas into Seamless Digital Solutions.</p>
            <div className="social">
            <FaFacebook size={30} style={{ color: "white", marginRight: "2rem" }} />
            <FaGithub size={30} style={{ color: "white", marginRight: "2rem" }} />
            <FaLinkedin size={30} style={{ color: "white", marginRight: "2rem" }} />
            
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

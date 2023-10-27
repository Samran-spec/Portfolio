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
              <p>Waterloo, Ontario</p>
              <p>Canada</p>
            </div>
          </div>
          <div className="phone">
            <h4><FaPhone size={20} style={{ color: "white", marginRight: "2rem" }} />
            +1-647-531-3717</h4>
          </div>
          <div className="email">
          <h4><FaMailBulk size={20} style={{ color: "white", marginRight: "2rem" }} />
            samranyasin12@gmail.com</h4>
          </div>
        </div>
        <div className="right">
            <h4>About</h4>
            <p>This is me Samran Haider. Transforming ideas into Seamless Digital Solutions.</p>
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

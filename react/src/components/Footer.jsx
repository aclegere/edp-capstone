import React from 'react';
import './FooterStyle.css';

const Footer = () => {
    return (
      <div className="footer">
        <p>never21</p>
        <ul className="footer-links">
          <li>About Us</li>
          <li>Contact</li>
        </ul>

        <div className="footer-copyright">
            <hr />
            <p>Copyright @ 2024</p>
        </div>
      </div>
    );
}

export default Footer;
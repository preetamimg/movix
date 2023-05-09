import React from "react";
import { Link } from "react-router-dom";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";

import "./style.scss";

const Footer = () => {
    return (
        <footer className="footer mt-3 mt-lg-4 py-4 py-lg-5">
            <div className="container">
                <ul className="menuItems p-0">
                    <li className="menuItem">
                        <Link to='/terms-of-use'>Terms Of Use</Link>
                    </li>
                    <li className="menuItem">
                        <Link to='/privacy-policy'>Privacy-Policy</Link>
                    </li>
                    <li className="menuItem">
                        <Link to='/about-us'>About</Link>
                    </li>
                    <li className="menuItem">Site Map</li>
                </ul>
                <div className="infoText">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                </div>
                <div className="socialIcons">
                    <span className="icon">
                        <FaFacebookF />
                    </span>
                    <span className="icon">
                        <FaInstagram />
                    </span>
                    <span className="icon">
                        <FaTwitter />
                    </span>
                    <span className="icon">
                        <FaLinkedin />
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
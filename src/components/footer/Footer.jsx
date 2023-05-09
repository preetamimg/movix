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
                        <Link className="text-white" to='/about-us'>About</Link>
                    </li>
                    <li className="menuItem">
                        <Link className="text-white" to='/terms-of-use'>Terms Of Use</Link>
                    </li>
                    <li className="menuItem">
                        <Link className="text-white" to='/privacy-policy'>Privacy Policy</Link>
                    </li>
                    <li className="menuItem">Sitemap</li>
                </ul>
                <div className="infoText">
                All movie information, ratings, and reviews provided on this website are for informational purposes only. MovieWalas does not host any copyrighted content and is not responsible for the accuracy, compliance, legality, or decency of any third-party content accessible through our website.
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
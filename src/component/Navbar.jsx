import {Link} from 'react-router-dom';
import React from 'react';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="navLeft">
                <img src="https://rubixe.com/assets/img/logo/white-rubixe-logo.png" alt="logo" />
            </div>
            <div className="navRight">
                <ul className="navRight">
                    <li><Link to="/">HOME</Link></li>
                    {/* <a href="https://rubixe.com/services/">SERVICES</a> */}
                    <li><Link to="/service">SERVICES</Link></li>
                    <li><Link to="/product">PRODUCTS</Link></li>
                    <li><Link to="/ai">AI INTERNSHIP</Link></li>
                    <li><Link to="/career">CAREER</Link></li>
                    <li><Link to="/blog">BLOG</Link></li>
                    <li><Link to="/about">ABOUT</Link></li>
                    <li><Link to="/contact">CONTACT US</Link></li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;

import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className="footer">
      <div className="footertop">
        <div className="footerSame">
          <div className="footerHeading">ABOUT US</div>
          <div className="footercontent">
            <span>Rubixe™ is a global technology company specializing in disruptive technologies – Artificial Intelligence (AI), Machine Learning, Robotic Process Automation (RPA), BlockChain and Internet of Things (IoT). Rubixe mission to enable businesses to leverage the full potential of disruptive technologies to stay competitive in the market.</span>
          </div>
        </div>

        <div className="footerSame">
          <div className="footerHeading">MENUS</div>
          <div className="footercontent">
            <Link to="/">HOME</Link>
            <Link to="/service">SERVICES</Link>
            <Link to="/product">PRODUCTS</Link>
            <Link to="/career">CAREER</Link>
          </div>
        </div>

        <div className="footerSame">
          <div className="footerHeading">LEARN MORE</div>
          <div className="footercontent">
            <Link to="/about">ABOUT</Link>
            <Link to="/contact">CONTACT US</Link>
          </div>
        </div>

        <div className="footerSame">
          <div className="footerHeading">ADDRESS</div>
          <div className="footercontent">
            <span>Novel Tech Park, 1st Floor, Hosur Rd,</span>
            <span>Kudlu gate, Bengaluru, Karnataka 560068</span>
            <span>Phone: 0804-717-8999</span>
            <span>Email: hi@rubixe.com</span>
            <span className='footerlogo'>
              <img src="https://www.freeiconspng.com/thumbs/facebook-logo-png/facebook-f-logo-transparent-facebook-f-22.png" alt="facebook" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/768px-LinkedIn_icon.svg.png" alt="linkedIn" />
            </span>
          </div>
        </div>
      </div>
      <div className="footerbottom">
        © Copyright 2017 - 2023 | Rubixe is a brand of THINK AHEAD INNOVATIONS PVT. LTD. | All Rights Reserved
      </div>
    </div>
  )
}

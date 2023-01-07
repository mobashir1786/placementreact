import React from 'react'
import Contact from './Contact'

export default function Home() {
  return (
    <div className="home">
      <div className="homeFirst">
        <div className="homeFirstParent">
          <span>CARYING FUTURE</span>
          <span>TECHNOLGY PROFESSIONALS</span>
          <span>OUT OF YOUNG MIND</span>
        </div>
      </div>
      <div className="who">
        <div className="whoLeft">
          <h3 className='whosame'>WHO WE ARE</h3>
          <div className='whosame'>Rubixe™ is a global technology company specializing in disruptive technologies – Artificial Intelligence (AI), Machine Learning, Robotic Process Automation (RPA), BlockChain and Internet of Things (IoT).</div>
          <div className='whosame'>At Rubixe™, we make your business more efficient, more predictable and more effective, turning complex challenges into solutions by leveraging disruptive technologies, providing a strategic competitive advantage.</div>
        </div>
        <div className="whoRight">
          <hr className='hrtop' />
          <img src="https://rubixe.com/assets/img/aboutus/about-us.jpg" alt="who we are" />
          <hr className='hrbottom' />
        </div>
      </div>
      <div className="where">
        <h2>WHERE WE STARTED</h2>
        <p>Started in 2008, providing technology solutions based in the Netherlands, founders of Rubixe™ have gained expertise in cutting-edge technology through delivering several smart city solutions for European Commission (EC) projects.</p>
      </div>
      <div className="cards">
        <h2>TECH FOR TEENS - A RUBIXE © INITIATIVE</h2>
        <div className="allcard">
          <div className="card1">
            <div className="cardnumber1">01</div>
            <div className="cardblank1"></div>
            <div className="gridient1">
              <div className="cardicon1 material-symbols-outlined">dvr</div>
              <h4 className="cardcontent1">Lorem ipsum dolor sit amet consectetur adipisicing elit. </h4>
            </div>
          </div>
          <div className="card2">
            <div className="gridient2">
              <h4 className="cardcontent2">Lorem ipsum dolor sit amet consectetur adipisicing elit. </h4>
              <div className="cardicon2 material-symbols-outlined">settings_panorama</div>
            </div>
            <div className="cardblank2"></div>
            <div className="cardnumber2">02</div>
          </div>
          <div className="card1">
            <div className="cardnumber1">03</div>
            <div className="cardblank1"></div>
            <div className="gridient1">
              <div className="cardicon1 material-symbols-outlined">dvr</div>
              <h4 className="cardcontent1">Lorem ipsum dolor sit amet consectetur adipisicing elit. </h4>
            </div>
          </div>
          <div className="card2">
            <div className="gridient2">
              <h4 className="cardcontent2">Lorem ipsum dolor sit amet consectetur adipisicing elit. </h4>
              <div className="cardicon2 material-symbols-outlined">settings_panorama</div>
            </div>
            <div className="cardblank2"></div>
            <div className="cardnumber2">04</div>
          </div>
          <div className="card1">
            <div className="cardnumber1">05</div>
            <div className="cardblank1"></div>
            <div className="gridient1">
              <div className="cardicon1 material-symbols-outlined">dvr</div>
              <h4 className="cardcontent1">Lorem ipsum dolor sit amet consectetur adipisicing elit. </h4>
            </div>
          </div>
        </div>
      </div>
      <Contact />
    </div>
  )
}

// import React from 'react'
import './Navbar.css'

const navbar = () => {
  return (
    <div className='navbar'>
        <div className='logo'>
            {/* <h1>logo</h1> */}
            {/* src/assets\img\logo.png */}
            {/* <img src={".../src/assets/img/logo.png"}  /> */}
            
            {/* <img src={"C:/Users/Hp/Downloads/landingPage/src/assets/img/logo.png"}  /> */}
        </div>
        <div className="navdiv">,
            <ul className="navlist">
                <li className="navitem"><a className="navitem-link" href="/">Home</a></li>
                <li className="navitem"><a className="navitem-link" href="/team">Team</a></li>
                <li className="navitem"><a className="navitem-link" href="/investment-criteria">Investment Criteria</a></li>
                <li className="navitem"><a className="navitem-link" href="#contact-us">Contact Us</a></li>
            </ul>
        </div>
        
    </div>
  )
}

export default navbar
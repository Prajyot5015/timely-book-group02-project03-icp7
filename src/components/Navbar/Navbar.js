import React from 'react'
import "./Navbar.css"
import Logo from "../../imgs/navbar/movie-logo.png"

function Navbar() {
  return (
    <>
    <div className="navbar-container" >
      <div className='navbar-items-container'>
        <img src={Logo} className="navbar-logo" />
        <span className='navbar-items'>Home</span>
        <span className='navbar-items'>About</span>
        <span className='navbar-items'>Food</span>
        <span className='navbar-items'>Movie</span>
       
      </div>
      <div className='log-in-container'>
      <span className='navbar-items' >Log in</span>
      </div>

    </div>
  </>
  )
}

export default Navbar
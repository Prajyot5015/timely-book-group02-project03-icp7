import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
import Logo from "../../imgs/navbar/movie-logo.png"

function Navbar() {
  return (
    <>
    <div className="navbar-container" >
      <div className='navbar-items-container'>
        <img src={Logo} className="navbar-logo" />
        <Link  to={"/"}className='navbar-items'>Home</Link>
        <Link  to={"/about"}className='navbar-items'>About</Link>
        <Link  to={"/food"}className='navbar-items'>Food</Link>
        <Link  to={"/moviecard"}className='navbar-items'>Movie</Link>
       
      </div>
      <div className='log-in-container'>
      <Link to={"/login"} className='navbar-items' >Log in</Link>
      </div>

    </div>
  </>
  )
}

export default Navbar
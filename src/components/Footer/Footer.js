import React from 'react'
import "./Footer.css"
import Logo from "../../imgs/navbar/movie-logo.png"
import { Link } from 'react-router-dom'
import Clock from "../../imgs/navbar/clock.png"
import Location from "../../imgs/navbar/location (1).png"
import Contact from "../../imgs/navbar/telephone.png"
import Email from "../../imgs/navbar/envelope (1).png"



function Footer() {
  return (
    <>
    <div className='footer-container'>

      <div className='contact-info-div'>
        <img src={Logo} alt='1' className='logo-image' />

      </div>
      <div className='contact-info-div'>
        <p className='title-text'>Address :-</p>
        <img src={Location} className='icons'/>
        <p className="address-text">3rd Floor Finolex Chowk, Old Mumbai - Pune Hwy, Pimpri , Pune, Maharashtra 411018
        </p >
        <div>
        
        </div>
      </div>
      <div className='contact-info-div'>
        <p className='title-text'>Contact Info :-</p>
        <img src={Contact} alt='1' className='icons' /><span className='contact-info-text'>+9922868597</span><br></br>
        <img src={Email} alt='1' className='icons' /><span  className='contact-info-text'>timelymovie@gmail.com</span><br></br>
        <img src={Location} alt='1'  className='icons' /><span className='contact-info-text'>Mumbai-Pune Hwy, Pimpri Pune 411018</span>
      </div>

      <div className='contact-info-div'>
        <p className='title-text'>Open / Close Timeing :-</p>
        <img src={Clock}  className='icons'/><p  className='opening-hourse'>Monday sunday<br></br>
          09:00 AM To 11:00PM
        </p>

       


      </div>


    </div>
    
   
        <div className='icon-container'> 
           <img src="https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjk4Mi1kMS0xMC5wbmc.png" alt='linkdine'className='icon' />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwH--J-ZMUg8puNfUxE6YXQi3yVHuAORDxow&s" alt='instgram'className='icon'  />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFwXxj5H9tLBzt-ZO94jBHmU2VIsx1wdrzQSMjbxmSmGouqpH1hCkuN24AAmwItc_aFn8&usqp=CAU" alt='youtube' className='icon' />
          <img src="https://is1-ssl.mzstatic.com/image/thumb/Purple122/v4/91/ef/67/91ef67ae-4877-1286-a4d6-fb04f6f37e9e/ProductionAppIcon-2x-4-0-0-85-220.png/1200x630bb.png" alt='Twitter'className='icon' />
          </div>
        
      
    </>
  )
}

export default Footer

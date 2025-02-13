import React from 'react'
import './Footer.css'
import instagram_icon from '../Assets/instagram_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'
import gym_logo from '../Assets/gym_logo.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img style={{height:"60px", }} src={gym_logo} alt="" />
        <p>GYM</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
          <a href="https://www.instagram.com/omkar__0671?igsh=dDV6d2M0N2VxeHE3" target='_blank'><img src={instagram_icon} alt="" /></a>
            
        </div>
        {/* <div className="footer-icons-container">
          <a href="https://stake.bet/?bonus=BoostWeekly1910Ad" target='_blank'><img src={pintester_icon} alt="" /></a>
        </div> */}
        <div className="footer-icons-container">
          <a href="https://wa.me/qr/XDPONLBWEUIQH1" target='_blanks'><img src={whatsapp_icon} alt="" /></a>
            
        </div>
      </div>
      <div className="footer-copyright">
        <hr/>
        <p>Copyright @ 2025 All Right Reserved.</p>
      </div>
    </div>
  )
}

export default Footer

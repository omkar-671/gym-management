import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
// import arrow_icon from '../Assets/arrow.png'
// import hero_image from '../Assets/hero_image.png'
import frontman from '../Assets/frontman.png'

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
            <h2>If you want it, work for it</h2>
            <div>
                <div className="hero-hand-icon">
                    <p>step up</p>
                    <img src={hand_icon} alt="" />
                </div>
                <p>your FITNESS</p>
                <p>with us</p>
            </div>
            {/* <div className="hero-latest-btn">
                <div>Latest Collection</div>
                <img src={arrow_icon} alt="" />
            </div> */}
      </div>

      <div className="hero-right">
            <img style={{height:"650px"}} src={frontman} alt="" />
      </div>
    </div>
  )
}

export default Hero

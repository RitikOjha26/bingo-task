import React from 'react'

import { ReactComponent as Mail } from '../assets/envelope-outline.svg'
import { ReactComponent as Facebook } from '../assets/facebook.svg'
import { ReactComponent as Insta } from '../assets/insta.svg'
import { ReactComponent as Twitter } from '../assets/twitter.svg'
import { ReactComponent as Linkedin } from '../assets/linkedin.svg'

import './footer.css';
const footer = () => {
  return (
    <div className='footer'>
      <div className="search-container">
        <div className='search-heading'><Mail />
          <span>Suscribe to Newsletter</span></div>

        <div className="search-input">
          <input type="text" placeholder="Enter your name" className='form-control' />
          <input type="text" placeholder="Enter your name" className='form-control' />
          <button className='submit'>Send</button>
        </div>

      </div>
      <div className="footer-description">
        <div className="footer-motto">
          <a>Furni.</a>
          <p>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant</p>
          <div className="social-icon">
            <Facebook />
            <Twitter />
            <Insta />
            <Linkedin />
          </div>

        </div>
        <div className="footer-links">
          <div className='links'>
            <ul>
              <li> About us</li>
              <li>Services</li>
              <li>Blog</li>
              <li>Contact us</li>
            </ul>
          </div>

          <div className='links'>
            <ul>
              <li>Support</li>
              <li>Knowledge base</li>
              <li>Live chat</li>
            </ul>
          </div>
          <div className='links'>
            <ul>
              <li>Jobs</li>
              <li>Our team</li>
              <li>Leadership</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className='links'>
            <ul>
              <li>Nordic Chair</li>
              <li>Kruzo Aero</li>
              <li>Ergonomic Chair</li>
            </ul>
          </div>

        </div>
      </div>

      <div className="copyright">
        <p>Copyright ©2024. All Rights Reserved. <br /> — Designed with love by Untree.co Distributed By ThemeWagon</p>
        <div className='terms'>
          <a>Terms & Condition</a>
          <a>Privacy Policy</a>
        </div>

      </div>

    </div>
  )
}

export default footer
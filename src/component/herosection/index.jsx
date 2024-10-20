import React from 'react'
import couch from '../assets/couch.png' 
import './styles.css';
const index = () => {
  return (
    <div className='herosection'>
      
      <div className="motto">
        <h1>Modern Interior <br />
          Design Studio
          </h1>
          <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
          <div>
            <button className='btn btn-secondary'>Shop</button>
            <button className='btn btn-primary btn-white-outline'>Explore</button>
          </div>
      </div>
      <div className="hero-image">
        <img src={couch} alt="" />
      </div>
    </div>
  )
}

export default index
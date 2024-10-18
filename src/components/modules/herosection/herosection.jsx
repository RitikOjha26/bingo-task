import React from 'react'
import couch from '../../assets/couch.png';
import dots from '../../assets/dots-light.svg';
import './styles.css'


const herosection = () => {
  return (
    <div className='herosection-container'>
      <div className="hero-section">
        <div className="hero-section_motto">

          <div className="intro">
            <h1>Modern Interior
              <br />
              Designer Studios
            </h1>



            <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
          </div>
          <br />
          <div className="intro-button">
            <button className='btn btn-shop'>Shop Now</button>
            <button className='btn btn-explore'>Explore</button>
          </div>

        </div>
        <div className="hero-section_showcase">
          <img src={couch} className='hero-section_couch' alt="" />
          {/* <img src={dots} alt="" className='hero-section_dots' /> */}
        </div>
      </div>

    </div>
  )
}

export default herosection
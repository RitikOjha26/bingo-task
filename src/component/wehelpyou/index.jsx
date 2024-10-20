import React from 'react'
import img1 from '../assets/img-grid-1.jpg';
import img2 from '../assets/img-grid-2.jpg';
import img3 from '../assets/img-grid-3.jpg';

import './styles.css';

const index = () => {
  return (
    <div className='help-section'>
      <div className="imgs-grid">
        <div className="grid grid-1">
          <img src={img1} alt="" />
        </div>
        <div className="grid grid-2">
          <img src={img2} alt="" />
        </div>
        <div className="grid grid-3">
          <img src={img3} alt="" />
        </div>
      </div>
      <div className="help-section_motto">
        <h2>We Help You Make Modern Interior Design</h2>
        <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
        <ul className='custom-list'>
          <li>Donec vitae odio quis nisl dapibus malesuada.</li>
          <li>Donec vitae odio quis nisl dapibus malesuada.</li>
          <li>Donec vitae odio quis nisl dapibus malesuada.</li>
          <li>Donec vitae odio quis nisl dapibus malesuada.</li>
        </ul>
        <button className='btn btn-explore'>Explore</button>
      </div>
      

    </div>
  )
}

export default index
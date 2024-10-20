import React from 'react'
import product1 from '../assets/product-1.png';
import product2 from '../assets/product-2.png';
import product3 from '../assets/product-3.png'; 
import cross from '../assets/cross.svg'
import './styles.css';

const index = () => {
  return (
    <div className='product'>

      <div className="product-motto">
        <h2>Crafted with excellent material.</h2>
        <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
        <button className='btn '>Explore</button>
      </div>
      <div className="product-list">
        <div className="product-item">
          <img src={product1} alt="" className='product-thumbnail' />
          <h3>Nordic Chair</h3>
          <strong>$50</strong>
          <img src={cross} alt="" className='icon-cross' />
        </div>
        <div className="product-item">
          <img src={product2} alt="" className='product-thumbnail' />
          <h3>Kruzo Aero Chair</h3>
          <strong>$50</strong>
          <img src={cross} alt="" className='icon-cross' />
        </div>
        <div className="product-item">
          <img src={product3} alt="" className='product-thumbnail' />
          <h3>Ergonomic Chair</h3>
          <strong>$50</strong>
          <img src={cross} alt="" className='icon-cross' />
        </div>

      </div>

    </div>
  )
}

export default index
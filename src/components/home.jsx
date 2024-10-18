import React from 'react'
import Herosection from './modules/herosection/herosection';
import ProductListing from './modules/productListing/index';
import './home.css'

const home = () => {
  return (
    <div className="home">
      <Herosection />
      <ProductListing />
    </div>
  )
}

export default home
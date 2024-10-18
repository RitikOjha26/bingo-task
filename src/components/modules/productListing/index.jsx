import React from 'react';
import product1 from '../../assets/product-1.png';
import product2 from '../../assets/product-2.png';
import product3 from '../../assets/product-3.png';
import cross from '../../assets/cross.svg';
import './styles.css';

const Index = () => {
    const products = [
        {
            name: "Nordic Chair",
            image: product1,
        },
        {
            name: "Nordic Chair",
            image: product2,
        },
        {
            name: "Nordic Chair",
            image: product3,
        },
    ];

    return (
        <div className="productListing-container">
            <div className="productListing-text">
                <div className="productListing_intro">
                    <h2>Crafted with excellent material.</h2>
                    <span>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</span>
                </div>
                <br />
                <div className="productListing-button">
                    <button className='listing-button btn btn-explore'>Explore</button>
                </div>
            </div>
            <div className="productListing-items">
                <div className="product-item">
                    <img src={product1} alt='' className='product-img'/>
                    <h3>Nordic Chair</h3>
                    <strong>$50</strong>
                    <span className='icon-cross'>
                        <img src={cross} alt="" className='image-fluid' />
                    </span>
                </div>
                <div className="product-item">
                    <img src={product2} alt='' className='product-img'/>
                    <h3>Kruze Aero Chair</h3>
                    <strong>$78</strong>
                </div>
                <div className="product-item">
                    <img src={product3} alt='' className='product-img'/>
                    <h3>Ergonomic Chair</h3>
                    <strong>$43</strong>
                </div>
            
            </div>
            
        </div>
    );
}

export default Index;

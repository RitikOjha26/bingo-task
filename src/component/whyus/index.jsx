import React from 'react';
import { ReactComponent as Truck } from '../assets/truck.svg';
import { ReactComponent as Bag } from '../assets/bag.svg';
import { ReactComponent as Support } from '../assets/support.svg';
import { ReactComponent as ReturnIcon } from '../assets/return.svg';
import Pic from '../assets/why-choose-us-img.jpg'

import './styles.css';

const index = () => {
  const cards = [
    {
      Icon: Truck,
      title: 'Fast & Free Shipping',
      description: 'Donec vitae odio quis nisl dapibus malesuada. Nullam aliquet velit. Aliquam vulputate.'
    },
    {
      Icon: Bag,
      title: 'Easy to Shop',
      description: 'Donec vitae odio quis nisl dapibus malesuada. Nullam aliquet velit. Aliquam vulputate.'
    },
    {
      Icon: Support,
      title: '24/7 Support',
      description: 'Donec vitae odio quis nisl dapibus malesuada. Nullam aliquet velit. Aliquam vulputate.'
    },
    {
      Icon: ReturnIcon,
      title: 'Hassle Free Returns',
      description: 'Donec vitae odio quis nisl dapibus malesuada. Nullam aliquet velit. Aliquam vulputate.'
    }
  ];

  return (
    <div className='whyus'>
      <div className="whyus-motto">
        <h2>Why Choose Us</h2>
        <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
        <div className="whyus-motto_cards">
          {cards.map((card, index) => (
            <div className="card" key={index}>
              <div className="icon">
                <card.Icon />
              </div>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          ))}
        </div>
        
      </div>
      <div className="img-wrap">
          <img src={Pic} alt=""/>
        </div>
    </div>
  );
}

export default index;

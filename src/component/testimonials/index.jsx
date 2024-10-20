import React, { useState } from 'react';
import pic from '../assets/person-1.png';
import './styles.css';

const Index = () => {
  const testimonials = [
    {
      text: "“Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.”",
      name: "Maria Jones 1",
      position: "CEO, Co-Founder, XYZ Inc.",
      img: pic
    },
    {
      text: "“Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.”",
      name: "Maria Jones 2",
      position: "CEO, Co-Founder, XYZ Inc.",
      img: pic
    },
    {
      text: "“Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.”",
      name: "Maria Jones 3",
      position: "CEO, Co-Founder, XYZ Inc.",
      img: pic
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(''); 

  const handleNext = () => {
    setDirection('next');
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 300);
  };

  const handlePrev = () => {
    setDirection('prev');
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
      );
    }, 300);
  };

  return (
    <div className="testimonials">
      <h2>Testimonials</h2>
      <div className="carousel">
        <button className="prev-btn" onClick={handlePrev}>‹</button>

        <div className={`testimonial-container ${direction}`}>
          <p>{testimonials[currentIndex].text}</p>
          <img src={testimonials[currentIndex].img} alt={testimonials[currentIndex].name} />
          <h3>{testimonials[currentIndex].name}</h3>
          <p>{testimonials[currentIndex].position}</p>
        </div>

        <button className="next-btn" onClick={handleNext}>›</button>
      </div>
    </div>
  );
};

export default Index;

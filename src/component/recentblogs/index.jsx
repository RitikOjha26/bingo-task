import React from 'react'
import post1 from '../assets/post-1.jpg'
import post2 from '../assets/post-2.jpg'
import post3 from '../assets/post-3.jpg'
import './styles.css';

const index = () => {
  return (
    <div className='blog'>
      <div className="blog-heading">
        <h2>Recent Blogs</h2>
        <a >View all posts</a>
      </div>
      <div className="post-entry">
        <div className="post-content">

          <img src={post1} alt="" className='post-thumbnail' />
          <h3><a >First Time Home Owner Ideas</a></h3>
          <span>by <a>Kristin Watson</a> on <a >Dec 19, 2021</a></span>
        </div>
        <div className="post-content">

          <img src={post2} alt="" className='post-thumbnail' />
          <h3><a >How To Keep Your Furniture Clean</a></h3>
          <span>by <a>Robert Fox</a> on <a >Dec 15, 2021</a></span>
        </div>
        <div className="post-content">

          <img src={post3} alt="" className='post-thumbnail' />
          <h3><a >Small Space Furniture Apartment Ideas</a></h3>
          <span>by <a>Kristin Watson</a> on <a >Dec 12, 2021</a></span>
        </div>
      </div>

    </div>
  )
}

export default index
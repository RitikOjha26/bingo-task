import React from 'react'
import Herosection from './component/herosection';
import ProductListing from './component/productlisting';
import WhyUs from './component/whyus';
import WeHelpYou from './component/wehelpyou';
import Testimonials from './component/testimonials';
import RecentBlogs from './component/recentblogs'


const home = () => {
  return (
    <div>
        <Herosection />
       <ProductListing />
        {/*  <WhyUs />
        <WeHelpYou/>
        <Testimonials/>
        <RecentBlogs/> */}
    </div>
  )
}

export default home
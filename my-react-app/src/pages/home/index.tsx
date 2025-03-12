import React from 'react'
import Hero from './hero-section/HeroSection'
import Featured from './featured-section/FeaturedSection'
import About from './about-section/About'
import Testimonial from './testimonial-section/Testimonial'

const HomePage = () => {
  return (
    <React.Fragment>
      <Hero/>
      <Featured/>
      <About/>
      <Testimonial/>
    </React.Fragment>
  )
}

export default HomePage
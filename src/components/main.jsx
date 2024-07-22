import React from 'react'
import Navbar from './navbar'
import Hero from './hero'
import Project from './project'
import Testimonial from './testimonial'
import Footer from './footer'

export default function Main () {
  return (
    <div className='bg-indigo-600'>
        <Navbar/>
        <Hero/>
        <Project/>
        <Testimonial/>
        <Footer/>
    </div>
  )
}

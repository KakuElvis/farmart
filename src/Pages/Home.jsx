import React from 'react'
import Nav from '../components/Home/Nav'
import Hero from '../components/Home/Hero'
import Produce from '../components/Home/Produce'
import We from '../components/Home/We'

const Home = () => {
  return (
    <div>
        <Nav/>
        <Hero/>
        <We/>
        <Produce/>
    </div>
  )
}

export default Home
import React from 'react'
import Hero from '../components/Hero'
import Banner from '../Banner'
import Services from '../components/Services'
import FeaturedRooms from '../components/FeaturedRooms'
// import Button from '../components/StyledHero'
import { Link } from 'react-router-dom'

// accessing the hero prop
export default function Home () {
  return (
    <>
      <Hero>
        <Banner title='Luxurios Rooms' subtitle='Deluxe rooms starting at $299'>
          <Link to='/rooms' className='btn-primary'>
        Our Rooms
          </Link>
        </Banner>

      </Hero>
      <Services />
      <FeaturedRooms />
      {/* 
      this will be accessed using props in the single room
      
      <Button>Hello</Button> */}
    </>
  )
}

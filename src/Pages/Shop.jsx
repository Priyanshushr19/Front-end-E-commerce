import React from 'react'
import Navbar from '../Components/Navbar'
import { Outlet } from 'react-router-dom'
import Hero from '../Components/Hero'
import Popular from '../Components/popular'
import Exclusive from '../Components/Exclusive'
import NewCollections from '../Components/NewCollections'
import Newsletter from '../Components/Newsletter'
import HeroCarousel from '../Components/HeroCarousel'

export default function Shop() {
  return (
    <>
       <HeroCarousel/>
       <Hero/>
       <Popular/> 
       <Exclusive/> 
       <NewCollections/>
       <Newsletter/>
    </>
  
  )
}

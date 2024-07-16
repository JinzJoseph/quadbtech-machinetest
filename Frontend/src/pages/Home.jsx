import React from 'react'
import TopSection from '../Compoents/TopSection'
import HeroSection from '../Compoents/HeroSection'
import NavBar from '../Compoents/NavBar'
import Section1 from '../Compoents/Section1'
import HomeImageSection from '../Compoents/HomeImageSection'
import HomeSection2 from '../Compoents/HomeSection2'
import ProductList from '../Compoents/ProductList'
import HomeSection3 from '../Compoents/HomeSection3'
import HomeSection4 from '../Compoents/HomeSection4'
import NewsLetter from '../Compoents/NewsLetter'
import Footer from '../Compoents/Footer'

const Home = () => {
  return (
    <div className='h-screen bg-white'>
    <TopSection/>
    <NavBar/>
    <HeroSection/>
    <Section1/>
    <HomeImageSection/>
    <HomeSection2/>
    <ProductList/>
    <HomeSection3/>
    <HomeSection4/>
    <NewsLetter/>
    <Footer/>
    </div>
  )
}

export default Home

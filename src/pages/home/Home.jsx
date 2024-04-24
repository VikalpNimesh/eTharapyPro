import React from 'react'
import Header from '../../components/header/Header'
import FAQ from './FAQ/FAQ'
import Footer from '../../components/header/footer/Footer'
import OurExpertise from './Our Expertise/OurExpertise'
import Quotes from './Quotes/Quotes'
import Hero from './hero/Hero'
import HowWorks from './how it works/HowWorks'
import WhyTherapy from './why therapy/WhyTherapy'
import Testimonials from './testimonials/Testimonials'
import CtaBanner from './cta banner/CtaBanner'

const Home = () => {
    return (
      <div className="" >
       
       
        <Header />
        <Hero/>
        <HowWorks/>
        <OurExpertise />
        <Quotes/>
        <WhyTherapy />
        
        <Testimonials />
        <FAQ />
        <CtaBanner/>
        <Footer/>
    </div>
  )
}

export default Home

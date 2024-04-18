import React from 'react'
import Header from '../../components/header/Header'
import FAQ from './FAQ/FAQ'
import Footer from '../../components/header/footer/Footer'
import OurExpertise from './Our Expertise/OurExpertise'
import Quotes from './Quotes/Quotes'

const Home = () => {
    return (
        <div className="" >
        {/* <Header /> */}
        <FAQ />
        <OurExpertise />
        <Quotes/>
        
        {/* <Footer/> */}
    </div>
  )
}

export default Home

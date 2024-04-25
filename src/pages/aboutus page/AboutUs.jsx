import React from 'react'
import CtaBanner from "./cta banner/CtaBanner";
import AboutUsHero from "./aboutUsHero/AboutUsHero";
import CarinDetails from "./carinDetails/CarinDetails";
import CarinBanner from "./CarinBanner/CarinBanner.jsx";
import CarinTravel from "./CarinTravel/CarinTravel.jsx";
import Therapists from "./Therapists/Therapists.jsx";
import AboutTherapist from "./AboutTherapist/AboutTherapist.jsx";

const AboutUs = () => {
  return (
    <div>
       <AboutUsHero />
      <CarinDetails/>
      <CarinBanner/>
      <CarinTravel/>
      <Therapists/>
      <AboutTherapist/>
      <CtaBanner/>
    </div>
  )
}

export default AboutUs

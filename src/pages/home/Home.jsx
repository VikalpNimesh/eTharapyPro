import FAQ from "./FAQ/FAQ";
import OurExpertise from "./Our Expertise/OurExpertise";
import Quotes from "./Quotes/Quotes";
import Hero from "./hero/Hero";
import HowWorks from "./how it works/HowWorks";
import WhyTherapy from "./why therapy/WhyTherapy";
import Testimonials from "./testimonials/Testimonials";
import CtaBanner from "./cta banner/CtaBanner";
import WhyUs from "./why us/WhyUs";

const Home = () => {
  return (
    <div className="">
      <Hero />
      <HowWorks />
      <OurExpertise />
      <Quotes />
      <WhyTherapy />
      <WhyUs />
      <Testimonials />
      <FAQ />
      <CtaBanner />
    </div>
  );
};

export default Home;

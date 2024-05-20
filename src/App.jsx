import "./App.css";
import Home from "./pages/home/Home";
// import "rsuite/dist/rsuite.min.css";
import "rsuite/dist/rsuite-no-reset.min.css";
import { CustomProvider } from "rsuite";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import LandingPage from "./pages/landing page/LandingPage";
import AboutUs from "./pages/aboutus page/AboutUs";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FAQ from "./pages/FAQ page/FAQ";
import TermAndService from "./pages/T&C page/TermAndService";
// import PrivacyPolicy from "./pages/policy page/PrivacyPolicy";
import Article from "./pages/article page/Article";
import ContactUs from "./pages/contact us/ContactUs";
import Questionnaire from "./pages/questionaire/Questionaire";
import RegistrationForm from "./pages/registration/RegistrationForm";
import PaymentDetailsForm from "./pages/PaymentDetailPage/PaymentDetailsForm";
import PricingPage from "./pages/pricing page/PricingPage";
import { Question1, Question10, Question11, Question12, Question13, Question14, Question15, Question2, Question3, Question4, Question5, Question6, Question7, Question8, Question9, } from "./pages/questionaire/index.js";
import Profile from "./pages/user profile/Profile.jsx";

const user = localStorage.setItem("user",true)

function App() {
  return (
    <CustomProvider theme="light">
      <BrowserRouter basename="/">
        {/* {!user && <Header />} */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile/*" element={<Profile />} />
          <Route path="/pricing-page" element={<PricingPage />} />
          <Route path="/payment-details-form" element={<PaymentDetailsForm />} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/landing-page" element={<LandingPage />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/t&c" element={<TermAndService />} />
          <Route path="/article" element={<Article />} />
          <Route path="/contact-us" element={<ContactUs />} />
          {/* <Route path="/privacy" element={<PrivacyPolicy />} /> */}
          <Route path="/questionnaire/*" element={<Questionnaire />} />
        </Routes>
        {/* {!user && <Footer />}         */}
      </BrowserRouter>
    </CustomProvider>
  );
}

export default App;


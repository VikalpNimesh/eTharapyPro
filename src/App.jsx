import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import 'rsuite/dist/rsuite.min.css';
import Header from "./components/header/Header.jsx";

const Home = lazy(() => import("./pages/home/Home"));
const LandingPage = lazy(() => import("./pages/landing page/LandingPage"));
const AboutUs = lazy(() => import("./pages/aboutus page/AboutUs"));
const FAQ = lazy(() => import("./pages/FAQ page/FAQ"));
const TermAndService = lazy(() => import("./pages/T&C page/TermAndService"));
const Article = lazy(() => import("./pages/article page/Article"));
const ContactUs = lazy(() => import("./pages/contact us/ContactUs"));
const Questionnaire = lazy(() => import("./pages/questionaire/Questionaire"));
const RegistrationForm = lazy(() => import("./pages/registration/RegistrationForm"));
const PaymentDetailsForm = lazy(() => import("./pages/PaymentDetailPage/PaymentDetailsForm"));
const PricingPage = lazy(() => import("./pages/pricing page/PricingPage"));
const Profile = lazy(() => import("./pages/user profile/Profile.jsx"));
// const PrivacyPolicy = lazy(() => import("./pages/policy page/PrivacyPolicy"));

// import Home from "./pages/home/Home.jsx"
// import LandingPage from "./pages/landing page/LandingPage";
// import AboutUs from "./pages/aboutus page/AboutUs";
// import FAQ from "./pages/FAQ page/FAQ";
// import TermAndService from "./pages/T&C page/TermAndService";
// import Article from "./pages/article page/Article";
// import ContactUs from "./pages/contact us/ContactUs";
// import Questionnaire from "./pages/questionaire/Questionaire";
// import RegistrationForm from "./pages/registration/RegistrationForm";
// import PaymentDetailsForm from "./pages/PaymentDetailPage/PaymentDetailsForm";
// import PricingPage from "./pages/pricing page/PricingPage";
// import Profile from "./pages/user profile/Profile.jsx";
// import PrivacyPolicy from "./pages/policy page/PrivacyPolicy";

function App() {
  return (
      <BrowserRouter basename="/">
      <Suspense fallback={<div className="span-green h32  text-center  mt-4 " >Loading...</div>}>
        <Header/>
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
          <Route path="/questionnaire/*" element={<Questionnaire />} />
          {/* <Route path="/privacy" element={<PrivacyPolicy />} /> */}
        </Routes>
        </Suspense>
      </BrowserRouter>
  );
}

export default App;


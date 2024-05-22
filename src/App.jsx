import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import 'rsuite/dist/rsuite.min.css';
import "./pages/landing page/hero-section/HeroSection.css";
import "./pages/aboutus page/Therapists/Therapists.css";
import "./pages/article page/related post/RelatedPost.css";
import "./components/button/Button.css";
import AppLayout from "./components/layout/AppLayout.jsx";

// Lazy loading components
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

// Wrap components with the HOC
const WrappedHome = AppLayout(Home);
const WrappedLandingPage = AppLayout(LandingPage);
const WrappedAboutUs = AppLayout(AboutUs);
const WrappedFAQ = AppLayout(FAQ);
const WrappedTermAndService = AppLayout(TermAndService);
const WrappedArticle = AppLayout(Article);
const WrappedContactUs = AppLayout(ContactUs);
const WrappedQuestionnaire = AppLayout(Questionnaire);
const WrappedRegistrationForm = AppLayout(RegistrationForm);
const WrappedPaymentDetailsForm = AppLayout(PaymentDetailsForm);
const WrappedPricingPage = AppLayout(PricingPage);
const WrappedProfile = Profile;
// const WrappedPrivacyPolicy = AppLayout(PrivacyPolicy);

function App() {
  return (
    <BrowserRouter basename="/">
      <Suspense fallback={<div className="span-green h32 text-center mt-4">Loading...</div>}>
        <Routes>
          <Route path="/" element={<WrappedHome />} />
          <Route path="/profile/*" element={<WrappedProfile />} />
          <Route path="/pricing-page" element={<WrappedPricingPage />} />
          <Route path="/payment-details-form" element={<WrappedPaymentDetailsForm />} />
          <Route path="/register" element={<WrappedRegistrationForm />} />
          <Route path="/aboutus" element={<WrappedAboutUs />} />
          <Route path="/landing-page" element={<WrappedLandingPage />} />
          <Route path="/faq" element={<WrappedFAQ />} />
          <Route path="/t&c" element={<WrappedTermAndService />} />
          <Route path="/article" element={<WrappedArticle />} />
          <Route path="/contact-us" element={<WrappedContactUs />} />
          <Route path="/questionnaire/*" element={<WrappedQuestionnaire />} />
          {/* <Route path="/privacy" element={<WrappedPrivacyPolicy />} /> */}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;

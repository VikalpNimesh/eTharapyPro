import "./App.css";
import Home from "./pages/home/Home";
// import "rsuite/dist/rsuite.min.css";
import 'rsuite/dist/rsuite-no-reset.min.css';
import { CustomProvider } from "rsuite";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import LandingPage from "./pages/landing page/LandingPage";
import AboutUs from "./pages/aboutus page/AboutUs";
// import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    // <BrowserRouter basename="/app">
    //   <Routes>
    //       <Route path="/" element={} />
    //   </Routes>
    // </BrowserRouter>
    <CustomProvider theme="light">
    <Header/>
      <Home />
      {/* <LandingPage /> */}
      {/* <AboutUs/> */}
      <Footer/>

    </CustomProvider>
  );
}

export default App;

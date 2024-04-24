import "./App.css";
import Home from "./pages/home/Home";
// import "rsuite/dist/rsuite.min.css";
import 'rsuite/dist/rsuite-no-reset.min.css';
import { CustomProvider } from "rsuite";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

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

      <Footer/>
    </CustomProvider>
  );
}

export default App;

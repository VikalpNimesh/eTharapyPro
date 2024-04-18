import "./App.css";
import Home from "./pages/home/Home";
// import "rsuite/dist/rsuite.min.css";
import 'rsuite/dist/rsuite-no-reset.min.css';
import { CustomProvider } from "rsuite";

// import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    // <BrowserRouter basename="/app">
    //   <Routes>
    //       <Route path="/" element={} />
    //   </Routes>
    // </BrowserRouter>
    <CustomProvider theme="light">
      <Home />
    </CustomProvider>
  );
}

export default App;

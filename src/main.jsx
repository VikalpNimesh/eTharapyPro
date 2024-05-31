import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BookSessionProvider } from "./context/BookSessionContext.jsx";
import { WebCamProvider } from "./context/WebContext/WebContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <WebCamProvider>
    <BookSessionProvider>
      <App />
    </BookSessionProvider>
  </WebCamProvider>
  // {/* </React.StrictMode>, */}
);

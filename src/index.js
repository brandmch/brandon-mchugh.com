import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Maintenance_Alert from "./Maintence_Alert";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About_Me from "./Components/About_Me/about_me";
import Meme_Generator from "./Components/Meme_Generator/meme_generator";
import theme from "./theme";
import { ThemeProvider } from "@mui/system";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<About_Me />} />
          <Route path="/about_me" element={<App />} />
          <Route path="/home" element={<Maintenance_Alert />} />
          <Route path="/meme_generator" element={<Meme_Generator />} />
        </Routes>
      </Router>
    </ThemeProvider>

    {/* <Maintenance_Alert /> */}
  </React.StrictMode>
);

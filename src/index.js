import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "./App.css";
import Navbar from "./Component/Navbar";
import Carasoul from "./Component/Carasoul";
import Product from "./Component/Product";
import WhoWeAreSection from "./Component/About";
import ContactUs from "./Component/Contact";
import Cara from "../src/Component/Cara";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <div className="sticky-navbar">
      <Navbar />
    </div>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Product" element={<Product />} />
      <Route path="/About" element={<WhoWeAreSection />} />
      <Route path="/ContactUs" element={<ContactUs />} />
    </Routes>
  </BrowserRouter>
);

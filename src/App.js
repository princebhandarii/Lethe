import React from "react";

import main from "./Photos/main-img.png";
import Navbar from "./Component/Navbar";
import Carasoul from "./Component/Carasoul";
import Product from "./Component/Product";
import WhoWeAreSection from "./Component/About";
import ContactUs from "./Component/Contact";
import Cara from "../src/Component/Cara";
// import AnotherComponent from "./Component/AnotherComponent"; // Assuming you have another component for large screens

const HomePage = () => {
  return (
    <div className="font-sans">
      {/* Top Bar */}
      <div className="bg-black text-white flex flex-wrap justify-between items-center py-2 px-4 text-sm">
        <div>
          <span>📞 +91-9925419535</span> | <span>📧 db303268@gmail.com</span>
        </div>
        <div>
          <span></span>
        </div>
      </div>

      {/* Navbar */}
      {/* <div className="sticky-navbar">
        <Navbar />
      </div> */}

      {/* Main Image */}
      <div>
        <img src={main} alt="Example from URL" />
      </div>

      {/* Carousel visible only on medium screens and above */}
      <div className="mt-7 lg:hidden">
        <Carasoul />
      </div>

      {/* Another component visible on large screens and above */}
      <div className="sm:block hidden mt-7">
        <Cara />
      </div>

      {/* Product Section */}
      <Product />

      {/* About Us Section */}
      <WhoWeAreSection />

      {/* Contact Us Section */}
      <ContactUs />

      {/* Footer */}
      <footer className="bg-black text-white text-center py-4 px-4">
        <p>
          Contact For Inquiry:{" "}
          <span className="text-yellow-400">99254-19535</span>{" "}
        </p>
      </footer>
    </div>
  );
};

export default HomePage;

/* eslint-disable no-unused-vars */
import React, { useRef, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import Calculator from '../components/Calculator/Calculator';
import '../App.css';




function Home() {

 
  return (
    <div className="home">
      

      <ScrollToTop />
      {/* <Navbar /> */}
      <Calculator />
      {/* <Footer /> */}
      
    </div>
  );
}

export default Home;

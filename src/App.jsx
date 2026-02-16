import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Navbar from './components/Navbar';
import Footer from "./common/Footer";


export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />

        {/* About */}
        <Route path="/about" element={<About />} />

        {/* Services */}
       

        {/* Industries */}
       

        {/* Product */}
        
        {/* Contact */}
       
      </Routes>

      <Footer />
      {/* <FollowCursor /> */}
    </BrowserRouter>
  );
}
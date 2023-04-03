import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import Footer from "./Component/Footer";
import Portofolio from "./Component/Portofolio";
import Contact from "./Component/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/text" element={<Navbar />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/Portofolio" element={<Portofolio />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

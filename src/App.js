import React from "react";

import "./App.css";
import Missing from "./Components/Missing";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import About from "./Pages/About";
import Thoughts from "./Pages/Thoughts";
import Work from "./Pages/Work";
import PatientsDesign from "./Components/PatientsDesign";

const App = () => {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Work" element={<Work />} />
        <Route path="/Thoughts" element={<Thoughts />} />
        <Route path="*" element={<Missing />} />
        <Route path="/PatientsDesign" element={<PatientsDesign />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

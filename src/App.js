import React, { useEffect, useState } from "react";
import "./App.css";

import { Route, Routes, useLocation } from "react-router-dom";

import { Navbar } from "./components/index";
import { Footer } from "./containers";

import Landing from "./pages/landing/landing";
import ContactUs from "./pages/contactUs/contactUs";
import OurWorks from "./pages/ourWorks/ourWorks";
import ProjectDetailPage from "./pages/projectDetail/projectDetail";
import Story from "./pages/story/story";
import FreelanceDatabase from "./pages/freelanceData/freelanceData";

const App = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route className="abc" exact path="/" element={<Landing />} />
        <Route exact path="/connect" element={<ContactUs />} />
        <Route exact path="/spotlight" element={<OurWorks />} />
        <Route exact path="/spotlight/:id" element={<ProjectDetailPage />} />
        <Route exact path="/story" element={<Story />} />
        <Route exact path="/freelancers" element={<FreelanceDatabase />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

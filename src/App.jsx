import React from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Facts from "./components/Facts";
import Features from "./components/Features";
import Services from "./components/Services";
import Appointment from "./components/Appointment";
import Team from "./components/Team";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";
import Hero2 from "./components/Hero2";

function App() {
  return (
    <>
      <Navbar />
      <Hero2 />
      <About />
      <Facts />
      <Features />
      <Services />
      <Appointment />
      <Team />
      <Testimonial />
      <Footer />
    </>
  );
}

export default App;

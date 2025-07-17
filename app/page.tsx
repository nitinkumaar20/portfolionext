import Navbar from "./components/Header";
import HomePage  from "./components/HomePage";
import React from "react";
// app/layout.tsx
import './globals.css';// This must include your :root CSS
import AboutMe from "./components/AboutME";
import './App.css';
import Services from "./components/Services";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
export default function Home() {
  return (
    <div >
      <Navbar />
      <HomePage />
      <AboutMe/>
      <Services/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
  );
}

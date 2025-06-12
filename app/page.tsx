import Navbar from "./components/Header";
import HomePage  from "./components/HomePage";
import React from "react";
// app/layout.tsx
import './globals.css'; // This must include your :root CSS

export default function Home() {
  return (
    <div>
      <Navbar />
      <HomePage />
    </div>
  );
}

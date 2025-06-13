"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setIsScrolled(scrollPercent > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Home", href: "#section-one" },
    { name: "About", href: "#section-2" },
    { name: "Services", href: "#section-3" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-[99] h-20 px-6 md:px-40 flex items-center justify-between transition-all duration-300 text-lg ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md border-b border-gray-300"
          : ""
      }`}
    >
      {/* Logo */}
      <div>
        <a href="#">
          <Image
            src="https://drive.google.com/thumbnail?id=1IaAN_QyzOWGfOlVmk33P4Evu5W-jeVj_"
            alt="Logo"
            width={56}
            height={56}
            className="h-9 w-16"
          />
        </a>
      </div>

      {/* Desktop nav */}
      <nav className="hidden md:flex gap-6">
        {menuItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="text-[var(--mainColordark)] hover:text-black font-semibold transition"
          >
            {item.name}
          </a>
        ))}
      </nav>

      {/* Mobile Menu Toggle Button */}
      <button
        className="md:hidden text-3xl text-[var(--textColor)]"
        onClick={() => setIsNavOpen(true)}
        aria-label="Open Menu"
      >
        ☰
      </button>

      {/* Mobile Menu Drawer */}
      {isNavOpen && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-[var(--mainColordark)] text-white flex flex-col items-center justify-center gap-8 z-50 text-2xl">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsNavOpen(false)}
              className="hover:text-yellow-400 transition"
            >
              {item.name}
            </a>
          ))}
          <button
            onClick={() => setIsNavOpen(false)}
            className="absolute top-6 right-8 text-4xl"
            aria-label="Close Menu"
          >
            ✕
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;

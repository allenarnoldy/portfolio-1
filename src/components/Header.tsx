import React, { useState, useEffect } from "react";

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const handleScroll = () => {
    const sections = document.querySelectorAll("section");
    let current = "";
    sections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.clientHeight;
      if (window.scrollY >= top - 100) {
        current = section.getAttribute("id") || "";
      }
    });
    setActiveSection(current);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, section: string) => {
    e.preventDefault();
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
    setActiveSection(section);
  };

  const navItem = (id: string, label: string) => (
    <a
      href={`#${id}`}
      onClick={(e) => handleNavClick(e, id)}
      className={`nav-link text-gray-800 hover:text-indigo-600 transition ${
        activeSection === id ? "active-nav" : ""
      }`}
    >
      {label}
    </a>
  );

  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-indigo-600">Allen Arnoldy</div>
          <div className="hidden md:flex space-x-8">
            {navItem("home", "Home")}
            {navItem("projects", "Projects")}
            {navItem("contact", "Contact")}
          </div>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-800 focus:outline-none"
          >
            <i className="fas fa-bars text-xl"></i>
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            {navItem("home", "Home")}
            {navItem("projects", "Projects")}
            {navItem("contact", "Contact")}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;

// File: src/components/Footer.tsx
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="text-2xl font-bold text-indigo-400">Allen Arnoldy</div>
            <p className="text-gray-400 mt-1">Web Developer & Designer</p>
          </div>

          <div className="flex space-x-6">
            {["linkedin-in", "github", "twitter", "dribbble"].map((icon, idx) => (
              <a
                key={idx}
                href="#"
                className="text-gray-400 hover:text-white transition"
              >
                <i className={`fab fa-${icon}`}></i>
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2023 Allen Arnoldy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

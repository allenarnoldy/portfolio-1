import React from "react";

const Home: React.FC = () => {
  return (
    <section id="home" className="pt-24 pb-16 px-6 hero-gradient text-white">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Hi, I'm <span className="text-indigo-200">Allen Arnoldy</span>
            </h1>
            <h2 className="text-2xl md:text-3xl mb-6">Web Developer & Designer</h2>
            <p className="text-lg mb-8 text-indigo-100">
              I create beautiful, functional websites and applications with a focus on user experience and clean code.
            </p>
            <div className="flex space-x-4">
              <a
                href="#projects"
                className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-medium hover:bg-indigo-50 transition"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="border-2 border-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-indigo-600 transition"
              >
                Contact Me
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center fade-in delay-1">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-indigo-300 rounded-full overflow-hidden border-4 border-white shadow-xl">
                <div className="w-full h-full bg-indigo-200 flex items-center justify-center">
                  <i className="fas fa-user text-6xl text-indigo-600"></i>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white text-indigo-600 px-4 py-2 rounded-lg shadow-lg">
                <span className="font-bold">5+ Years</span> Experience
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

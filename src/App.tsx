import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <div className="font-sans bg-gray-50 text-gray-800">
      <Header />
      <h1 className="text-4xl text-pink-500">Test Tailwind</h1>
      <main>
        <Home />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
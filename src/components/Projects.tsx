import React from "react";

const projects = [
  {
    icon: "fas fa-laptop-code",
    title: "E-Commerce Platform",
    description:
      "A full-featured online store with cart functionality, user accounts, and payment processing.",
    tags: ["React", "Node.js", "MongoDB"],
    delay: "delay-1",
    color: "indigo",
  },
  {
    icon: "fas fa-mobile-alt",
    title: "Fitness Tracker App",
    description:
      "Mobile application for tracking workouts, nutrition, and progress with data visualization.",
    tags: ["React Native", "Firebase", "Redux"],
    delay: "delay-2",
    color: "blue",
  },
  {
    icon: "fas fa-chart-line",
    title: "Analytics Dashboard",
    description:
      "Real-time data visualization dashboard with customizable widgets and reporting.",
    tags: ["Vue.js", "D3.js", "Express"],
    delay: "delay-3",
    color: "green",
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-16 px-6 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4 fade-in">My Projects</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto fade-in delay-1">
          Here are some of my recent projects. Each one was carefully crafted to solve specific problems and deliver exceptional user experiences.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`project-card bg-white rounded-xl overflow-hidden shadow-md transition duration-300 fade-in ${project.delay}`}
            >
              <div
                className={`h-48 bg-${project.color}-100 flex items-center justify-center`}
              >
                <i className={`${project.icon} text-6xl text-${project.color}-600`}></i>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className={`bg-${project.color}-100 text-${project.color}-800 text-xs px-3 py-1 rounded-full`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href="#"
                  className={`text-${project.color}-600 font-medium hover:text-${project.color}-800 transition`}
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 fade-in delay-3">
          <a
            href="#"
            className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;

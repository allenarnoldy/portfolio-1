import React from "react";

const skills = [
  {
    icon: "fab fa-html5",
    title: "HTML/CSS",
    description: "Semantic markup and modern styling techniques",
    delay: "delay-1",
  },
  {
    icon: "fab fa-js",
    title: "JavaScript",
    description: "Interactive and dynamic web experiences",
    delay: "delay-2",
  },
  {
    icon: "fab fa-react",
    title: "React",
    description: "Component-based UI development",
    delay: "delay-1",
  },
  {
    icon: "fas fa-server",
    title: "Node.js",
    description: "Backend development and APIs",
    delay: "delay-2",
  },
];

const Skills: React.FC = () => {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 fade-in">My Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`bg-gray-50 p-6 rounded-xl text-center hover:shadow-lg transition fade-in ${skill.delay}`}
            >
              <div className="text-indigo-600 text-4xl mb-4">
                <i className={skill.icon}></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
              <p className="text-gray-600">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

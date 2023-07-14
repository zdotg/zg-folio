import React from "react";

const Skills = () => {
  return (
    <div
      className="flex justify-center bg-white text-slate-300 dark:bg-slate-800  "
      id="Skills"
    >
      <div className="max-w-3/4">
        <h2 className="text-center text-3xl font-light py-5 animate-char">
          Skills
        </h2>
        <div className="row text-center my-auto py-5 flex justify-center">
          <div className="col-lg-12 center">
            <button
              href="https://github.com/zdotg"
              className="mt-4 px-4 py-2 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-md font-medium hover:scale-105 transition-transform duration-200"
              role="button"
            >
              My GitHub
            </button>
          </div>
        </div>
        <div className="row  py-5 text-center  text-slate-700 grid grid-cols-1 md:grid-cols-3 gap-4 dark:text-slate-100">
          <div className="mb-3 leading-relaxed capitalize hover:scale-125 ">
            <ul>
              <li>React</li>
              <li>Next.js</li>
              <li>Tailwind CSS </li>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>Data Structures</li>
              <li>Object-Oriented Programming</li>
              <li>Python</li>
              <li>Cloud Deployments (AWS, GCS, Azure)</li>
              <li>SCSS</li>
            </ul>
          </div>
          <div className="mb-3 leading-relaxed capitalize hover:scale-125">
            <ul>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>Responsive Web Design</li>
              <li>Mobile-First Design Principles</li>
              <li>Cross-Platform Design</li>
              <li>Communication</li>
              <li>Teamwork</li>
              <li>Passion to Learn</li>
              <li>Planning/Coordination with teams</li>
              <li>Wire-framing</li>
              <li>React Native</li>
            </ul>
          </div>
          <div className="mb-3 leading-relaxed capitalize hover:scale-125">
            <ul>
              <li>Redux/Context</li>
              <li>Dependencies</li>
              <li>Version Control</li>
              <li>NoSQL Databases</li>
              <li>MongoDB/Atlas</li>
              <li>Docker and Kubernetes</li>
              <li>Flask/Insomnia</li>
              <li>CI/CD Pipelines</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

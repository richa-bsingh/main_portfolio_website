import { motion } from "framer-motion";
import React from "react";
import { portfolio } from "../data";  // Assuming portfolio contains the projects data
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

// Project Card component for each project
const ProjectCard = ({ project }) => {
  return (
    <a href={project.link} target="_blank" rel="noopener noreferrer" className="block">
      <div className="bg-gray-800 p-8 rounded-lg shadow-2xl transform transition-transform duration-300 hover:-translate-y-2 hover:scale-105 h-96 cursor-pointer">
        {/* Project title */}
        <h3 className="text-white text-2xl font-bold mb-4">
          {project.name}
        </h3>
        {/* Project description */}
        <p className="text-gray-400 text-base mb-6">
          {project.description}
        </p>
        {/* Project skills */}
        <div className="flex flex-wrap gap-2">
          {project.skills.map((skill, index) => (
            <span
              key={`project-skill-${index}`}
              className="bg-quaternary text-white text-sm px-3 py-1 rounded-full shadow-md"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
};

const Portfolio = () => {
  return (
    <div className="my-20">
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionText} text-center`}>
          Projects
        </h2>
      </motion.div>

      {/* Centered grid layout for 3 project cards in a row, with dynamic centering */}
      <div className="mt-10 md:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-center mx-auto max-w-screen-xl">
        {portfolio.map((project, index) => (
          <ProjectCard key={`project-${index}`} project={project} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Portfolio, "projects");

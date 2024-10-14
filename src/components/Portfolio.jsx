import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { experiences } from "../data";  // Import experience data
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

// Job panel component with alternating left-right layout
const JobPanel = ({ index, title, company_name, date, details, logo }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start("show");
    }
  }, [controls, inView]);

  // Determine whether the experience should be on the left or right of the timeline
  const isLeft = index % 2 === 0;

  return (
    <div ref={ref} className="relative w-full flex items-center justify-center py-10">
      {/* Left or right aligned experience based on the index */}
      <motion.div
        animate={controls}
        initial="hidden"
        variants={fadeIn(isLeft ? "left" : "right", "spring", 0, 0.75)}
        className={`${
          isLeft ? "ml-auto text-right" : "mr-auto text-left"
        } w-[45%] p-6 bg-gray-800 rounded-lg shadow-lg relative`}
        style={{ zIndex: 1 }}
      >
        {/* Job details */}
        <h3 className="text-white text-lg md:text-xl font-semibold">{title}</h3>
        <p className="text-gray-400 mt-1">{company_name}</p>
        <p className="text-gray-400">{date}</p>
        <ul className="mt-2 text-secondary text-sm md:text-base">
          {details.map((detail, idx) => (
            <li key={idx} dangerouslySetInnerHTML={{ __html: detail }} />
          ))}
        </ul>

        {/* Line connecting the logo to the card */}
        <div
          className={`absolute ${
            isLeft ? "right-full" : "left-full"
          } top-1/2 transform -translate-y-1/2 w-10 h-1 bg-gray-300`}
        ></div>
      </motion.div>

      {/* Circular logo marker on the timeline */}
      <div className="absolute top-1/2 transform -translate-y-1/2 w-16 h-16 rounded-full bg-white shadow-lg flex justify-center items-center z-10">
        <img src={logo} alt={`${company_name} logo`} className="w-10 h-10 object-contain" />
      </div>
    </div>
  );
};

const Portfolio = () => {
  const scrollContainerRef = useRef(null);

  return (
    <div ref={scrollContainerRef} className="relative w-full text-center px-20 lg:px-40">
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionText}`}>Experience</h2>
      </motion.div>

      {/* Timeline Container */}
      <div className="relative mt-10 md:mt-20">
        {/* Central vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-300 h-full"></div>

        {/* Experience panels */}
        <div className="relative flex flex-col gap-16">
          {experiences.map((experience, index) => (
            <JobPanel key={`experience-${index}`} index={index} {...experience} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Portfolio, "experience");

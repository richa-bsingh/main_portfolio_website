import React, { useState } from "react";
import { motion } from "framer-motion";
import { languages } from "../data"; // Assuming you have an array of languages in a separate data file
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

// LanguageCard component for each language logo
const LanguageCard = ({ language }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative flex justify-center items-center bg-white-800 p-4 rounded-full shadow-2xl transform transition-transform duration-300 hover:scale-110 w-24 h-24 cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Logo */}
      <img
        src={language.logo}
        alt={language.name}
        className="w-16 h-16 object-contain"
      />

      {/* Display the language name on hover */}
      {hovered && (
        <div className="absolute inset-0 bg-black bg-opacity-75 flex justify-center items-center rounded-full">
          <span className="text-white font-bold text-sm">
            {language.name}
          </span>
        </div>
      )}
    </div>
  );
};

const Languages = () => {
  return (
    <div className="my-20">
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionText} text-center`}>
          Programming Languages
        </h2>
      </motion.div>

      {/* Grid layout for 7 language logos in a row, with 2 rows */}
      <div className="mt-10 md:mt-20 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-10 justify-center">
        {languages.map((language, index) => (
          <LanguageCard key={`language-${index}`} language={language} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Languages, "languages");

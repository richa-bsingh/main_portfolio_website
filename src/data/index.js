

export const navLinks = [
  {
    id: "hero",
    title: "Home",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "languages",
    title: "Languages",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

// Only export 'experiences' once and make sure it's unique
export const experiences = [
  {
    title: "Business Intelligence and Data Intern",
    company_name: "New Jersey Institute of Technology",
    date: "Feb 2024 - Present",
    logo: "./dist/assets/pics/njit.png", // Add the path to the logo image
    details: [
      "Assisted the BI Team in modernizing data and analytics platforms to improve information accessibility.",
      "Utilized SQL, BI tools, AWS, Matillion ETL, and Snowflake for data integration, validation, and documentation.",
      "Automated validation testing, reducing defects by **70%**.",
      "Collaborated with 3+ cross-functional teams to integrate system APIs with Splunk dashboards, enhancing visibility and reducing incident response time by **90%**.",
    ],
    // skills: ["Data Integration", "AWS", "Python", "Snowflake", "Matillion ETL"],
  },
  {
    title: "Senior Software Engineer 1",
    company_name: "John Deere India Pvt. Ltd.",
    date: "Aug 2020 - Jun 2023",
    logo: "./dist/assets/pics/jd.png", // Add the path to the logo image
    details: [
      "Automated resource upgrades using shell scripts and AWS, reducing vulnerabilities by **90%**.",
      "Redesigned big data ingestion with Databricks workflows, cutting time and cost by **85%**.",
      "Implemented AWS blue-green deployments, achieving **99%** application availability.",
      "Accelerated product releases to new regions and improved defect resolution time by **20%**.",
      "Led the PAES feature to deliver analytics and KPIs using Databricks, Dojo.js, and ArcGIS.",
      "Implemented CI/CD automation with GitHub, Jenkins, AWS, and SonarQube, along with BDD and TDD testing using Java and Selenium.",
    ],
    // skills: ["AWS", "Databricks", "CI/CD", "Big Data", "Automation"],
  },
  // Add other experiences here...
];


// If you need to export 'portfolio' as well, make sure to define it only once.
export const portfolio = [
  {
    name: "Remote Work and Mental Health Data Visualization",
    description: "A Streamlit app that provides interactive data visualizations on how remote work impacts employee well-being.",
    skills: ["Streamlit", "Python", "Pandas", "Plotly"],
    link: "https://work-stress-dashboard.streamlit.app/"  // Add link to the project
  },
  {
    name: "Make My Space Trip",
    description: "A full stack web application made as part of GirlHack2023 Hackathon at New Jersey Institute of Technology.",
    skills: ["Vue JS", "Three JS", "Node JS","MongoDB", "GCP","Tailwind CSS"],
    link: "https://tabrez-njit.github.io/"  // Add live demo link
  },
  {
    name: "Discofy",
    description: "An AI music recommendation system and a live streaming music player.",
    skills: ["Next JS", "LLMS", "Fast API","MongoDB","AWS","OopenAI API","Kaggle","Python"],
    link: "https://github.com/tabrezdn1/girlhacks24-fe"  // Add GitHub repo link
  },
  // Add more projects...
];


export const languages = [
  // Row 1
  {
    name: "Tableau",
    logo: "./dist/assets/pics/tableau.png", // Path to your JavaScript logo
  },
  {
    name: "Python",
    logo: "./dist/assets/pics/python.png", // Path to your Python logo
  },
  {
    name: "Power BI",
    logo: "./dist/assets/pics/pbi.png", // Path to your Java logo
  },
  {
    name: "Snowflake",
    logo: "./dist/assets/pics/snowflake.png", // Path to your C++ logo
  },
  {
    name: "AWS",
    logo: "./dist/assets/pics/aws.png", // Path to your Ruby logo
  },
  {
    name: "Databricks",
    logo: "./dist/assets/pics/databricks.png", // Path to your Go logo
  },
  {
    name: "Excel",
    logo: "./dist/assets/pics/excel.png", // Path to your TypeScript logo
  },
  
  // Row 2
  {
    name: "Github",
    logo: "./dist/assets/pics/github.png", // Path to your Swift logo
  },
  {
    name: "Hadoop",
    logo: "./dist/assets/pics/hadoop.png", // Path to your PHP logo
  },
  {
    name: "PySpark",
    logo: "./dist/assets/pics/pyspark.png", // Path to your Kotlin logo
  },
  {
    name: "R",
    logo: "./dist/assets/pics/r.webp", // Path to your R logo
  },
  {
    name: "Streamlit",
    logo: "./dist/assets/pics/streamlit.svg", // Path to your Rust logo
  },
  {
    name: "PostgreSQL",
    logo: "./dist/assets/pics/pg.svg", // Path to your Scala logo
  },
  {
    name: "Matillion",
    logo: "./dist/assets/pics/matillion.png", // Path to your Dart logo
  },

  // Row 3
  {
    name: "Bitbucket",
    logo: "./dist/assets/pics/bitbucket.jpeg", // Path to your Perl logo
  },
  {
    name: "Jira",
    logo: "./dist/assets/pics/jenkins.png", // Path to your Lua logo
  },
  {
    name: "Confluence",
    logo: "./dist/assets/pics/conlfuence.webp", // Path to your Haskell logo
  },
  {
    name: "Slack",
    logo: "./dist/assets/pics/slack.png", // Path to your Objective-C logo
  },
  {
    name: "Splunk",
    logo: "./dist/assets/pics/splunk.png", // Path to your Elixir logo
  },
  {
    name: "MySQL",
    logo: "./dist/assets/pics/mysql.png", // Path to your Clojure logo
  },
  {
    name: "Oracle",
    logo: "./dist/assets/pics/oracle.png", // Path to your F# logo
  },

  // Row 4
  {
    name: "Shell",
    logo: "./dist/assets/pics/shell.png", // Path to your Shell logo
  },
  {
    name: "Pandas",
    logo: "./dist/assets/pics/pandas.png", // Path to your Matlab logo
  },
  {
    name: "Smartsheet",
    logo: "./dist/assets/pics/smartsheet.png", // Path to your Fortran logo
  },
  {
    name: "React JS",
    logo: "./dist/assets/pics/reactsjs.png", // Path to your Ada logo
  },
  {
    name: "Three JS",
    logo: "./dist/assets/pics/three.png", // Path to your Prolog logo
  },
  {
    name: "MongoDB",
    logo: "./dist/assets/pics/mdb.png", // Path to your VHDL logo
  },
  {
    name: "Java",
    logo: "./dist/assets/pics/java.png", // Path to your Erlang logo
  }
];

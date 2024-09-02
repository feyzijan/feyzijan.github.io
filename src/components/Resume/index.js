import DownloadIcon from "@mui/icons-material/Download";
import StarRating from './StarRating'; // Import the StarRating component

const skills = {
  "Programming Languages": [
    { name: 'Python', rating: 3 },
    { name: 'C', rating: 2 },
    { name: 'C++', rating: 2 },
    { name: 'Matlab', rating: 2 },
    { name: 'R', rating: 1 },
    // Add other programming languages with ratings
  ],
  "Data Analytics": [
    { name: 'Pandas', rating: 3 },
    { name: 'SQL', rating: 2 },
    { name: 'PySpark', rating: 2 },
    { name: 'Excel', rating: 3 },
    // Add other data analytics tools with ratings
  ],
  "ML Toolkits": [
    { name: 'Sklearn', rating: 3 },
    { name: 'Tensorflow/Keras', rating: 3 },
    { name: 'PyTorch', rating: 3 },
    // Add other ML toolkits with ratings
  ],

  "Data Visualization": [
    { name: 'Matplotlib/Plotly/Seaborn', rating: 3 },
    { name: 'D3.js', rating: 2 },
    { name: 'Tableau', rating: 3 },
    // Add other data visualization tools with ratings
  ],

  "ML Techniques": [
    { name: 'Feature Engineering', rating: 3 },
    { name: 'Hyperparameter Tuning', rating: 3 },

    // Add other ML techniques with ratings
  ],
  "Big Data & Distributed Systems": [
    { name: 'MapReduce and Hadoop', rating: 1 },
    { name: 'AWS', rating: 1 },
    // Add other big data and distributed systems with ratings
  ],

  "Modelling": [
    { name: 'Regression', rating: 4 },
    { name: 'Clustering Algorithms', rating: 4 },
    { name: 'Support Vector Machines', rating: 4 },
    { name: 'Decision Trees', rating: 4 },
    { name: 'Bayesian Networks', rating: 4 },
    { name: 'Hidden Markov Models', rating: 4 },
    // Add other ML libraries and models with ratings
  ],

  "Computational Methods": [
    { name: 'Numerical Methods', rating: 3 },
    { name: 'Convex Optimization', rating: 3 },
    { name: 'Graph Search', rating: 2 },
    { name: 'Game Playing Algorithms', rating: 2 },
    {name: 'Monte Carlo Methods', rating: 2},
    {name: 'General Data Structures & Algorithms', rating: 2}
    // Add other computational methods with ratings
  ],
  "Mechanical Engineering Tools": [
    { name: 'Solidworks/Fusion 3D CAD', rating: 3 },
    { name: 'Arduino/Microcontrollers', rating: 3 },
    { name: 'Simulink Control', rating: 3}
  ],


  "Languages": [
    { name: 'Turkish', rating: 3 },
    { name: 'English', rating: 3 },
    { name: 'German', rating: 3 },
    { name: 'Mandarin - still learning!', rating: 1 },
    // Add other languages with ratings
  ]
};


const education = [
  {
    degree: "MS",
    field: "Computational Data Analytics",
    institution: "Georgia Institute of Technology",
    result: "In Progress - 4.0",
    period: "2023 - Dec 2024"
  },
  {
    degree: "MEng & BEng",
    field: "Mechanical Engineering",
    institution: "Imperial College London",
    result: "First Class Honours",
    period: "2019 - 2023"
  }
];

const roles = [

    {
      title: "Data Engineering Intern, Vehicle Infotainment",
      company: "Tesla",
      period: "May 2024 - Aug 2024",
      description: `- Reduced Spark job failures and costs usage by optimizing resource allocation based on past job logs.
      - Created new daily Spark jobs with PySpark to parse out relevant performance metrics for audio and connectivity systems from raw vehicle datasets and visualized these in interactive Splunk dashboards built with SPL queries.
      - Developed a flexible firmware check architecture in Python to analyze car component performances across firmware versions, publishing daily metrics to various internal APIs for use in signing off on expanding firmware rollouts.`
    },


    {
      title: "Graduate Researcher ",
      company: "Georgia Tech Human Computer Interaction Lab",
      period: "Jan 2024 - present",
      description: "Conducting a research project on using electrodermal activity data from wearable sensors to predict IT worker productivity and recommend optimal break times, currently conducting background research and designing human trials"
    },


    {
      title: "Graduate Teaching Assistant",
      company: "Georgia Tech, Data and Visual Analytics Course",
      period: "Jan 2024 - present",
      description: "Resolving programming questions, grading coursework, and conducting assignment walkthroughs for several hundred students"
    },
  
  {
    title: "Corporate Equity Derivatives Intern",
    company: "JP Morgan",
    period: "Jun 2023 - Aug 2023",
    description: `- Built expertise in pricing and hedging of various option products, worked on live deals, and competed in trading simulations.
    - Investigated patterns in the volatility premium of convertible bonds, backtesting various instruments in Python to reveal an unexpected 40% drop in the final six months before maturity, and advised clients on pre-extension strategies
    - Analyzed competitors' enhanced share buyback strategies using webscraping and Pandas, visualized the inferred execution patterns, and identified improvements for a $50m+ yearly revenue product`
  },
  {
    title: "Market Risk Intern",
    company: "JP Morgan",
    period: "Jun 2022 - Aug 2022",
    description: `- Gained proficiency in quantitative risk management of linear and nonlinear trading books in Equity and Currency risk desks. 
    - Visualized risks from exotic FX options in interactive Tableau dashboards that auto-updated  with scheduled SQL queries
    - Automated risk breach monitoring with a Python script that analyzed intraday risk data upon email alerts, outputting problematic trades to Excel and visualizing key changes in risk metrics, streamlining a time consuming manual process`
  },
  {
    title: "Outreach Ambassador & Teaching Assistant",
    company: "Imperial College London",
    period: "Sep 2021 - Jun 2023",
    description: "Delivered STEM outreach programs for kids, including tutoring, engineering design workshops, and science experiments. Led office hours for freshmen and sophomores in Maths, Computing, and Mechatronics."
  }
  // Add other roles as needed
];


export default function Resume() {
  return (
    <div id="resume" className="min-h-screen flex flex-col text-center">
      <div className="text-5xl font-bold py-8" data-aos={"slide-down"}>
        Resume
      </div>
      <a
        href={require("../../assets/files/FeyziCanEserCV.pdf")}
        download={"FeyziCanEserCV"}
        className="inline-flex items-center px-6 py-2 mt-12 mx-auto w-fit text-sm font-medium border rounded-lg focus:z-10 focus:ring-4 focus:outline-none focus:text-blue-700 bg-gray-800 text-gray-400 border-gray-600 hover:text-white hover:bg-gray-700 focus:ring-gray-700"
      >
        Download CV <DownloadIcon />
      </a>


      <div className="education-section my-12">
        <div className="text-3xl font-bold">Education</div>
        <div className="grid grid-cols-2 gap-4">
          {education.map((edu, index) => (
            <div key={index} className="flex-none mr-8">
              <h3 className="text-lg font-semibold">{edu.degree} in {edu.field}</h3>
              <p>{edu.institution}</p>
              <p>{edu.result}</p>
              <time className="text-sm">{edu.period}</time>
            </div>
          ))}
        </div>
      </div>
      
      <div className="roles-section my-12">
  <div className="text-3xl font-bold mb-4">Experience</div> 
  <ol className="relative border-l border-gray-700 ml-9 mb-6">
    {roles.map((role, index) => (
      <li key={index} className="mb-10" data-aos="zoom-in">
        <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-8 ring-gray-900 bg-blue-900">
          {/* SVG icon */}
        </span>
        <div className="flex flex-col items-center">
          <h3 className="mb-1 text-lg font-semibold text-white">
            {role.company} - {role.title}
          </h3>
          <time className="block pt-1 pb-3 text-sm font-normal leading-none text-gray-500">
            {role.period}
          </time>
          <pre className="mb-4 text-base font-normal text-gray-400 whitespace-pre-line"> {/* Modified line */}
            {role.description}
          </pre> 
        </div>
      </li>
    ))}
  </ol>
</div>



      <div className="skills-section my-12">
        <div className="text-3xl font-bold">Skills</div>
        <p className="text-lg font-semibold">
          I used stars to denote my proficiency as follows : 3 start : well experienced, 2 stars : intermediate, 1 star : beginner, though with at least some applied experience.
          </p>
        <div className="grid grid-cols-2 gap-4 mt-6 px-4">
          {Object.entries(skills).map(([category, skills], index) => (
            <div key={index}>
              <div className="font-bold text-xl mb-2">{category}</div>
              <div className="grid grid-cols-1 gap-2">
                {skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center">
                    <span style={{ marginRight: '10px' }}>{skill.name}</span>
                    <StarRating rating={skill.rating} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

     
    </div>
  );
}

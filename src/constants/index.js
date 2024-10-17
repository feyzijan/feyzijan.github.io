import vulcanImage from '../assets/images/Projects/img_ABM_EURACE.jpeg';
import shellDatathonImage from '../assets/images/Projects/ShellDatathon.png';
import mazeBotImage from '../assets/images/Projects/img_MineRescueBot.jpg';
import streetLightImage from '../assets/images/Projects/img_EnergySavingStreetLight.jpg';
import embeddedCImage from '../assets/images/Projects/img_EmbeddedCLabs.jpg';
import bioFuelEcuImage from '../assets/images/Projects/img_BioFuelEngineECU.jpg';
import numericalMethodsImage from '../assets/images/Projects/img_NumericalMethods.jpg';
import machineLearningImage from '../assets/images/Projects/img_MLPlot.jpg';
import portfolioAnalyzerImage from '../assets/images/Projects/img_PortfolioAnalyzer.png';
import ecoswellImage from '../assets/images/Projects/img_EWB.jpg';
import literatureReviewImage from '../assets/images/Projects/img_LRP.jpg';
import citadelDatathonImage from '../assets/images/Projects/img_CitadelDatathon2022.jpg';
import aihack22Image from '../assets/images/Projects/img_AIHACK22Project.jpg';
import leohack2022Image from '../assets/images/Projects/img_LEOHack2022.jpg';
import rosImage from '../assets/images/Projects/img_Ros.png';
import matlabSimulinkImage from '../assets/images/Projects/img_MatlabSimulink.jpg';
import miniRacingCarImage from '../assets/images/Projects/img_CheeseWedge.jpg';
import labReportsImage from '../assets/images/Projects/img_LabReports.jpg';
import CAlgosImage from '../assets/images/Projects/img_CAlgos.png';
import ClassificationOptimization from '../assets/images/Projects/img_ClassificationOptimization.png';
import ConvexOptimization from '../assets/images/Projects/img_ConvexOptimization.png';

// import RAGLLM from '../assets/images/Projects/img_RAGLLM.png';
// import Optidule from '../assets/images/Projects/img_Optidule.png';

export const projects = [
  {
    title: "VULCAN: Agent Based Macroeconomics Model",
    desc: "Agent based macroeconomic model from scratch in C++ to evaluate macroeconomic policies.",
    tags: [
      {
        name: "C++",
        color: "red-600",
      },
      {
        name: "Python",
        color: "green-600",
      },
    ],

    img: vulcanImage, // Replace with actual path to image
    link: "https://github.com/feyzijan/Vulcan", // Update link when public
    code: "https://github.com/feyzijan/Vulcan", // Update link when public
  },



  {
    title: "Neural Network for Fuel Demand Prediction",
    desc: "A neural network to predict weekly fuel demand at Shell stations across in Turkey in 2019 by utilizing provided past sales data alongside an economic indicator dataset that I created. Done as part of the Shell Turkey Datathon 2022/23.",
    tags: [
      {
        name: "Python",
        color: "green-600",
      },
      {
        name: "Pandas",
        color: "blue-800",
      },
      {
        name: "Tensorflow",
        color: "red-600",
      },
    ],
    img: shellDatathonImage, // Replace with actual path to image
    link: "https://github.com/feyzijan/ShellDatathon",
    code: "https://github.com/feyzijan/ShellDatathon",
  },

  {
    title: "Maze Navigating Rescue Bot",
    desc: "A Buggy controlled with a Pickit that navigates mazes with color detection, stores path in memory and returns to starting position.",
    tags: [
      {
        name: "C",
        color: "red-600",
      },
    ],
    img: mazeBotImage, // Replace with actual path to image
    link: "https://github.com/feyzijan/MineRescueBot",
    code: "https://github.com/feyzijan/MineRescueBot",
  },


  {
    title: "Energy Saving Street Light",
    desc: "A Pickit programmed to operate a smart street light with minimal processor energy consumption.",
    tags: [
      {
        name: "C",
        color: "red-600",
      },
    ],
    img: streetLightImage, // Replace with actual path to image
    link: "https://github.com/feyzijan/EnergySavingStreetLight",
    code: "https://github.com/feyzijan/EnergySavingStreetLight",
  },


  {
    title: "Embedded C for Microcontrollers",
    desc: "Collection of codes for Embedded C for Microcontroller labs, with instructions and commented code.",
    tags: [
      {
        name: "C",
        color: "red-600",
      },
    ],
    img: embeddedCImage, // Replace with actual path to image
    link: "https://github.com/feyzijan/EmbeddedCLabs",
    code: "https://github.com/feyzijan/EmbeddedCLabs",
  },
  {
    title: "BioFuel Engine Control Unit",
    desc: "Custom designed PCB housing an Arduino programmed to act as the ECU of a Honda bicycle engine converted to run on biofuel.",
    tags: [
      {
        name: "C",
        color: "yellow-500",
      },
      { 
        name : 'PCB Design',
         color: "green-600"}
      ,
      { name: "Electrical Engineering", color: "blue-600" },
    ],
    img: bioFuelEcuImage, // Replace with actual path to image
    link: "https://github.com/feyzijan/BioFuelEngineECU",
    code: "https://github.com/feyzijan/BioFuelEngineECU",
  },

  {
    title: "Classification via Convex Optimization ",
    desc: "Implementing Support Vector Machines, Logistic Models, and polynomial kernels by solving convex optimisation problems, without using any ML libraries",
    tags: [
      {
        name: "Python",
        color: "blue-600",
      },
      {
        name: "Convex Optimization",
        color: "green-600",
      },
      {
        name: "CVXPY",
        color: "red-600",
      },
      // Add more tags as needed
    ],
    img: ClassificationOptimization, // Replace with the actual path to your image
    link: "https://github.com/feyzijan/ConvexOptimizationClassificationn",
    code: "https://github.com/feyzijan/ConvexOptimizationClassification",
  },



  {
    title: "Convex Optimization Problems",
    desc: "Collection of convex optimization problems solved using CVXPY, including steps to explicity formulate prompts as optimization problems",
    tags: [
      {
        name: "Python",
        color: "blue-600",
      },
      {
        name: "Convex Optimization",
        color: "green-600",
      },
      {
        name: "CVXPY",
        color: "red-600",
      },
      // Add more tags as needed
    ],
    img: ConvexOptimization , // Replace with the actual path to your image
    link: "https://github.com/feyzijan/ConvexOptimization",
    code: "https://github.com/feyzijan/ConvexOptimization",
  },

  


  {
    title: "Numerical Analysis",
    desc: "Repository for numerical analysis projects I did at Imperial, int he summer, and in my free time.",
    tags: [
      {
        name: "Python",
        color: "blue-600",
      },
      {
        name: "Root-finding",
        color: "green-600",
      },
      {
        name: "Interpolation",
        color: "red-600",
      },
      {
        name: "Curve Fitting",
        color: "red-600",
      },
      {
        name: "Genetic Algorithms",
        color: "red-600",
      },
      {
        name: "Numerical Linear Algebra",
        color: "red-600",
      },

    ],
    img: numericalMethodsImage , // Replace with actual path to image
    link: "https://github.com/feyzijan/NumericalMethods",
    code: "https://github.com/feyzijan/NumericalMethods",
  },
  {
    title: "Machine Learning",
    desc: "Repository for Machine Learning projects and explorations.",
    tags: [
      {
        name: "Python",
        color: "green-600",
      },
      {
        name: "Machine Learning",
        color: "blue-600",
      },
      {
        name: "Data Analysis",
        color: "red-600",
      },
    ],
    img: machineLearningImage, // Replace with actual path to image
    link: "https://github.com/feyzijan/MachineLearning",
    code: "https://github.com/feyzijan/MachineLearning",
  },


{
  title: "AIHACK 22: Energy Price Forecasting",
  desc: "Predicting energy prices in the UK for the Imperial AIHack 22.",
  tags: [
    {
      name: "Python",
      color: "red-600",
    },
    {
      name: "Sklearn",
      color: "yellow-600",
    },
    {
      name: "Pandas",
      color: "purple-600",
    },
  ],
  img: aihack22Image, // Replace with actual path to image
  link: "https://github.com/feyzijan/AIHACK22Project",
  code: "https://github.com/feyzijan/AIHACK22Project",
},




  {
    title: "Portfolio Analysis",
    desc: "Analysis and benchmarking of personal investment portfolio performance.",
    tags: [
      {
        name: "Python",
        color: "green-600",
      },
      {
        name: "Finance",
        color: "blue-600",
      },
      {
        name: "Data Visualization",
        color: "yellow-600",
      },
    ],
    img: portfolioAnalyzerImage, // Replace with actual path to image
    link: "https://github.com/feyzijan/PortfolioAnalyzer",
    code: "https://github.com/feyzijan/PortfolioAnalyzer",
  },

  {
    title: "Algorithms in C",
    desc: " This repo houses some computational problem solving work I've done in C, such as implemting sorting algorithms and finding shortest paths in graphs.",
    tags: [
      {
        name: "C",
        color: "green-600",
      },
      {
        name: "Data Structures And Algorithms",
        color: "blue-600",
      },

    ],
    img: CAlgosImage, // Replace with actual path to image
    link: "https://github.com/feyzijan/AlgosWithC",
    code: "https://github.com/feyzijan/AlgosWithC",
  },




{
  title: "MATLAB/Simulink Control Projects",
  desc: "Various control projects and simulations using MATLAB and Simulink.",
  tags: [
    {
      name: "MATLAB",
      color: "blue-600",
    },
    {
      name: "Simulink",
      color: "green-600",
    },
    {
      name: "Control Systems",
      color: "red-600",
    },
  ],
  img: matlabSimulinkImage, // Replace with actual path to image
  link: "https://github.com/feyzijan/MatlabSimulink",
  code: "https://github.com/feyzijan/MatlabSimulink",
},

{
    title: "Engineers Without Borders: Ecoswell 2022 Challenge",
    desc: "Designing a sustainable wireless mesh network to improve connectivity in rural Peru.",
    tags: [
      {
        name: "Sustainability",
        color: "green-600",
      },
    ],
    img: ecoswellImage, // Replace with actual path to image
    link: "https://drive.google.com/drive/folders/1wL0AF2cWGsPBlTtRO2fpqbaKE7mxR8kq?usp=share_link",
    code: "", // If applicable
},


{
    title: "Literature Review Paper: ML in AM",
    desc: "Reviewing state of the art in Machine Learning for In-situ Defect Detection in Powder Bed Additive Manufacturing.",
    tags: [
      {
        name: "Additive Manufacturing",
        color: "green-600",
      },
      {
        name: "Academic Research",
        color: "red-600",
      },

    ],
    img: literatureReviewImage, // Replace with actual path to image
    link: "https://drive.google.com/file/d/16WQUmh4a9_4Uifb-8BufHja4oGidAewZ/view?usp=sharing",
    code: "", // If applicable
},


{
    title: "Citadel Datathon: Big Supply Co",
    desc: "Citadel Europe Spring Datathon 2022 - Repo not yet avilabke",
    tags: [
      {
        name: "Data Analysis",
        color: "blue-600",
      },
      {
        name: "Python",
        color: "red-600",
      },
      {
        name: "Pandas",
        color: "purple-600",
      },
    ],
    img: citadelDatathonImage, // Replace with actual path to image
    link: "", // Update once available
    code: "", // If applicable
},



{
    title: "LEOHack 2022: Robot Control",
    desc: "LEOHack 2022 competition for satellite control using robotics.",
    tags: [

      {
        name: "Python",
        color: "red-600",
      },
      {
        name: "Numerical Methods",
        color: "purple-600",
      },
    ],
    img: leohack2022Image, // Replace with actual path to image
    link: "https://github.com/feyzijan/LEOHack2022",
    code: "https://github.com/feyzijan/LEOHack2022",
},



{
    title: "ROS Projects",
    desc: "A collection of projects and explorations using the ROS (Robot Operating System).",
    tags: [
      {
        name: "ROS",
        color: "blue-600",
      },

      {
        name: "Python",
        color: "red-600",
      },
      {
        name: "C++",
        color: "yellow-600",
      },

    ],
    img: rosImage, // Replace with actual path to image
    link: "https://github.com/feyzijan/ROS",
    code: "https://github.com/feyzijan/ROS",
},


{
    title: "Mini Electric Racing Car Design Project",
    desc: "Design and development of a mini electric racing car for a university project.",
    tags: [
      {
        name: "CAD",
        color: "blue-600",
      },
    ],
    img: miniRacingCarImage, // Replace with actual path to image
    link: "https://drive.google.com/file/d/1MTLiOmzHO5tVBERO2bBGxYePOBLblFgZ/view?usp=share_link",
    code: "", // If applicable
},
// ... additional projects as needed



{
  title: "Interesting Lab Work",
  desc: "A compilation of intriguing lab work and experiments conducted during my time at Imperial College London.",
  tags: [
    {
      name: "Python",
      color: "red-600",
    },
    {
      name: "Pandas",
      color: "purple-600",
    },
  ],
  img: labReportsImage, // Replace with actual path to image
  link: "", // Add the link once available
  code: "", // If applicable
}

 

];


import "../../App.css";
import DownloadIcon from "@mui/icons-material/Download";
// import LearningCode from "../../assets/images/learn-coding-clipart.svg";
import * as LottiePlayer from "@lottiefiles/lottie-player";

const roles = [
  {
    title: "Role 1",
    period: "Start - End Date",
    description: "What I did in Role 1",
    // You can add more fields as needed
  },
  {
    title: "Role 2",
    period: "Start - End Date",
    description: "What I did in Role 1",
    // You can add more fields as needed
  },
  {
    title: "Role 3",
    period: "Start - End Date",
    description: "What I did in Role 1",
    // You can add more fields as needed
  },
  // ... more roles
];


export default function About() {
  const getDate = () => {
    var dob = new Date("01/21/2003");
    var month_diff = Date.now() - dob.getTime();
    var age_dt = new Date(month_diff);
    var year = age_dt.getUTCFullYear();
    var age = Math.abs(year - 1970);
    return age;
  };
  return (
    <div
      id="about"
      className="min-h-screen bg-white flex flex-col text-center gap-5 text-black text-sm lg:text-lg  font-normal"
    >
      <div
        className="head text-3xl lg:text-5xl mt-12 font-bold"
        data-aos={"slide-down"}
      >
        About Me
      </div>
      <div className="flex flex-row  gap-6 ml-8">
        <div className="flex-col mt-14 flex flex-auto w-64 gap-6">
          <h3
            className="text-xl lg:text-3xl font-medium"
            data-aos={"fade-left"}
          >
            Hello there! Welcome to my budding website.  I'm <span className="text-yellow-600">Feyzi,</span> 
            a Data Science Master's student, and an overall curious individual. 
          </h3>
          <p
            className="pt-5 leading-7 text-slate-900 text-justify"
            data-aos={"fade-left"}
          >
            I've created this website quite recently (Nov 2023) to house some of the cool work I did at uni and in my free time.  My professional interests encompass a wide range of topics, including finance, economics, data science, and machine learning. 
          </p>
          <p
            className="text-justify leading-7 text-slate-900"
            data-aos={"fade-right"}
          >
            I've been building this website to showcase some of my interesting projects and to learn more about web development.
          </p>


          <p
            className="text-justify leading-7 text-slate-900"
            data-aos={"fade-right"}
          >
            You can find my resume in the next section - or download it by clicking the button on the right.
            In the Projects section there are short descriptions and links to the github repositories of some of my projects - sorted in descending order in terms of importance of sorts.
            Not every repo is as well documented as I would like, but I'm working on it. 
          </p>



        </div>

        <div
          class="relative flex-auto w-32   sm:rounded-lg  pl-4"
          data-aos={"slide-left"}
        >
          {/* <img
            src={LearningCode}
            alt="Learning Code"
            className="motion-safe:animate-zoomy"
          /> */}
          <div className="motion-safe:animate-zoomy">
            <lottie-player
              autoplay
              loop
              mode="bounce"
              src="https://assets10.lottiefiles.com/packages/lf20_w98qte06.json"
              style={{ width: "350px" }}
            />
          </div>
          <button className="py-1 md:py-2 lg:py-3 mt-3 lg:mt-5 text-white mx-auto px-4  lg:px-9 bg-blue-600 border-2 w-fit border-blue-500 rounded-3xl  hover:-translate-y-1.5 duration-[350ms] hover:duration-[350ms] hover:bg-blue-800 hover:scale-[1.023] focus:bg-blue-800 sm:text-xl  animate-zoomy">
            <a
              href={require("../../assets/files/FeyziCanEserCV.pdf")}
              download={"FeyziCanEserCV.pdf"}
            >
              Download CV
              <DownloadIcon />
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

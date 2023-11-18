import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import CopyrightIcon from "@mui/icons-material/Copyright";

export default function Contact() {
  return (
    <div id="contact" className="flex text-center flex-col gap-12 my-10 min-h-screen ml-4 overflow-hidden">
      <div className="text-5xl font-bold" data-aos={"fade"}>
        Contact
      </div>
      <div className="flex items-center justify-center flex-col md:flex-row ">
        <div className="flex-auto md:w-80 flex flex-col justify-center text-center items-center gap-1">
          <div data-aos={"slide-up"} className="text-center mt-10">
            <div className="text-white flex flex-row gap-7 w-fit mx-auto pt-4">
              {/* Social Icons */}
              {/* Add your social icons here as below */}
            </div>
            <div className="mt-6 italic text-sm font-medium text-blue-500">
              <span className="pl-1">Contact me at: <a href="mailto:feyzican4@gmail.com"><EmailIcon /> feyzican4@gmail.com</a></span>
            </div>
            <div className="mt-6 italic text-sm font-medium text-blue-500">
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from "react";

import pic from "../../public/photo.avif";

import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaTelegram } from "react-icons/fa6";

import { SiMongodb, SiExpress } from "react-icons/si";
import { FaReact, FaNodeJs } from "react-icons/fa6";

import { ReactTyped } from "react-typed";

function Home() {
  const [isDownloaded, setIsDownloaded] = useState(false);

  // Function to handle CV download
  const handleDownloadCV = () => {
    const cvPath = "Pawan_Kumar_CV.pdf"; // Ensure the file is inside the public folder
    const link = document.createElement("a");
    link.href = cvPath;
    link.download = "Pawan_Kumar_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Change button color to blue after download
    setIsDownloaded(true);

    // Reset color back to green after 3 seconds (optional)
    setTimeout(() => setIsDownloaded(false), 3000);
  };

  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-28"
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className="text-xl">Welcome In My Feed</span>
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1>Hello, I'm a</h1>
              <ReactTyped
                className="text-red-700 font-bold"
                strings={["Developer", "Programmer", "Coder", "Freelancer"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br />
            <p className="text-sm md:text-md text-justify">
              I am a highly motivated software developer with expertise in web
              development, C, C++, Java, MySQL, React, and SQL-based data
              analysis. I am passionate about building innovative applications
              and collaborating with dynamic teams to solve complex technical
              problems.
            </p>
            <br />
            {/* Social Media Icons */}
            <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
              <div className="space-y-2">
                <h1 className="font-bold text-center ">Available on</h1>
                <ul className="flex space-x-5">
                  <li>
                    <a
                      href="https://www.facebook.com/profile.php?id=100091307030220"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaSquareFacebook className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/pawan-kumar-581b5b246/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/@CODE_WITH_PAWAN"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <IoLogoYoutube className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://t.me/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaTelegram className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="space-y-2">
                <h1 className="font-bold text-center">Currently working on</h1>
                <div className="flex space-x-5">
                  <SiMongodb className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <SiExpress className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <FaReact className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <FaNodeJs className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                </div>
              </div>
            </div>

            {/* Download CV Button - Now positioned after "Currently working on" section */}
            <button
              onClick={handleDownloadCV}
              className={`block px-4 py-2 mt-8 rounded-lg transition duration-300 text-white ${
                isDownloaded ? "bg-blue-500" : "bg-green-500 hover:bg-green-700"
              }`}
            >
              {isDownloaded ? "CV Downloaded!" : "Download CV"}
            </button>
          </div>
          <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1">
            <img
              src={pic}
              className="rounded-full md:w-[450px] md:h-[450px]"
              alt="Profile"
            />
          </div>
        </div>
      </div>

      <hr />
    </>
  );
}

export default Home;

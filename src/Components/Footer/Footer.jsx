/* eslint-disable react/no-unescaped-entities */
import logo1 from "../../assets/logo1.png";
import globe from "../../assets/globe.png";
import logo2 from "../../assets/logo2.png";
import { CiMail } from "react-icons/ci";
import { LuMapPin } from "react-icons/lu";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Logo and tagline */}
            <div className="text-center flex flex-col md:flex-row justify-between gap-10 mb-20 md:text-left">
              <div className="flex flex-col items-center space-y-2">
                <div className="flex items-center space-x-2">
                  <img src={logo1} alt="Logo Part 1" className="h-8" />
                  <img src={globe} alt="Rotating Globe" className="h-8 animate-rotateGlobe" />
                  <img src={logo2} alt="Logo Part 2" className="h-8" />
                </div>
                <h1 className="text-gray-300 font-thin text-sm">
                  Skilling to Empower
                </h1>
              </div>
              <div>
                <p className="text-sm font-thin mt-2">
                  "empowering individuals with the skills to thrive in a
                  changing world."
                </p>
                <p className="text-sm font-thin">
                  univoc skilling to empower bridges talent and opportunity,
                  driving innovation and growth for a brighter future."
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Us */}
          <div>
            <h2 className="font-semibold text-4xl">About us</h2>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="/about" className="font-semibold text-4xl">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Academics */}
          <div>
            <h2 className="font-semibold text-4xl">Academics</h2>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="/courses" className="text-gray-400 font-[20px] text-3xl">
                  Programme
                </a>
              </li>
            </ul>
          </div>

          {/* Innovation */}
          <div>
            <h2 className="font-semibold text-4xl">Innovation</h2>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-gray-400 font-[20px] text-2xl">
                  Student
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 font-[20px] text-2xl">
                  Faculty
                </a>
              </li>
            </ul>
          </div>

          {/* Other Links */}
          <div>
            <h2 className="font-semibold text-4xl">Other Links</h2>
            <ul className="mt-4 space-y-1">
              <li>
                <a href="/job-section" className="text-gray-400 font-[20px] text-2xl">
                  Jobs
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 font-[20px] text-2xl">
                  Become A Teacher
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 font-[20px] text-2xl">
                  Events
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:col-span-4 mt-8">
          <div className="flex items-center gap-2 mb-6">
            <LuMapPin className="text-xl text-gray-400" />
            <p className="text-sm text-gray-500">Address</p>
          </div>
          <div className="flex items-center gap-2 mb-6">
            <CiMail className="text-xl text-gray-400" />
            <p className="text-sm text-gray-500">hrd@theunivoc.com</p>
          </div>
          <div className="mt-2 mb-0 flex space-x-4 border-b border-gray-400 pb-4 w-full">
            <a href="https://x.com/Univoc272586?t=NXnOf5m8VFe1G6coGzx7Cw&s=08" className="text-2xl hover:text-gray-400">
              <BsTwitterX className="text-4xl" />
            </a>
            <a href="https://www.instagram.com/uniivoc?igsh=MXN0aWRlcjNrM2NiNQ==" className="text-xl hover:text-gray-400">
              <FaInstagram className="text-4xl" />
            </a>
            <a href="https://www.linkedin.com/company/univocc/" className="text-xl hover:text-gray-400">
              <IoLogoLinkedin className="text-4xl" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61565893847420&mibextid=ZbWKwL" className="text-xl hover:text-gray-400">
              <FaYoutube className="text-4xl" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

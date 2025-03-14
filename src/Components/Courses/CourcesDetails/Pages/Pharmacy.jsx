import React, { useState } from "react";
import { ChevronRight, HandCoins, Laptop, Gift } from "lucide-react";
import pharmaImage from './pharma.png';
import mecha from'./mecha.png';
import mern from'./mern.png';
import mean from'./mean.png';
import java from'./java.png';
import ee from'./EE.png';
import ec from'./ec.png';
import dot from'./dot.png';
import datasci from'./datasci.png';
import chemi from'./chemi.png';
import pharmacyHeroImage from '/images/Pharmacy.png';
import pharmacyLabImage from '/images/Pharmacy2.png';

export default function ChemicalCourse() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const benefits = [
    {
      icon: <HandCoins className="w-8 h-8 text-white" />,
      title: "Placement Facilitation",
      description:
        "Career support and placement facilitation will be provided for students who successfully complete the program.",
    },
    {
      icon: <Laptop className="w-8 h-8 text-white" />,
      title: "Blended Delivery",
      description:
        "Chemical engineering courses combine online learning with hands-on in-person sessions, enhancing theoretical understanding and practical skills. This approach improves accessibility, engagement, and personalized learning for diverse needs.",
    },
    {
      icon: <Gift className="w-8 h-8 text-white" />,
      title: "Value Additions",
      description:
        "The students will be enabled with various other initiatives including Engineer's Innovation, First Micro-learning, Webinars and other impactful events",
    },
  ];

  const jobRoles = [
    "Pharmacist",
    "Pharmacy Sales Representative",
    "Pharmacy Technician",
    "Pharmacy Manager",
    "Clinical Pharmacist",
    "Pharmaceutical Scientist",
    "Compounding Pharmacist",
    "Hospital Pharmacist",
    "Research Pharmacist",
    "Regulatory Affairs Specialist",
  ];

  const relatedCourses = [
    {
      title: "Data science",
      rating: 4.5,
      image: datasci, // Add image URL here
    },
    {
      title: "Java Full Stack Web",
      rating: 4.5,
      image: java, // Add image URL here
    },
    {
      title: "Dot Net Full Stack",
      rating: 4.5,
      image: dot, // Add image URL here
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % benefits.length);
  };

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    return (
      <div className="flex">
        {[...Array(fullStars)].map((_, i) => (
          <span key={i} className="text-yellow-400">
            ★
          </span>
        ))}
        {hasHalfStar && <span className="text-yellow-400">½</span>}
        {[...Array(5 - Math.ceil(rating))].map((_, i) => (
          <span key={i} className="text-yellow-400">
            ☆
          </span>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#EEF1FF]">
      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <div className="relative h-[400px] bg-gradient-to-r from-[#2B6BE6] to-[#1C4ED8] overflow-hidden">
          <div className="absolute inset-0 flex items-start pt-12 justify-between px-8">
            <div className="text-white">
              <nav className="mb-12">
                <ul className="flex gap-5 text-sm opacity-80">
                  <li className="hover:opacity-100 cursor-pointer">Home</li>
                  <li>›</li>
                  <li className="hover:opacity-100 cursor-pointer">
                    Integrated Degree Programs
                  </li>
                  <li>›</li>
                  <li className="hover:opacity-100 cursor-pointer">Pharmacy</li>
                </ul>
              </nav>
              <h1 className="text-5xl font-bold mb-9 ml-8">PHARMACY</h1>
              <div className="flex items-center ml-9">
                <div className="flex text-yellow-400 ml-9 text-2xl">
                  {"★".repeat(4)}
                  {"☆"}
                </div>
                <span className="ml-6 text-sm">(4.5)</span>
              </div>
            </div>
            <img
              src={pharmacyHeroImage} // Updated to use imported image
              alt="pharmacy"
              className="h-[450px] object-contain mt-[-50px]"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-7xl mx-auto px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left Column */}
            <div>
              <h2 className="text-2xl font-bold mb-6">About the Program</h2>
              <p className="text-gray-600 mb-8">
                The Pharmacy program provides students with comprehensive
                knowledge of pharmaceutical sciences, focusing on drug
                development, formulation, and patient care. It covers subjects
                such as pharmacology, medicinal chemistry, pharmaceutical
                biotechnology, and pharmacy practice. Students gain practical
                experience through internships, clinical rotations, and lab
                work, preparing them for various roles in community, hospital,
                and industrial settings. The program also emphasizes ethical
                decision-making, patient communication, and the importance of
                healthcare systems. Graduates are equipped to work as
                pharmacists, researchers, or in regulatory bodies, contributing
                to public health and the advancement of pharmaceutical sciences.
              </p>

              <h2 className="text-2xl font-bold mb-6">Courses</h2>
              <div className="space-y-4">
                <select className="w-full border rounded-lg p-3">
                  <option>Technical Skills</option>
                </select>
                <select className="w-full border rounded-lg p-3">
                  <option>Functional skills</option>
                </select>
                <select className="w-full border rounded-lg p-3">
                  <option>Behavioural skills</option>
                </select>
              </div>
            </div>

            {/* Right Column */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <img
                src={pharmacyLabImage} // Updated to use imported image
                alt="Laboratory Work"
                className="w-full h-[340px] object-cover rounded-xl mb-6"
              />
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Duration</span>
                  <span className="font-medium">45hrs</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Language</span>
                  <span className="font-medium">English</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Total Credits</span>
                  <span className="font-medium">30</span>
                </div>
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg mt-6">
                  Start Learning
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-[#EEF1FF] py-16 px-4 sm:px-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12">
              Benefits
            </h1>
            <div className="relative">
              <div className="flex flex-col sm:flex-row gap-6 items-stretch">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className={`flex-1 bg-gradient-to-br from-[#4B83F1] to-[#3A66CC] rounded-2xl p-6 sm:p-8 text-white transition-all duration-300 ${
                      index === currentSlide
                        ? "opacity-100 scale-105"
                        : "opacity-80 sm:opacity-100"
                    } ${index !== currentSlide ? "hidden sm:block" : ""}`}
                  >
                    <div className="mb-4 sm:mb-6">{benefit.icon}</div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-4">
                      {benefit.title}
                    </h3>
                    <p className="text-sm leading-relaxed opacity-90">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
              <button
                onClick={nextSlide}
                className="absolute right-1/2 sm:right-[-20px] bottom-[-40px] sm:bottom-auto sm:top-1/2 transform translate-x-1/2 sm:translate-x-0 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors"
                aria-label="Next slide"
              >
                <ChevronRight className="w-6 h-6 text-blue-600" />
              </button>
            </div>
          </div>
        </div>

        {/* Job Roles and Related Courses Section */}
        <div className="bg-[#EEF1FF] p-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              {/* Job Roles Section */}
              <div>
                <h2 className="text-3xl font-bold mb-8 pb-2 border-b border-gray-200">
                  Job Roles
                </h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                  {jobRoles.map((role, index) => (
                    <li key={index} className="text-gray-700 flex items-center">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                      {role}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Related Courses Section */}
              <div>
                <h2 className="text-3xl font-bold mb-8 pb-2 border-b border-gray-200">
                  Related Courses
                </h2>
                <div className="space-y-6">
                  {relatedCourses.map((course, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 bg-white p-4 rounded-xl"
                    >
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-32 h-24 object-cover rounded-lg"
                      />
                      <div>
                        <h3 className="text-xl font-semibold mb-2">
                          {course.title}
                        </h3>
                        <div className="flex items-center">
                          {renderStars(course.rating)}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

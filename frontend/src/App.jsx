import { BrowserRouter, Routes, Route } from "react-router-dom";
import { motion } from "framer-motion"; // Import framer-motion
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import HeroSection from "./Components/Courses/HeroSection";
import Contact from "./Components/Contact";
import Login from "./Components/Login";
import HomePage from "./Components/Home/HomePage";
import Signup from "./Components/Signup";
import Footer from "./Components/Footer/Footer";
import JobSection from "./Components/Job Section/JobSection";
import Services from "./Components/Services/Services";
import Pharmacy from "./Components/Courses/CourcesDetails/Pages/Pharmacy";
import CluinaryArts from "./Components/Courses/CourcesDetails/Pages/CulinaryArts";

import DataScienceBusiness from "./Components/Courses/CourcesDetails/Pages/DataScienceBusiness";
import MarketingStrategies from "./Components/Courses/CourcesDetails/Pages/MarketingStrategies";
import DataScience from "./Components/Courses/CourcesDetails/Pages/DataScience";
import Javafullstack from "./Components/Courses/CourcesDetails/Pages/Javafullstack";
import Dotnet from "./Components/Courses/CourcesDetails/Pages/Dotnet";
import Mechanical from "./Components/Courses/CourcesDetails/Pages/Mechanical";
import Chemical from "./Components/Courses/CourcesDetails/Pages/Chemical";
import HotelManagement from "./Components/Courses/CourcesDetails/Pages/HotelManagement";
import Mean from "./Components/Courses/CourcesDetails/Pages/Mean";
import Mern from "./Components/Courses/CourcesDetails/Pages/Mern";
import ElectricalandElectronics from "./Components/Courses/CourcesDetails/Pages/ElectricalandElectronics";
import ElectricalandCommunication from "./Components/Courses/CourcesDetails/Pages/ElectricalandCommunication";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<HeroSection />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/job-section" element={<JobSection />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/Pharmacy" element={<Pharmacy></Pharmacy>} />
          <Route path="/Advances-Culinary-Arts" element={<CluinaryArts />} />

          <Route
            path="/DataScienceBusiness"
            element={<DataScienceBusiness />}
          />
          <Route
            path="/marketingstrategies"
            element={<MarketingStrategies />}
          />
          <Route path="/DataScience" element={<DataScience></DataScience>} />

          <Route path="/java" element={<Javafullstack></Javafullstack>} />
          <Route path="/DotNet" element={<Dotnet></Dotnet>} />

          <Route path="/Mechanical" element={<Mechanical></Mechanical>} />
          <Route path="/Chemical" element={<Chemical></Chemical>} />
          <Route
            path="/HotelManagement"
            element={<HotelManagement></HotelManagement>}
          />
          <Route path="/MEAN" element={<Mean></Mean>} />
          <Route path="/MERN" element={<Mern></Mern>} />
          <Route
            path="/Electrical and Electronics"
            element={<ElectricalandElectronics></ElectricalandElectronics>}
          />
          <Route
            path="/Electrical and Communication"
            element={<ElectricalandCommunication></ElectricalandCommunication>}
          />
        </Routes>
      </motion.div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

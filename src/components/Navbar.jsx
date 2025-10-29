import { RiMailSendLine, RiUserFollowFill } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from "./Sidebar";
import { BiHandicap } from "react-icons/bi";
import logo from "../assets/ChatGPT Image Oct 21, 2025, 02_22_39 PM.png";
import logo2 from "../assets/image.png";
import Login from "./Login";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";


const Header = () => {
  return (

    <>
      <header className="bg-blue-900 text-white flex justify-between w- h-9.4 items-center px-1 py-1">
        <div className="navbar-icon flex justify-items-center text-2xl relative left-20 gap-3">
          <FaFacebookF
            style={{
              padding: "6px",
              width: "40px",
              height: "33px", // height ko width ke barabar karo circular shape ke liye
              borderRadius: "50%", // full circle
              cursor: "pointer",
              position: "relative",
              right: "3px",
              backgroundColor: "white",
              color: "purple",
            }}
          />

          <FaInstagram
            style={{
              padding: "6px",
              width: "40px",
              height: "33px", // height ko width ke barabar karo circular shape ke liye
              borderRadius: "50%", // full circle
              cursor: "pointer",
              position: "relative",
              right: "3px",
              backgroundColor: "white",
              color: "purple",
            }}
          />
          <FaYoutube
            style={{
              padding: "6px",
              width: "40px",
              height: "33px", // height ko width ke barabar karo circular shape ke liye
              borderRadius: "50%", // full circle
              cursor: "pointer",
              position: "relative",
              right: "3px",
              backgroundColor: "white",
              color: "purple",
            }}
          />
          <FaTwitter
            style={{
              padding: "6px",
              width: "40px",
              height: "33px", // height ko width ke barabar karo circular shape ke liye
              borderRadius: "50%", // full circle
              cursor: "pointer",
              position: "relative",
              right: "3px",
              backgroundColor: "white",
              color: "purple",
            }}
          />


        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-3">
          <button className="bg-red-700 hover:bg-red-800 px-4 py-2 rounded relative right-5 text-white font-medium cursor-pointer">
            Contact Us
          </button>

          {/* Icons */}
          <RiMailSendLine className="text-gray-700 bg-yellow-400 w-9 h-9 p-2 rounded cursor-pointer hover:bg-yellow-500" />
          <FaSearch className="text-gray-700 bg-yellow-400 w-9 h-9 p-2 rounded cursor-pointer hover:bg-yellow-500" />
          <RiUserFollowFill className="text-gray-700 bg-yellow-400 w-9 h-9 p-2 rounded cursor-pointer hover:bg-yellow-500" />
          <BiHandicap className="text-gray-700 bg-yellow-400 w-9 h-9 p-2 rounded cursor-pointer hover:bg-yellow-500" />

          {/* Language Dropdown */}
          <label for="cars" ></label>
          <select id="cars" className="bg-yellow-400 text-black font-semibold rounded px-3 py-2 cursor-pointer focus:outline-none">
            <option className="cursor-pointer" value="volvo">हिन्दी संस्करण</option>
            <option className="cursor-pointer" value="saab">English</option>
          </select>
        </div>
      </header>
      <div className="secondNavbar mb-10">
        <div className="logo flex relative ">
          <img src={logo} className="w-60 h-50 rounded-full  " />
          <div className="header-line relative top-22 left-12 ">
            <span className="text-indigo-600 font-bold ">Master coding for software development. <p>Learn various programming languages, coding techniques, and best practices.</p></span>

            <img src={logo2} className="w-55 h-18 relative bottom-12  left-220" />
          </div>
        </div>
      </div>
      <div className="navbra-2 bg-yellow-500 font-bold text-center  justify-center  flex relative bottom-10 py-7  text-blue-900 ">
        <div className="input-class flex justify-center relative right-70  ">
          <input type="  text" placeholder="   Coading" className="rounded-2xl font-sans border-2 hover:bg-yellow-400  w-80  h-10" />
          <FaSearch style={{ padding: "5px", color: "blue", width: "60px", height: "30px", borderRadius: "30px", cursor: "pointer", position: "relative", right: "60px", top: "4px" }} />

        </div>
        <span className="relative top-3 right-18 font-bold cursor-pointer">Admission Open – Limited Seats</span>
        <button className="bg-orange-700  text-white cursor-pointer   rounded p-2 relative left-70">ENQUIRE NOW →</button>
      </div>

      <div className="navbar-sidebar flex">
        <Sidebar></Sidebar>
        <Login></Login>
      </div>
   
    </>

  );
};

export default Header;

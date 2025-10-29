import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaMedal } from "react-icons/fa6";
import { TbPlayerTrackNextFilled } from "react-icons/tb";

const Sidebar = () => {
  return (
    <div className="sidebar-inform container py-5 ">
      <div className="text-center rounded-3 p-4 p-md-5  ">

        <svg
          className="bi my-4"
          style={{ color: 'var(--bs-indigo)' }}
          width="100"
          height="100"
          aria-hidden="true"
        >
          <use xlinkHref="#bootstrap" />
        </svg>

        {/* Heading */}
        <h1 className="font-serif fw-bold fs-3 fs-md-1 relative right-35 bottom-30">
          Learn Web Development from  <br />

          <span className="text-orange-500 fw-bold relative left-15 top-1">Professional Trainers worked with Top Brands.</span>
        </h1>

        <span className='relative bottom-15 right-35'>Learn most demanding web technologies with cent percent internship.</span>
        {/* Paragraph */}
        <p className="mx-auto fs-5 text-slate-900 mt-3 mb-3 relative bottom-38 right-24" style={{ maxWidth: '700px' }}>
          Empower Your Leadership Potential With A Results-Driven Online MBA
        </p>
      
        {/* Buttons */}
        <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-3 relative right-25 mb-11">
          {/* Download Brochure Button */}
          <button
            className="flex items-center justify-center gap-2 border-3 border-orange-500 rounded hover:bg-orange-500 hover:text-black font-bold p-3"


          >
            DOWNLOAD BROCHURE
            <TbPlayerTrackNextFilled style={{ fontSize: "1.5rem" }} />


          </button>

          {/* An Classe of Eminence Button */}
          <button
            className="flex items-center justify-center gap-2 border-3 border-orange-500 rounded hover:bg-orange-500 hover:text-black font-bold p-3"

          >

            An Classe of Eminence
            <FaMedal style={{ fontSize: "1.5rem" }} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

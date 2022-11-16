import React from "react";
import "./Appointment.css";
import doctor from "../../assets/images/doctor.png";
import { Link } from "react-router-dom";

const Appointment = () => {
  return (
    <div
      id="box"
      className="mt-10 mx-auto rounded-md flex items-center justify-evenly"
    >
      <div className="w-1/2  ">
        <img
          src={doctor}
          alt=""
        />
      </div>
      <div className="w-1/2 p-10">
        <p className="font-bold text-[#19D3AE]">Appointment</p>
        <h3 className="text-2xl font-semibold mt-5 text-white">
          Make an appointment Today
        </h3>
        <p className="mt-5 text-justify text-white">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsumis that it has a more-or-less normal distribution of
          letters,as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page
        </p>
        <div className="w-28 mt-10">
          <button className="bg-[#19D3AE] p-2 rounded-md hover:bg-white">
            <Link to="/appointment">Get Started</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Appointment;

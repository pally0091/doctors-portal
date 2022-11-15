import React from "react";
import chair from "../../assets/images/chair.png";
import "./Banner.css";
import BannerCard from "./BannerCard";

const Banner = () => {
  return (
    <div id="banner">
      <div className="flex items-center p-8">
        <div className="w-1/2 p-5 ">
          <h1 className="text-3xl font-semibold">Your new smile starts here</h1>
          <p className="text-lg text-justify mt-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the
          </p>
        </div>
        <div className="w-1/2 p-5">
          <img
            src={chair}
            alt=""
          />
        </div>
      </div>
      <BannerCard></BannerCard>
    </div>
  );
};

export default Banner;

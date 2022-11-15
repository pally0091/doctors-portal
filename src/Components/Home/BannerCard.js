import React from "react";
import clock from "../../assets/icons/clock.svg";
import marker from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";
import Bcard from "./Bcard";

const BannerCard = () => {
  const cardInfos = [
    {
      name: "Opening Hours",
      description: "24 Hours 7 days",
      image:  clock ,
      bClass: "bg-[#19D3AE]",
    },
    {
      name: "Visit our Location",
      description: "Brroklyn NY, 10036, United State",
      image:  marker ,
      bClass: "bg-[#3A4256]",
    },
    {
      name: "Contact Us now",
      description: "+000123456789",
      image:  phone ,
      bClass: "bg-[#19D3AE]",
    },
  ];
  return (
    <div className="flex justify-evenly">
      {cardInfos.map((cardInfo) => (
        <Bcard
          key={cardInfo.name}
          cardInfo={cardInfo}
        ></Bcard>
      ))}
    </div>
  );
};

export default BannerCard;

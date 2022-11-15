import React from "react";
import fluoride from "../../assets/images/fluoride.png";
import cavity from "../../assets/images/cavity.png";
import whitening from "../../assets/images/whitening.png";
import Service from "./Service";

const Services = () => {
  const servicedata = [
    {
      name: "Fluoride Treatment",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      logo: fluoride,
    },
    {
      name: "Cavity Filling",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      logo: cavity,
    },
    {
      name: "Teeth Whitening",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
      logo: whitening,
    },
  ];
  return (
    <div className="mt-10">
      <div>
        <p className="text-[#19D3AE]">OUR SERVICES</p>
        <h3>Services We Provide</h3>
        <div className="flex justify-evenly mt-5">
          {servicedata.map((service) => (
            <Service
              key={service.name}
              service={service}
            ></Service>
          ))}
        </div>
        <div className="mt-10">
            service banner
        </div>
      </div>
    </div>
  );
};

export default Services;

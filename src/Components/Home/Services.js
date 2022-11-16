import React from "react";
import fluoride from "../../assets/images/fluoride.png";
import cavity from "../../assets/images/cavity.png";
import whitening from "../../assets/images/whitening.png";
import Service from "./Service";
import dental from '../../assets/images/treatment.png';

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
        <div className="mt-10 w-11/12 mx-auto flex items-center shadow-md shadow-slate-500">
            <div className="w-1/2 h-96 px-10 ">
              <img className="w-full h-full rounded-md" src={dental} alt=''/>
              </div>
              <div className="w-1/2 px-10">
                <h2 className="text-3xl font-semibold">Exceptional Dental Care, on Your Terms</h2>
                <p className="text-justify mt-5">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
              </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

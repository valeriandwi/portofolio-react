import { myProjects } from "@/constants";
import React from "react";
import { AiFillEye } from "react-icons/ai";
import Slider from "react-slick";

const Portofolio: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerPadding: "60px",
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <>
      <div className="bg-[#101013] flex pl-[8rem] flex-col py-20">
        <h1 className="text-white text-6xl font-bold mr-16 mb-8">Projects</h1>
        <div className="w-[85vw]">
          {myProjects.map(({ projectName, company }) => (
            <>
              <div className="flex flex-row justify-between w-full">
                <div className="flex flex-row w-full max-lg:justify-end cursor-pointer items-center">
                  <p className="text-2xl flex flex-col w-full max-lg:text-lg text-white font-bold hover:text-blue-400  border-b-2 border-white hover:border-blue-400 py-6">
                    {projectName}
                    <span className="text-xl text-gray font-light">
                      {company}
                    </span>
                  </p>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
      <div className="bg-[#18181B] flex pl-[8rem] flex-col py-16">
        <h1 className="text-white text-4xl font-bold mr-16 mb-16">Showcase</h1>
        <div className="w-[85vw] slider-container">
          <Slider {...settings}>
            <div className="w-full h-[12rem] justify-center cursor-pointer hover:opacity-50">
              <img
                src="./assets/beauty-and-care.png"
                className="h-full w-full"
              />
            </div>
            <div className="w-full h-[12rem] cursor-pointer hover:opacity-50">
              <img src="./assets/solvo-studio.png" className="h-full w-full" />
            </div>
            <div className="w-full h-[12rem] cursor-pointer hover:opacity-50">
              <img
                src="./assets/kintan-improvement.png"
                className="h-full w-full"
              />
            </div>
            <div className="w-full h-[12rem] cursor-pointer hover:opacity-50">
              <img src="./assets/hr-management.png" className="h-full w-full" />{" "}
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Portofolio;

import { myProjects } from "@/constants";
import React from "react";
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
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="bg-[#101013] flex pl-[8rem] max-lg:pl-[2rem] flex-col py-20">
        <h1 className="text-white text-6xl font-bold mr-16 mb-8 max-lg:text-3xl max-lg:mb-4">
          Projects
        </h1>
        <div className="w-[85vw] max-lg:w-screen max-lg:pr-[4rem]">
          {myProjects.map(({ projectName, company }) => (
            <>
              <div className="flex flex-row justify-between w-full">
                <div className="flex flex-row w-full max-lg:justify-end cursor-pointer items-center">
                  <p className="text-2xl max-lg:text-lg flex flex-col w-full text-white font-bold hover:text-blue-400  border-b-2 border-white hover:border-blue-400 py-6">
                    {projectName}
                    <span className="text-xl max-lg:text-lg text-gray font-light">
                      {company}
                    </span>
                  </p>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
      <div className="bg-[#18181B] flex pl-[8rem] max-lg:pl-[2rem]  flex-col py-16">
        <h1 className="text-white text-4xl font-bold mr-16 mb-16 max-lg:text-2xl">
          Showcase
        </h1>
        <div className="w-[85vw] max-lg:w-[90vw] max-md:w-[90vw] max-lg:pr-[2rem]  slider-container">
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

import React from "react";

const Footer: React.FC = () => {
  return (
    <>
      <div className="relative flex w-full bg-black pt-4">
        <div className="animate-marquee whitespace-nowrap relative">
          <span className="text-white text-6xl font-bold mr-8">
            Get in Touch
          </span>
          <span className="text-white text-6xl font-bold mr-8">
            Get in Touch
          </span>
          <span className="text-white text-6xl font-bold mr-8">
            Get in Touch
          </span>
        </div>
        <div className="absolute animate-marquee2 whitespace-nowrap ">
          <span className="text-white text-6xl font-bold mr-8">
            Get in Touch
          </span>
          <span className="text-white text-6xl font-bold mr-8">
            Get in Touch
          </span>
          <span className="text-white text-6xl font-bold mr-8">
            Get in Touch
          </span>
        </div>
      </div>
      <div className="w-full absolute bg-black lg:pl-[10rem] pt-16 py-8">
        <div className="text-white">
          Email <br />
          valerian.dwi.p@gmail.com
        </div>
      </div>
    </>
  );
};

export default Footer;

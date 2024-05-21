import React from "react";

const Portofolio: React.FC = () => {
  return (
    <div className="bg-black h-screen z-[999] items-center flex pl-[8rem] justify-between">
      <h1 className="text-white text-6xl font-bold mr-16">Portofolio</h1>
      <div className="w-full flex">
        <div className="p-1 bg-white w-[24rem] h-[24rem] mr-8">
          <div className="bg-gray h-full" />
        </div>
        <div className="p-1 bg-white w-[24rem] h-[24rem] mr-8">
          <div className="bg-gray h-full" />
        </div>
        <div className="p-1 bg-white w-[24rem] h-[24rem]">
          <div className="bg-gray h-full" />
        </div>
      </div>
    </div>
  );
};

export default Portofolio;

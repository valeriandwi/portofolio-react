import React from "react";
import "./index.scss";

const Introduction: React.FC = () => {
  return (
    <div className="max-w-[100vw]">
      <div className="gradient-bg py-[10rem] text-white">
        <div className="gradients-container">
          <div className="g1" />
          <div className="g2" />
          <div className="g3" />
          <div className="g4" />
          <div className="interactive" />
        </div>
        <section className="flex justify-center flex-col gap-4 max-lg:gap-2 lg:pl-[10rem] max-lg:pl-[2rem] h-full">
          <h2 className="text-6xl max-lg:text-6xl sm:leading-[0]">Hi, I'm</h2>
          <h1 className="text-8xl font-bold max-lg:text-6xl sm:leading-[0]">
            Valerian Dwi Purnomo
          </h1>
          <h3 className="text-4xl max-lg:text-2xl sm:leading-[0]">
            Frontend Developer
          </h3>
        </section>
        {/* <section className="text-container justify-center lg:pl-[10rem] pr-[12rem] max-lg:pl-[2rem] max-lg:pr-[4rem]">
            <h2 className="text-2xl max-lg:text-2xl mb-4">About Me</h2>
            <h3 className="text-5xl font-medium max-lg:text-4xl">
              Constantly pushing the boundaries of what's possible, I love
              diving into the latest technologies
            </h3>
          </section> */}
      </div>
    </div>
  );
};

export default Introduction;

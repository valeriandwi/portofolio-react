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
        <section className="text-container justify-center lg:pl-[10rem] max-lg:pl-[2rem] gap-8">
          <h2 className="text-6xl max-lg:text-4xl">Hi, My Name is</h2>
          <h1 className="text-8xl font-bold max-lg:text-6xl">
            Valerian Dwi Purnomo
          </h1>
          <div className="font-bold text-4xl md:text-4xl [text-wrap:balance]">
            <span className="text-white inline-flex flex-col h-[calc(theme(fontSize.4xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.4xl)*theme(lineHeight.tight))] overflow-hidden">
              <ul className="block animate-text-slide-3 text-left leading-tight [&_li]:block">
                <li>Frontend Developer</li>
                <li>Data Scientist</li>
                <li>Tech-Savvy</li>
                <li aria-hidden="true">Frontend Developer</li>
              </ul>
            </span>
          </div>
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

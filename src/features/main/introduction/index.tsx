import React from "react";

const Introduction: React.FC = () => {
  return (
    <div className="max-w-screen h-fit">
      <div className="gradient-bg h-[150vh] max-lg:h-[200vh]">
        <div className="flex-col flex space-y-[65vh] max-lg:space-y-[100vh]">
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
          <section className="text-container justify-center lg:pl-[10rem] pr-[12rem] max-lg:pl-[2rem] max-lg:pr-[4rem]">
            <h2 className="text-2xl max-lg:text-2xl mb-4">About Me</h2>
            <h3 className="text-5xl font-medium max-lg:text-4xl">
              Constantly pushing the boundaries of what's possible, I love
              diving into the latest technologies
            </h3>
          </section>
        </div>
        <div className="gradients-container h-screen">
          <div className="g1"></div>
          <div className="g2"></div>
          <div className="g3"></div>
          <div className="g4"></div>
          <div className="interactive"></div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;

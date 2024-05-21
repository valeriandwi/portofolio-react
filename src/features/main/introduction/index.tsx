import React from "react";
import AnimatedBackgroundWrapper from "./animated-bg-wrapper";
const Introduction: React.FC = () => {
  return (
    <div className="max-w-[100vw]">
      <AnimatedBackgroundWrapper>
        <section className="flex justify-center flex-col gap-4 max-lg:gap-2 lg:pl-[10rem] max-lg:pl-[2rem] h-full">
          <h2 className="text-6xl max-lg:text-4xl">Hi, I'm</h2>
          <h1 className="text-8xl font-bold max-lg:text-4xl">
            Valerian Dwi Purnomo
          </h1>
          <h3 className="text-4xl max-lg:text-xl max-lg:font-light">
            Frontend Developer
          </h3>
        </section>
      </AnimatedBackgroundWrapper>
    </div>
  );
};

export default Introduction;

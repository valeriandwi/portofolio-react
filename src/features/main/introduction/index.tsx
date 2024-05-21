import React from "react";
import "./index.scss";
import { useSpring, animated } from "react-spring";

const Introduction: React.FC = () => {
  const moveVerticalAnimation = useSpring({
    from: { transform: "translateX(-50%) translateY(-10%)" },
    to: [
      { transform: "translateX(50%) translateY(10%)" },
      { transform: "translateX(-50%) translateY(-10%)" },
    ],
    config: { duration: 30000 },
    loop: { reverse: true },
  });

  const moveInCircleAnimation = useSpring({
    from: { transform: "rotate(0deg)" },
    to: [{ transform: "rotate(180deg)" }, { transform: "rotate(360deg)" }],
    config: { duration: 20000 },
    loop: { reverse: true },
  });

  const moveHorizontalAnimation = useSpring({
    from: { transform: "translateY(-50%)" },
    to: [{ transform: "translateY(50%)" }, { transform: "translateY(-50%)" }],
    config: { duration: 40000 }, // 30 seconds for the complete animation cycle
    loop: { reverse: true },
  });

  return (
    <div className="max-w-[100vw]">
      <div className="gradient-bg py-[10rem] text-white">
        <div className="gradients-container">
          <animated.div className="gradient g1" style={moveVerticalAnimation} />
          <animated.div className="gradient g2" style={moveInCircleAnimation} />
          <animated.div className="gradient g3" style={moveInCircleAnimation} />
          <animated.div
            className="gradient g4"
            style={moveHorizontalAnimation}
          />
          <div className="interactive" />
        </div>
        <section className="flex justify-center flex-col gap-4 max-lg:gap-2 lg:pl-[10rem] max-lg:pl-[2rem] h-full">
          <h2 className="text-6xl max-lg:text-6xl">Hi, I'm</h2>
          <h1 className="text-8xl font-bold max-lg:text-6xl">
            Valerian Dwi Purnomo
          </h1>
          <h3 className="text-4xl max-lg:text-2xl">Frontend Developer</h3>
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

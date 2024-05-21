import React from "react";
import "./index.scss";
import { useSpring, animated } from "react-spring";

interface AnimatedBackgroundWrapperProps {
  children: React.ReactNode;
}

const AnimatedBackgroundWrapper: React.FC<AnimatedBackgroundWrapperProps> = ({
  children,
}) => {
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
    <div className="gradient-bg py-[10rem] text-white">
      <div className="gradients-container">
        <animated.div className="gradient g1" style={moveVerticalAnimation} />
        <animated.div className="gradient g2" style={moveInCircleAnimation} />
        <animated.div className="gradient g3" style={moveInCircleAnimation} />
        <animated.div className="gradient g4" style={moveHorizontalAnimation} />
        <div className="interactive" />
      </div>
      {children}
    </div>
  );
};

export default React.memo(AnimatedBackgroundWrapper);

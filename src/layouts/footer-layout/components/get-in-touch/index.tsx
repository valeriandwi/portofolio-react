import React from "react";

const marqueeItems = Array.from({ length: 7 }, (_, index) => (
  <span
    className="text-white text-6xl max-lg:text-xl font-bold mr-8"
    key={"animate1" + index}
  >
    Get in Touch
  </span>
));

const GetInTouch: React.FC = () => {
  return (
    <div className="relative flex max-w-[100vw] bg-black pt-4 overflow-hidden">
      <div className="animate-marquee whitespace-nowrap relative">
        {marqueeItems}
      </div>
      <div className="absolute animate-marquee2 whitespace-nowrap">
        {marqueeItems.map((item, index) =>
          React.cloneElement(item, { key: "animate2" + index })
        )}
      </div>
    </div>
  );
};

export default GetInTouch;

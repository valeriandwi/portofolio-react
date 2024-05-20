import React from "react";

const GetInTouch: React.FC = () => {
  return (
    <div className="relative flex max-w-[100vw] bg-black pt-4 overflow-hidden">
      <div className="animate-marquee whitespace-nowrap relative will-change-transform">
        <span className="text-white text-6xl font-bold mr-8">Get in Touch</span>
        <span className="text-white text-6xl font-bold mr-8">Get in Touch</span>
        <span className="text-white text-6xl font-bold mr-8">Get in Touch</span>
      </div>
      <div className="absolute animate-marquee2 whitespace-nowrap will-change-transform">
        <span className="text-white text-6xl font-bold mr-8">Get in Touch</span>
        <span className="text-white text-6xl font-bold mr-8">Get in Touch</span>
        <span className="text-white text-6xl font-bold mr-8">Get in Touch</span>
      </div>
    </div>
  );
};

export default GetInTouch;

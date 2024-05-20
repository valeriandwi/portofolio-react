import React from "react";
import {
  AiFillAliwangwang,
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";

const Sider: React.FC = () => {
  return (
    <div className="max-lg:hidden">
      <p className="top-[2rem] left-[2rem] fixed text-white z-[999]">
        <AiFillAliwangwang size="40" color="#fff" />
      </p>
      <div className="text-white z-[999] block bottom-[5rem] left-[2rem] fixed">
        <div className="flex gap-8 flex-col">
          <AiFillInstagram size={"40"} color="#71717A" />
          <AiFillGithub size={"40"} color="#71717A" />
          <AiFillLinkedin size={"40"} color="#71717A" />
        </div>
      </div>
    </div>
  );
};

export default Sider;

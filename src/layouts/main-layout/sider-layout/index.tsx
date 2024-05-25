import React from "react";
import {
  AiFillAliwangwang,
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { Link } from "react-router-dom";

const Sider: React.FC = () => {
  return (
    <div className="max-lg:hidden">
      <p className="top-[2rem] left-[2rem] fixed text-white z-[99]">
        <AiFillAliwangwang size="40" color="#fff" />
      </p>
      <div className="text-white z-[999] block bottom-[5rem] left-[2rem] fixed">
        <div className="flex gap-8 flex-col">
          <Link to="https://www.instagram.com/valerian_dwi/">
            <AiFillInstagram
              size={"40"}
              color="#71717A"
              className="hover:!text-white"
            />
          </Link>
          <Link to="https://github.com/valeriandwi">
            <AiFillGithub
              size={"40"}
              color="#71717A"
              className="hover:!text-white"
            />
          </Link>
          <Link to="https://www.linkedin.com/in/valeriandwi/">
            <AiFillLinkedin
              size={"40"}
              color="#71717A"
              className="hover:!text-white"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sider;

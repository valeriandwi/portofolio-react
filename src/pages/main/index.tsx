import React from "react";
import "./main.css";
import {
  TiSocialGithub,
  TiSocialInstagram,
  TiSocialLinkedin,
} from "react-icons/ti";
import {
  AiFillAliwangwang,
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";

const MainPage: React.FC = () => {
  return (
    <div>
      <div className="max-lg:hidden">
        <p className="top-[2rem] left-[2rem] fixed text-white z-[999]">
          <AiFillAliwangwang size="40" color="#fff" />
        </p>
        <p className="text-white z-[999] block bottom-[5rem] left-[2rem] fixed">
          <div className="flex gap-8 flex-col">
            <AiFillInstagram size={"40"} color="#71717A" />
            <AiFillGithub size={"40"} color="#71717A" />
            <AiFillLinkedin size={"40"} color="#71717A" />
          </div>
        </p>
      </div>

      <div className="max-w-screen h-fit">
        <div className="gradient-bg h-[150vh] max-lg:h-[200vh]">
          <div className="flex-col flex space-y-[65vh] max-lg:space-y-[100vh]">
            <section className="text-container justify-center lg:pl-[10rem] max-lg:pl-[2rem]">
              <h2 className="text-6xl max-lg:text-4xl">Hi, My Name is</h2>
              <h1 className="text-8xl font-bold max-lg:text-6xl">
                Valerian Dwi Purnomo
              </h1>
              <h3 className="text-2xl max-lg:text-2xl">
                Frontend Web Developer
              </h3>
            </section>
            <section className="text-container justify-center lg:pl-[10rem] pr-[12rem] max-lg:pl-[2rem] max-lg:pr-[4rem]">
              <h2 className="text-2xl max-lg:text-2xl">About Me</h2>
              <h3 className="text-6xl font-medium max-lg:text-4xl">
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
      <div className="h-fit py-[5rem] w-full relative bg-[#101013] pl-[10rem] max-lg:pl-[2rem] text-white pr-[12rem] max-lg:pr-[4rem]">
        <h2 className="text-2xl">Experience</h2>
        <h3 className="text-4xl font-medium max-lg:text-2xl">
          As a frontend web developer with over 4 years of experience, I have
          successfully contributed to various web development projects,
          possessing a deep understanding of modern technologies, especially
          React. My skills include implementing innovative designs, optimizing
          performance, and effectively solving technical issues. I have a track
          record of creating superior user experiences and ensuring websites
          meet the standards.
        </h3>
      </div>
      <div className="h-fit py-8 w-full absolute bg-[#18181B] pl-[10rem] text-white pt-[5rem] pr-[12rem]"></div>
    </div>
  );
};

export default MainPage;

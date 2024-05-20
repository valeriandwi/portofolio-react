import { myExperiences } from "@/constants";
import React from "react";

const Experience: React.FC = () => {
  return (
    <>
      <section className="py-[5rem] max-w-full relative bg-[#101013] pl-[10rem] max-lg:pl-[2rem] text-white pr-[12rem] max-lg:pr-[4rem]">
        <h2 className="text-2xl mb-4">Experience</h2>
        <h3 className="text-3xl font-medium max-lg:text-2xl">
          As a frontend web developer with over 4 years of experience, I have
          successfully contributed to various web development projects,
          possessing a deep understanding of modern technologies, especially
          React. My skills include implementing innovative designs, optimizing
          performance, and effectively solving technical issues. I have a track
          record of creating superior user experiences and ensuring websites
          meet the standards.
        </h3>
      </section>
      <section className="h-fit py-8 max-w-full relative bg-[#18181B] pl-[10rem] max-lg:pl-[2rem] text-white pt-[5rem] pr-[12rem] max-lg:pr-[4rem]">
        <h2 className="text-2xl mb-8 font-bold">Work Experience</h2>
        {myExperiences.map(({ year, jobTitle, company }, index) => (
          <div key={index}>
            <div className="flex flex-row justify-between w-3/5 max-lg:w-full">
              <h1 className="text-3xl text-gray font-bold">{year}</h1>
              <div className="flex flex-col space-y-2">
                <p className="text-3xl text-white font-bold">{jobTitle}</p>
                <p className="text-xl text-gray">{company}</p>
              </div>
            </div>
            <hr className="mt-8 mb-8" />
          </div>
        ))}
      </section>
    </>
  );
};

export default Experience;

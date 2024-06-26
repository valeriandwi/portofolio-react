import { myExperiences } from "@/constants";
import React from "react";

const Experience: React.FC = () => {
  return (
    <>
      <section className="py-[5rem] max-lg:py-[3rem] max-w-full relative bg-[#101013] pl-[10rem] max-lg:pl-[2rem] text-white pr-[12rem] max-lg:pr-[2rem]">
        <h2 className="text-3xl mb-4 font-bold max-lg:text-xl">Experience</h2>
        <h3 className="text-3xl font-medium max-lg:text-lg leading-[3rem] max-lg:leading-normal max-lg:font-light">
          As a frontend web developer with over 4 years of experience, I have
          successfully contributed to various web development projects,
          possessing a deep understanding of modern technologies, especially
          React. My skills include implementing innovative designs, optimizing
          performance, and effectively solving technical issues. I have a track
          record of creating superior user experiences and ensuring websites
          meet the standards.
        </h3>
      </section>
      <section className="h-fit py-16 max-lg:py-8 max-w-full relative bg-[#18181B] pl-[10rem] max-lg:pl-[2rem] text-white pr-[12rem] max-lg:pr-[2rem]">
        <h2 className="text-3xl mb-8 font-bold max-lg:text-xl">
          Work Experience
        </h2>
        {myExperiences.map(({ year, jobTitle, company }, index) => (
          <div key={index}>
            <div className="flex flex-row justify-between w-3/5 max-lg:w-full">
              <h1 className="text-3xl text-gray font-bold max-lg:text-xl max-lg:font-semibold w-1/2">
                {year}
              </h1>
              <div className="flex flex-col max-lg:w-full max-lg:justify-end">
                <p className="text-3xl max-lg:text-lg text-white font-bold">
                  {jobTitle}
                </p>
                <p className="text-xl max-lg:text-lg text-gray">{company}</p>
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

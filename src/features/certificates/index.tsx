import React from "react";

const Certificates: React.FC = () => {
  return (
    <div>
      <div className="bg-[#18181B] flex pl-[8rem] flex-col py-32 pr-16 max-lg:pl-[2rem]">
        <h1 className="text-white text-6xl font-bold mr-16 mb-8 max-lg:text-4xl">
          Certificates
        </h1>
        <h2 className="text-4xl text-white font-semibold max-lg:text-2xl">
          Frontend Web Developer (Intermediate Level)
        </h2>
        <p className="text-xl text-justify mb-4 max-lg:text-lg text-gray">
          This certificate is aimed at Front-End Web Developers who want to
          develop websites with UI components that are reusable, declarative,
          and reactive to data changes. By the end of this class, students will
          be able to create web applications with React using functional
          components, stateful components, and controlled components.
        </p>
        <div className="grid grid-cols-5 gap-2 max-lg:grid-cols-1 place-items-center">
          <img src="./assets/certificates/react-1.png" className="h-[12rem]" />
          <img src="./assets/certificates/react-2.png" className="h-[12rem]" />
          <img src="./assets/certificates/react-3.png" className="h-[12rem]" />
        </div>
        <h2 className="text-4xl text-white font-semibold mt-8">
          Data Scientist (Expert Level)
        </h2>
        <p className="text-xl text-white text-justify mb-4">
          Data Scientist Expert is a comprehensive course designed to equip
          participants with the knowledge and skills necessary to manage data
          science projects effectively. Throughout the course, participants will
          explore the challenges and techniques involved in data science project
          management, along with hands-on experience in various data science
          tools and methodologies.
        </p>
        <div className="grid grid-cols-5 gap-2 max-lg:grid-cols-1 place-items-center">
          <img src="./assets/certificates/ds-1.png" className="h-[12rem]" />
          <img src="./assets/certificates/ds-2.png" className="h-[12rem]" />
          <img src="./assets/certificates/ds-3.png" className="h-[12rem]" />
          <img src="./assets/certificates/ds-4.png" className="h-[12rem]" />
          <img src="./assets/certificates/ds-5.png" className="h-[12rem]" />
          <img src="./assets/certificates/ds-6.png" className="h-[12rem]" />
          <img src="./assets/certificates/ds-7.png" className="h-[12rem]" />
        </div>
      </div>
    </div>
  );
};

export default Certificates;

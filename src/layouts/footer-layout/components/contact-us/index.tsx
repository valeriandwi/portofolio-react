import React from "react";
import { Link } from "react-router-dom";

const ContactUs: React.FC = () => {
  return (
    <div className="w-full absolute bg-black">
      <div className="pl-36 flex flex-col space-y-8 py-8 text-white max-lg:pl-8">
        <div className="flex flex-col space-y-1">
          <p className="text-2xl font-bold max-lg:text-lg">Email</p>
          <p className="text-xl max-lg:text-[1rem]">valerian.dwi.p@gmail.com</p>
        </div>
        <div className="flex flex-col space-y-1">
          <p className="text-2xl font-bold max-lg:text-lg">Location</p>
          <p className="text-xl max-lg:text-[1rem]">Jakarta, Indonesia</p>
        </div>
        <div className="flex flex-col space-y-1">
          <p className="text-2xl font-bold max-lg:text-lg">LinkedIn</p>
          <p className="text-xl max-lg:text-[1rem]">
            <Link to="https://www.linkedin.com/in/valeriandwi/">
              https://www.linkedin.com/in/valeriandwi/
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

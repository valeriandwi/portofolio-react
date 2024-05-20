import React from "react";
import { Link } from "react-router-dom";

const ContactUs: React.FC = () => {
  return (
    <div className="w-full absolute bg-black">
      <div className="pl-36 flex flex-col space-y-8 py-8 text-white max-lg:pl-8">
        <p className="text-2xl">
          <span className="font-bold">Email</span> <br />
          valerian.dwi.p@gmail.com
        </p>
        <p className="text-2xl">
          <span className="font-bold">Location</span> <br />
          Jakarta, Indonesia
        </p>
        <p className="text-2xl">
          <span className="font-bold">LinkedIn </span>
          <br />
          <Link to="https://www.linkedin.com/in/valeriandwi/">
            https://www.linkedin.com/in/valeriandwi/
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ContactUs;

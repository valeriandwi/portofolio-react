import React from "react";
import { Link } from "react-router-dom";

const ContactUs: React.FC = () => {
  return (
    <div className="w-full absolute bg-black">
      <div className="pl-32 flex flex-col space-y-4 py-8 text-white">
        <p>
          Email <br />
          valerian.dwi.p@gmail.com
        </p>
        <p>
          Location <br />
          Jakarta, Indonesia
        </p>
        <p>
          LinkedIn <br />
          <Link to="">https://</Link>
        </p>
      </div>
    </div>
  );
};

export default ContactUs;

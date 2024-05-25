import React from "react";
import { Link } from "react-router-dom";

const Menu: React.FC = () => {
  return (
    <div className="h-screen bg-black text-white">
      <div className="flex flex-col items-center justify-center h-full w-full px-8 py-8 z-[9999] text-white space-y-16">
        <div className="font-bold hover:underline cursor-pointer">
          <Link to="/">ABOUT ME</Link>
        </div>
        <div className="font-bold hover:underline cursor-pointer">
          <Link to="/portofolio">PROJECTS</Link>
        </div>
        <div className="font-bold hover:underline cursor-pointer">
          <Link to="/certificate">CERTIFICATES</Link>
        </div>
      </div>
    </div>
  );
};

export default Menu;

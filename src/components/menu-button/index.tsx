import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

interface MenuProps {
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const MenuButton: React.FC<MenuProps> = ({ setOpenMenu }) => {
  return (
    <>
      <div className="absolute flex justify-end z-[9999] max-lg:top-8 max-lg:right-8 lg:hidden">
        <AiOutlineMenu
          color="white"
          size="normal"
          className="h-[40px] max-lg:h-[30px] cursor-pointer"
          onClick={() => setOpenMenu((prevState: boolean) => !prevState)}
        />
      </div>
      <div className="absolute flex w-full px-8 py-8 justify-end z-[9999] text-white max-lg:hidden space-x-8">
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
    </>
  );
};

export default MenuButton;

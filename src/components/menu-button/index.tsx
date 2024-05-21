import React from "react";
import { AiOutlineMenu } from "react-icons/ai";

interface MenuProps {
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const MenuButton: React.FC<MenuProps> = ({ setOpenMenu }) => {
  return (
    <>
      <div className="top-8 fixed right-16 z-[9999]">
        <AiOutlineMenu
          color="white"
          size="normal"
          className="h-[40px] max-lg:h-[60px] cursor-pointer"
          onClick={() => setOpenMenu((prevState: boolean) => !prevState)}
        />
      </div>
    </>
  );
};

export default MenuButton;

import React from "react";
import Sider from "./sider-layout";
import BackToTop from "@/components/back-to-top";
import MenuButton from "@/components/menu-button";
import Menu from "./menu";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [openMenu, setOpenMenu] = React.useState<boolean>(false);

  return (
    <div className="max-w-[100vw] overflow-hidden">
      <MenuButton setOpenMenu={setOpenMenu} />
      <Sider />
      {openMenu ? <Menu /> : <>{children}</>}
      <BackToTop />
    </div>
  );
};

export default MainLayout;

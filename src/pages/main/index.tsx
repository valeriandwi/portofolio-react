import React from "react";
import Sider from "@/layouts/sider-layout";
import Introduction from "@/features/main/introduction";
import Experience from "@/features/main/experience";
import Footer from "@/layouts/footer-layout";

const MainPage: React.FC = () => {
  return (
    <div className="max-w-[100vw]">
      <Sider />
      <Introduction />
      <Experience />
      <Footer />
    </div>
  );
};

export default MainPage;

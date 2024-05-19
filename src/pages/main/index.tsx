import React from "react";
import "./main.css";
import Sider from "@/layouts/sider-layout";
import Introduction from "@/features/main/introduction";
import Experience from "@/features/main/experience";
import Footer from "@/layouts/footer-layout";

const MainPage: React.FC = () => {
  return (
    <div>
      <Sider />
      <Introduction />
      <Experience />
      <Footer />
    </div>
  );
};

export default MainPage;

import React from "react";
import Introduction from "@/features/main/introduction";
import Experience from "@/features/main/experience";
import Footer from "@/layouts/footer-layout";
import MainLayout from "@/layouts/main-layout";

const MainPage: React.FC = () => {
  return (
    <MainLayout>
      <Introduction />
      <Experience />
      <Footer />
    </MainLayout>
  );
};

export default MainPage;

import React from "react";
import Introduction from "@/features/main/introduction";
import Experience from "@/features/main/experience";
import MainLayout from "@/layouts/main-layout";

const MainPage: React.FC = () => {
  return (
    <MainLayout>
      <Introduction />
      <Experience />
    </MainLayout>
  );
};

export default MainPage;

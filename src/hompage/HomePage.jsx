import React from "react";
import Header from "../common/Header";
import MainContent from "./MainContent/MainContent";
import Banner from "./Banner";

function HomePage() {
  return (
    <div>
      <Header />
      <Banner />
      <MainContent />
    </div>
  );
}

export default HomePage;

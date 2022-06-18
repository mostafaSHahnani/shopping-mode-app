import React from "react";
import Footer from "../Components/Footer/Index";
import Header from "../Components/Header/Index";
import Info from "../Components/Info/Index";
import MainMenu from "../Components/MainMenu/MainMenu";
import Navbar from "../Components/Navbar/Index";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <MainMenu />
      <Info />
      <Footer />
    </>
  );
};

export default Home;

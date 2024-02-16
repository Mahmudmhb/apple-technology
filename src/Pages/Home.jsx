import React from "react";
import Bannar from "../Header/Bannar";
import Navber from "../Header/Navber";
import Brands from "../Components/Brands/Brands";
import Section from "../Components/Brands/Section/Section";

const Home = () => {
  return (
    <div>
      {/* <Navber></Navber> */}
      <Bannar></Bannar>
      <Brands></Brands>
      <Section></Section>
    </div>
  );
};

export default Home;

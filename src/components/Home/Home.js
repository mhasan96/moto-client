import React from "react";
import NavBar from "../NavBar/NavBar";
import Services from "../Services/Services";

import Slides from "../Slides/Slides";
import Features from "./Features/Features";
import Reviews from "./Reviews/Reviews";
import Search from "./Search/Search";

const Home = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Slides></Slides>
      {/* <Search></Search> */}]<Features></Features>
      <Services></Services>
      <Reviews></Reviews>
    </div>
  );
};

export default Home;

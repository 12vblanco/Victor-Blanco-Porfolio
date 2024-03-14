import React from "react";
import CasesSection from "./Services/CasesSection";
import HeroDiv from "./heroSection/HeroDiv";
import PostCardFrom from "./postcard/PostcardFrom";
import References from "./references/References";

const Home = () => {
  return (
    <>
      <HeroDiv id="homeTop" />
      <CasesSection />
      <PostCardFrom />
      <References />
    </>
  );
};

export default Home;

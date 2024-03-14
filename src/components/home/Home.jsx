import React from "react";
import CasesSection from "./Services/CasesSection";
import HeroDiv from "./heroSection/HeroDiv";
import PostCardFrom from "./postcard/PostcardFrom";
import References from "./references/References";

const Home = (scrollToTop) => {
  return (
    <>
      <HeroDiv id="homeTop" />
      <CasesSection />
      <PostCardFrom scrollToTop={scrollToTop} />
      <References />
    </>
  );
};

export default Home;

import React from "react";
import ServicesSection from "../Services/ServicesSection";
import CaseStudies from "../caseStudies/CaseStudies";
import HeroDiv from "../heroSection/HeroDiv";
import PostCardFrom from "../postcard/PostcardFrom";
import References from "../references/References";

const Home = () => {
  return (
    <>
      <HeroDiv id="homeTop" />
      <ServicesSection />
      <CaseStudies />
      <PostCardFrom />
      <References />
    </>
  );
};

export default Home;

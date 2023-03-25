import React from "react";
import CaseStudies from "../caseStudies/CaseStudies";
import HeroDiv from "../heroSection/HeroDiv";
import PostCardFrom from "../postcard/PostcardFrom";
import ServicesSection from "../Services/ServicesSection";

const Home = () => {
  return (
    <>
      <HeroDiv />
      <ServicesSection />
      <CaseStudies />
      <PostCardFrom />
    </>
  );
};

export default Home;

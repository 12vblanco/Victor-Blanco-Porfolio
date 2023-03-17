import React from "react";
import CaseStudies from "../caseStudies/CaseStudies";
import HeroDiv from "../heroSection/HeroDiv";
import PostCardFrom from "../postcard/PostcardFrom";
import SkillSection from "../Skills/SkillSection";

const Home = () => {
  return (
    <>
      <HeroDiv />
      <SkillSection />
      <CaseStudies />
      <PostCardFrom />
    </>
  );
};

export default Home;

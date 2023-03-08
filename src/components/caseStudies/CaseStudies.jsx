import React from "react";
import styled from "styled-components";
import CaseStudy1 from "./CaseStudy1";
import CaseStudy2 from "./CaseStudy2";
import CaseStudy3 from "./CaseStudy3";

const CaseStudies = () => {
  return (
    <>
      <H2>Case Studies:</H2>
      <Div>
        <CaseStudy1 />
        <CaseStudy2 />
        <CaseStudy3 />
      </Div>
    </>
  );
};

const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  max-width: 1140px;
  border: solid;
  border-width: 0 1px 1px 0;
  padding-bottom: 40px;
`;

const H2 = styled.h2`
  font-size: 38px;
  letter-spacing: -1.7px;
  font-weight: 700;
  text-align: left;
  width: 482px;
`;

export default CaseStudies;

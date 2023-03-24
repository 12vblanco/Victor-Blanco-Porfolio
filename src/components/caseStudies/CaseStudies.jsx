import React from "react";
import styled from "styled-components";
import SectionContainer from "../elements/SectionContainer";
import SectionDiv from "../elements/SectionDiv";
import cases from "./Cases";
import CaseStudy from "./CaseStudy";

const CaseStudies = () => {
  return (
    <SectionContainer>
      <CaseTag id="cases" />
      <H2>Case Studies:</H2>
      <SectionDiv>
        {cases.map((oneCase) => {
          return <CaseStudy key={oneCase.id} {...oneCase} />;
        })}
      </SectionDiv>
    </SectionContainer>
  );
};

const H2 = styled.h2`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  font-size: 52px;
  letter-spacing: -1.7px;
  font-weight: 700;
  text-align: left;
  width: 482px;
  margin-bottom: -30px;
  @media (max-width: 600px) {
    font-size: 38px;
    margin-left: 12px;
  }
`;

const CaseTag = styled.div`
  position: relative;
  top: 0px;
`;

export default CaseStudies;

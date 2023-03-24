import React from "react";
import styled from "styled-components";
import SectionContainer from "../elements/SectionContainer";
import SectionDiv from "../elements/SectionDiv";
import Title from "../elements/Title";
import cases from "./Cases";
import CaseStudy from "./CaseStudy";

const CaseStudies = () => {
  return (
    <>
      <CaseTag id="cases" />
      <SectionContainer>
        <Title>Case Studies:</Title>
        <SectionDiv>
          {cases.map((oneCase) => {
            return <CaseStudy key={oneCase.id} {...oneCase} />;
          })}
        </SectionDiv>
      </SectionContainer>
    </>
  );
};

const CaseTag = styled.div`
  position: relative;
  top: 0px;
`;

export default CaseStudies;

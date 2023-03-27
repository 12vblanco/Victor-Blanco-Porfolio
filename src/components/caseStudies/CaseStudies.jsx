import React from "react";
import styled from "styled-components";
import SectionContainer from "../elements/SectionContainer";
import SectionDiv from "../elements/SectionDiv";
import Title from "../elements/Title";
import cases from "./Cases";
import CaseStudy from "./CaseStudy";

const CaseStudies = () => {
  return (
    <Div>
      <CaseTag id="cases" />
      <SectionContainer>
        <Title>Case Studies:</Title>
        <SectionDiv>
          {cases.map((oneCase) => {
            return <CaseStudy key={oneCase.id} {...oneCase} />;
          })}
        </SectionDiv>
      </SectionContainer>
    </Div>
  );
};

const Div = styled.div`
  border-bottom: 1px solid #023c71;
  border-right: 1px solid #023c71;

  width: 100%;
`;

const CaseTag = styled.div`
  position: relative;
  top: 0px;
  @media (max-width: 440px) {
    top: -28px;
  }
`;

export default CaseStudies;

import React from "react";
import styled from "styled-components";
import SectionContainer from "../elements/SectionContainer";
import SectionDiv from "../elements/SectionDiv";
import Title from "../elements/Title";
import cases from "./Cases";
import CaseStudy from "./CaseStudy";
import CONSTANTS from "../elements/Constants";

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
  border-bottom: 1px solid ${CONSTANTS.COLOUR.darkBlue};
  border-right: 1px solid ${CONSTANTS.COLOUR.darkBlue};

  width: 100%;
`;

const CaseTag = styled.div`
  position: relative;
  top: 0px;
  @media (max-width: 440px) {
    top: -42px;
  }
`;

export default CaseStudies;

import React from "react";
import styled from "styled-components";
import Container from "../elements/Container";
import CaseStudy1 from "./CaseStudy1";
import CaseStudy2 from "./CaseStudy2";
import CaseStudy3 from "./CaseStudy3";
import CaseStudy4 from "./CaseStudy4";

const CaseStudies = () => {
  return (
    <Container>
      <CaseTag id="cases" />

      <H2>Case Studies:</H2>
      <Div>
        <CaseStudy1 />
        <CaseStudy2 />
        <CaseStudy3 />
        <CaseStudy4 />
      </Div>
    </Container>
  );
};

const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 1240px;
`;

const H2 = styled.h2`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  font-size: 52px;
  letter-spacing: -1.7px;
  font-weight: 700;
  text-align: left;
  width: 482px;
`;

const CaseTag = styled.div`
  position: relative;
  top: -120px;
`;

export default CaseStudies;

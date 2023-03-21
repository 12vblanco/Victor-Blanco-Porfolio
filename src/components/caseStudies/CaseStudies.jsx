import React from "react";
import styled from "styled-components";
import cases from "./Cases";
import CaseStudy from "./CaseStudy";

const CaseStudies = () => {
  return (
    <Container>
      <CaseTag id="cases" />
      <H2>Case Studies:</H2>
      <Div>
        {cases.map((oneCase) => {
          return <CaseStudy key={oneCase.id} {...oneCase} />;
        })}
      </Div>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  height: auto;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  border-bottom: 1px solid black;
  padding: 62px 0;
  margin: 0 auto;
`;

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
  margin-bottom: -30px;
`;

const CaseTag = styled.div`
  position: relative;
  top: 0px;
`;

export default CaseStudies;

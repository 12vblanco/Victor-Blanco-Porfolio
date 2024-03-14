import React from "react";
import styled from "styled-components";
import SectionContainer from "../../elements/SectionContainer";
import SectionDiv from "../../elements/SectionDiv";
import Title from "../../elements/Title";
import Case from "./Case";
import Cases from "./Cases";

const CasesSection = (scrollToTop) => {
  return (
    <Div>
      <CasesTag id="Cases" />

      <SectionContainer>
        <Title>Case Studies:</Title>

        <SectionDiv>
          {Cases.map((skill, index) => {
            const isOdd = index % 2 === 1;
            const isLast = index === Cases.length - 1;
            const isReverse = isOdd && !isLast;
            const imgOnRight = isReverse ? true : false;

            return (
              <Case
                key={skill.id}
                {...skill}
                imgOnRight={imgOnRight}
                scrollToTop={scrollToTop}
              />
            );
          })}
        </SectionDiv>
      </SectionContainer>
    </Div>
  );
};

const Div = styled.div`
  border-bottom: 1px solid var(--blue);
  border-right: 1px solid var(--blue);
  width: 100%;
`;

const CasesTag = styled.div`
  position: relative;
  top: -10px;
  @media (max-width: 440px) {
    top: -46px;
  }
`;

export default CasesSection;

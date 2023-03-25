import React from "react";
import styled from "styled-components";
import SectionContainer from "../elements/SectionContainer";
import SectionDiv from "../elements/SectionDiv";
import Title from "../elements/Title";
import cases from "./Service";
import ServicesContent from "./Services";

const ServicesSection = () => {
  return (
    <>
      <ServicesTag id="services" />

      <SectionContainer>
        <Title>Services:</Title>

        <SectionDiv>
          {cases.map((skill, index) => {
            const isOdd = index % 2 === 1;
            const isLast = index === cases.length - 1;
            const isReverse = isOdd && !isLast;
            const imgOnRight = isReverse ? true : false;

            return (
              <ServicesContent
                key={skill.id}
                {...skill}
                imgOnRight={imgOnRight}
              />
            );
          })}
        </SectionDiv>
      </SectionContainer>
    </>
  );
};

const ServicesTag = styled.div`
  position: relative;
  top: -10px;
`;

export default ServicesSection;

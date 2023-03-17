import React from "react";
import styled from "styled-components";
import SkillContent from "./SkillContent";
import skills from "./Skills";

const SkillSection = () => {
  return (
    <Container>
      <ServicesTag id="cases" />

      <Div>
        {skills.map((skill, index) => {
          const isOdd = index % 2 === 1;
          const isLast = index === skills.length - 1;
          const isReverse = isOdd && !isLast;
          const imgOnRight = isReverse ? true : false;

          return (
            <SkillContent key={skill.id} {...skill} imgOnRight={imgOnRight} />
          );
        })}
      </Div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: auto;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid black;
  padding: 62px 0;
  margin: 0 auto;
`;

const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  height: auto;
  min-width: 340px;
  justify-content: space-around;
  align-items: center;
`;

const ServicesTag = styled.div`
  position: relative;
  top: -120px;
`;

export default SkillSection;

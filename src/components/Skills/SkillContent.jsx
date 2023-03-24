import React from "react";
import styled from "styled-components";
import SectionContainer from "../elements/SectionContainer";
import SectionDiv from "../elements/SectionDiv";

const SkillContent = ({ id, text, title, img, imgOnRight }) => {
  const ImgPositioned = styled(ImgDiv)`
    order: ${imgOnRight ? 2 : 1};
  `;

  const TextPositioned = styled(TextDiv)`
    order: ${imgOnRight ? 1 : 2};
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    @media (max-width: 750px) {
      order: ${imgOnRight ? 2 : 1};
    }
  `;

  return (
    <SectionContainer>
      <SectionDiv id={id}>
        <ImgPositioned img={img} />
        <Overlay />
        <TextPositioned>
          <Title>{title}</Title>
          <Text>{text}</Text>
        </TextPositioned>
      </SectionDiv>
    </SectionContainer>
  );
};

const ImgDiv = styled.div`
  width: 50%;
  height: 360px;
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: center;

  @media (max-width: 750px) {
    width: 70vw;
    height: 60vw;
    padding: 22px;
  }
  @media (max-width: 500px) {
    width: 80vw;
  }
  @media (max-width: 400px) {
    width: 92vw;
  }
`;

const TextDiv = styled.div`
  width: 50%;
  height: 360px;
  background-color: rgba(2, 60, 113, 1);
  padding: 0 18px 12px 22px;
  @media (max-width: 750px) {
    width: 70vw;
    height: fit-content;
    padding: 22px;
  }
  @media (max-width: 500px) {
    width: 80vw;
  }
  @media (max-width: 400px) {
    width: 92vw;
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: fit-content;
  height: 100%;
  background-color: rgba(2, 60, 113, 0.2);
  z-index: 1;
  border-radius: 8px;
`;

const Title = styled.h2`
  font-size: 54px;
  text-align: left;
  color: white;
  z-index: 2;
  @media (max-width: 958px) {
    font-size: 44px;
  }
  @media (max-width: 800px) {
    font-size: 34px;
  }
`;

const Text = styled.p`
  color: white;
  text-align: left;
  line-height: 1.55;
  font-size: 15px;
  letter-spacing: 0.6px;
  z-index: 2;
  @media (max-width: 958px) {
    font-size: 14px;
  }
`;

export default SkillContent;

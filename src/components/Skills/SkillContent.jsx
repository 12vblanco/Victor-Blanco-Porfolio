import React from "react";
import styled from "styled-components";

const SkillContent = ({ id, text, title, img, imgOnRight }) => {
  const ImgPositioned = styled(ImgDiv)`
    order: ${imgOnRight ? 2 : 1};
  `;

  const TextPositioned = styled(TextDiv)`
    order: ${imgOnRight ? 1 : 2};
    z-index: 2;
  `;

  return (
    <Container>
      <Div id={id}>
        <ImgPositioned img={img} />
        <Overlay />
        <TextPositioned>
          <Title>{title}</Title>
          <Text>{text}</Text>
        </TextPositioned>
      </Div>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1140px;
  height: 360px;
  margin: 28px;
`;

const Div = styled.div`
  display: flex;
  border-radius: 8px;
  overflow: hidden;
`;

const ImgDiv = styled.div`
  width: 50%;
  height: 360px;
  background-image: url(${(props) => props.img});
  background-size: cover;
`;

const TextDiv = styled.div`
  width: 50%;
  height: 360px;
  padding: 10px 28px 0 36px;
  background-color: rgba(2, 60, 113, 1);
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
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
`;

const Text = styled.p`
  color: white;
  text-align: left;
  line-height: 1.55;
  font-size: 15px;
  margin-top: 6px;
  letter-spacing: 0.6px;
  z-index: 2;
`;

export default SkillContent;

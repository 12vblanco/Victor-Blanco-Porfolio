import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SectionContainer from "../../elements/SectionContainer";

const Case = ({
  id,
  text,
  title,
  subtitle,
  tech,
  img,
  imgOnRight,
  description,
  width,
  height,
  link,
  scrollToTop,
}) => {
  return (
    <Link to={link} onClick={scrollToTop}>
      <CaseContainer
        style={{
          flexDirection: props.imgOnRight === true ? "row" : "row-reverse",
        }}
      >
        <ImgDiv img={img} alt={description} width={width} height={height} />
        <TextDiv>
          <Title>{title}</Title>
          <SubTitle>
            {subtitle}
            <Tech>{tech}</Tech>
          </SubTitle>
          <Text>{text}</Text>
          <Button>More Information</Button>{" "}
        </TextDiv>
      </CaseContainer>
    </Link>
  );
};

const CaseContainer = styled(SectionContainer)`
  display: flex;
`;

const ImgDiv = styled.div`
  flex: 1;
  height: 640px;
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: 940px) {
    width: 70vw;
    height: 60vw;
    padding: 1.375rem;
  }
  @media (max-width: 500px) {
    width: 80vw;
  }
  @media (max-width: 440px) {
    width: 92vw;
  }
`;

const TextDiv = styled.div`
  flex: 1;
  height: 640px;
  background: var(--blue);
  padding: 0 1.75rem 0.75rem 1.375rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  @media (max-width: 940px) {
    width: 70vw;
    height: fit-content;
    padding: 1.375rem;
  }
  @media (max-width: 500px) {
    width: 80vw;
  }
  @media (max-width: 440px) {
    width: 92vw;
  }
`;

const Title = styled.h2`
  font-family: var(--header-font), sans-serif;
  padding-left: 0.45rem;
  text-align: left;
  color: white;
  z-index: 2;
  letter-spacing: -2px;

  @media (max-width: 990px) {
    font-size: 40px;
  }

  @media (max-width: 440px) {
    font-size: 32px;
  }
`;

const SubTitle = styled.h3`
  font-family: var(--header-font), sans-serif;
  padding-left: 0.6rem;
  text-align: left;
  color: white;
  z-index: 2;

  @media (max-width: 450px) {
    font-size: 22px;
  }
`;

const Tech = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 15px;
  text-align: left;
  color: white;
  z-index: 2;
  font-weight: 600;
`;

const Text = styled.p`
  color: white;
  z-index: 2;
  padding: 1rem 1.6rem 0 0.6rem;
  @media (max-width: 958px) {
  }
  @media (max-width: 440px) {
    max-width: 96vw;
    font-size: 16px;
    padding: 0.6rem 0 0 0.6rem;
  }
`;

const Button = styled.button`
  margin-top: 1rem;
  cursor: pointer;
  font-family: "Poppins";
  font-size: 16px;
  font-weight: 700;
  border: none;
  padding: 0.2rem 0.5rem;
  outline: none;
  background: transparent;
  color: var(--white);
`;

export default Case;

import React from "react";
import styled from "styled-components";
import dev from "../../assets/Development.png";
import pic1 from "../../assets/pic1.png";
import Container from "../elements/Container";

const HeroDiv = () => {
  return (
    <Container>
      <HomeTag id="home" />

      <Div>
        <DivContainer>
          <HeroImg>
            <Overlay />
            <Img src={pic1} />
          </HeroImg>
          <HeroText>
            <SolidText>Web Design,</SolidText>
            <SolidText>Maintenance &</SolidText>
            <LineText src={dev} />

            <P>
              I create carefully planned websites for your business, <br />
              art portfolio, or personal project with passion and attention to
              detail. The websites are specially tailored to you at an
              affordable price.
            </P>
            <P>
              I can completely customise your website using HTML, CSS,
              JavaScript & React or I can use your favourite CMS like Wordpress,
              Wix or Shopify.
            </P>
          </HeroText>
        </DivContainer>
      </Div>
    </Container>
  );
};

const Div = styled.div`
  display: flex;
  width: 100%;
  max-width: 1140px;
  justify-content: center;
  align-items: center;

  /* @media (max-width: 1200px) {
    padding-left: 90px;
  } */
  @media (max-width: 478px) {
    padding-left: 70px;
    padding-right: 30px;
  }
`;

const DivContainer = styled.div`
  display: flex;
  max-width: 1280px;
  @media (max-width: 660px) {
    flex-direction: column;
  }
`;

const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  line-height: 0.9;
  width: 100%;
  max-width: 471px;
  min-width: 284px;
  @media (max-width: 640px) {
    width: 90%;
  }
  @media (max-width: 478px) {
    padding-bottom: 40px;
    width: 100%;
  }
`;
const HeroImg = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  @media (max-width: 800px) {
    margin-left: 12px;
    margin-right: 22px;
  }
  @media (max-width: 660px) {
    position: relative;
    left: -40px;
    margin-top: 20px;
  }
  @media (max-width: 478px) {
    left: -10px;
  }
`;

const Img = styled.img`
  width: 340px;
  height: 340px;
  margin: 40px;
  border-radius: 50%;
  border: 2px solid #002140;

  @media (max-width: 478px) {
    width: 100%;
    margin-right: 6px;
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 40px;
  left: 54px;
  width: 340px;
  height: 340px;
  background-color: rgba(0, 33, 64, 0.2);
  border-radius: 50%;
`;

const SolidText = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  font-size: 52px;
  letter-spacing: -1.7px;
  font-weight: 700;
  @media (max-width: 478px) {
    font-size: 26px;
  }
`;
const LineText = styled.img`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  max-width: 280px;
  @media (max-width: 478px) {
    max-width: 188px;
  }
`;

const P = styled.p`
  text-align: left;
  line-height: 1.2;
  max-width: 760px;
  font-size: 15px;
  margin-top: 16px;
  @media (max-width: 478px) {
    font-size: 14px;
  }
`;

const HomeTag = styled.div`
  position: relative;
  top: -300px;
`;

export default HeroDiv;

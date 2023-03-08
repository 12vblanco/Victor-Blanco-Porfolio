import React from "react";
import styled from "styled-components";
import dev from "../../assets/Development.png";
import img1 from "../../assets/img1.png";

const HeroDiv = () => {
  return (
    <Div>
      <Container>
        <HeroText>
          <SolidText>Web Design,</SolidText>
          <SolidText>Maintenance &</SolidText>
          <LineText src={dev} />

          <P>
            I create carefully planned websites for your business, <br />
            art portfolio, or personal project with passion and attention to
            detail. The websites are specially tailored to you at an affordable
            price.
          </P>
          <P>
            I can completely customise your website using HTML, CSS, JavaScript
            & React or I can use your favourite CMS like Wordpress, Wix or
            Shopify.
          </P>
        </HeroText>
        <HeroImg>
          <Img src={img1} />
        </HeroImg>
      </Container>
    </Div>
  );
};

const Div = styled.div`
  padding-top: 100px;
  padding-bottom: 40px;
  display: flex;
  width: 100vw;
  justify-content: center;
  align-items: center;
  border: solid;
  border-width: 0 1px 1px 0;
  margin-bottom: 60px;

  /* @media (max-width: 1640px) {
    padding-left: 120px;
    padding-bottom: 120px;
  }*/
  @media (max-width: 1200px) {
    padding-left: 90px;
  }
  @media (max-width: 478px) {
    padding-left: 70px;
    padding-right: 30px;
  }
`;

const Container = styled.div`
  display: flex;
  max-width: 1280px;
  margin-bottom: 60px;
  @media (max-width: 660px) {
    flex-direction: column;
  }
`;

const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  line-height: 0.9;
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
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

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
  width: 60%;
  max-width: 400px;
  height: auto;
  min-width: 240px;

  @media (max-width: 478px) {
    width: 100%;
    margin-right: 6px;
  }
`;

const SolidText = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  font-size: 42px;
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
  font-size: 15px;
  margin-top: 16px;
  @media (max-width: 478px) {
    font-size: 14px;
  }
`;

export default HeroDiv;

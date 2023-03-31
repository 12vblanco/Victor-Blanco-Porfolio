import React from "react";
import styled from "styled-components";
import dev from "../../assets/Development-min.png";
import pic1 from "../../assets/heroImg2-min.jpg";

const HeroDiv = () => {
  return (
    <Container>
      <HomeTag id="home" />

      <Div>
        <DivContainer>
          <HeroImg>
            <Img src={pic1} alt={"Image of Victor Blanco"} />
          </HeroImg>
          <HeroText>
            <SolidText>Web Design,</SolidText>
            <SolidText>Maintenance &</SolidText>
            <LineText src={dev} alt="development" />

            <P>
              I create carefully planned websites for your business, art
              portfolio, or personal project with passion and attention to
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

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 60vh;
  padding-top: 100px;
  padding-bottom: 80px;
  border: solid;
  border-width: 0 1px 1px 0;
  @media (max-width: 600px) {
    padding-top: 4%;
  }
`;

const Div = styled.div`
  display: flex;
  width: 100%;
  max-width: 1140px;
  justify-content: center;
  align-items: center;
`;

const DivContainer = styled.div`
  display: flex;
  max-width: 1280px;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const HeroText = styled.div`
  display: flex;
  padding: 0 32px 0 0;
  flex-direction: column;
  justify-content: center;
  line-height: 0.9;
  width: 100%;
  max-width: 471px;
  min-width: 284px;
  @media (max-width: 600px) {
    max-width: 80vw;
    min-width: 80vw;
    padding: 0 0 0 40px;
  }
  @media (max-width: 440px) {
    max-width: 100%;
    min-width: 100%;
    padding: 0 12px 0 22px;
    align-items: center;
  }
`;
const HeroImg = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Img = styled.img`
  width: 50vw;
  max-width: 400px;
  height: 50vw;
  max-height: 400px;
  margin: 0 40px 40px 40px;
  border-radius: 50%;
  object-fit: cover;

  @media (max-width: 870px) {
    max-width: 320px;
    max-height: 320px;
  }
  @media (max-width: 760px) {
    max-width: 220px;
    max-height: 220px;
  }
  @media (max-width: 600px) {
    max-width: 60vw;
    max-height: 60vw;
    min-width: 300px;
    min-height: 300px;
    margin-top: 12px;
  }
`;

const SolidText = styled.div`
  font-family: "Archivo Black", sans-serif;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  font-size: 48px;
  letter-spacing: -1.7px;
  font-weight: 700;
  @media (max-width: 990px) {
    font-size: 38px;
  }
  @media (max-width: 778px) {
    font-size: 34px;
  }
  @media (max-width: 643px) {
    font-size: 32px;
  }
  @media (max-width: 600px) {
    font-size: 38px;
  }
  @media (max-width: 440px) {
    font-size: 32px;
    margin-left: -12px;
  }
`;
const LineText = styled.img`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  max-width: 280px;
  @media (max-width: 760px) {
    max-width: 200px;
  }
  @media (max-width: 600px) {
    max-width: 280px;
  }
  @media (max-width: 440px) {
    max-width: 240px;
    margin-left: -12px;
  }
`;

const P = styled.p`
  text-align: left;
  line-height: 1.4;
  max-width: 760px;
  font-size: 15px;
  margin-top: 16px;
  @media (max-width: 990px) {
    max-width: 40vw;
  }
  @media (max-width: 760px) {
    font-size: 14px;
  }
  @media (max-width: 600px) {
    max-width: 80vw;
  }
  @media (max-width: 440px) {
    max-width: 94vw;
    text-align: left;
    font-size: 18px;
  }
`;

const HomeTag = styled.div`
  position: relative;
  top: -500px;
`;

export default HeroDiv;

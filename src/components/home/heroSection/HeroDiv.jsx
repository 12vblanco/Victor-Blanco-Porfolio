import React from "react";
import styled from "styled-components";
import dev from "../../../assets/Development-min.png";
import pic1 from "../../../assets/heroImg-min.jpg";

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
            <HeaderText>Web Design</HeaderText>
            <SubHeaderText>
              Maintenance{" "}
              <span
                style={{
                  fontFamily: "Poppins",
                  fontWeight: "900",
                  marginLeft: "1rem",
                }}
              >
                {" "}
                &
              </span>
            </SubHeaderText>
            <LineText src={dev} alt="development" />
            <P style={{ fontWeight: 400 }}>
              Hello, I'm Victor. <br />I am a Web Designer, Developer and a
              Print Maker based in Leith, Edinburgh. <br />I can help your
              business grow with a unique website that shows the best you have
              to offer, with responsive and accessible designs to stand out.
            </P>
            <P>
              <a href="#form" style={{ fontWeight: "500", fontSize: "16px" }}>
                Get in touch,
              </a>{" "}
              and let's work together.
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
  min-height: calc(100vh - 100px);
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
    max-width: 330px;
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

const HeaderText = styled.h1`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin-left: -0.4rem;

  @media (max-width: 951px) {
    font-size: 42px;
    margin-left: -0.1rem;
  }
  @media (max-width: 440px) {
    font-size: 32px;
    margin-left: 0px;
  }
`;

const SubHeaderText = styled.h2`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  @media (max-width: 658px) {
    font-size: 32px;
  }
`;

const LineText = styled.img`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  max-width: 254px;

  @media (max-width: 658px) {
    max-width: 200px;
  }
`;

const P = styled.p`
  max-width: 760px;
  margin-top: 16px;
  @media (max-width: 990px) {
    max-width: 40vw;
  }
  @media (max-width: 600px) {
    max-width: 90vw;
  }
  @media (max-width: 440px) {
    max-width: 90vw;
    padding-right: 1rem;
    text-align: left;
    font-size: 16px;
  }
  @media (max-width: 320px) {
    max-width: 88vw;
    padding: 0.6rem;
    text-align: left;
    font-size: 15px;
  }
`;

const HomeTag = styled.div`
  position: relative;
  top: -500px;
`;

export default HeroDiv;

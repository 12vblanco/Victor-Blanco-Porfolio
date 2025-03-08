import React from "react";
import { FaGithub } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import styled from "styled-components";
import review from "../../../../public/orchard_review.jpg";
import thirdImg from "../../../assets/caseStudies/orchard_art.jpg";
import bookingImg from "../../../assets/caseStudies/orchard_bookings.jpg";
import secondImg from "../../../assets/caseStudies/orchard_location.jpg";
import mainImg from "../../../assets/caseStudies/orchard_main.jpg";
import menuImg from "../../../assets/caseStudies/orchard_menus.jpg";
import palette from "../../../assets/caseStudies/orchard_palette.png";
import wireframe from "../../../assets/caseStudies/orchard_wire.png";
import SectionContainer from "../../elements/SectionContainer";
import SectionDiv from "../../elements/SectionDiv";

const OrchardCase = (scrollToTop) => {
  const currentYear = new Date().getFullYear();
  const yearsOngoing = currentYear - 2019;

  return (
    <Div>
      <SectionContainer>
        <SectionDiv>
          <Column>
            <H1 id="OrchardCase">The Orchard Bar</H1>
            <H2 style={{ marginTop: "0" }}>Web development & Maintenance</H2>
            <Tech>HTML/CSS/React</Tech>
            <StyledDate>2019 - ongoing</StyledDate>
          </Column>
          <DivRow>
            <Column style={{ marginRight: ".5rem" }}>
              <Column>
                <Img src={mainImg} alt="the orchard bar's main page" />
                <Figure>The Orchard's home page image</Figure>
              </Column>
              <H3
                style={{
                  padding: "0",
                  marginBottom: ".3rem",
                  marginTop: "1rem",
                }}
              >
                <a href="https://theorchardbar.co.uk/" target="_blank">
                  <TbWorldWww
                    style={{
                      fontSize: "1.8rem",
                      marginBottom: "-0.6rem",
                      marginRight: "0.5rem",
                    }}
                  />{" "}
                  theorchardbar.co.uk/
                </a>
              </H3>
              <H3
                style={{
                  padding: "0",
                  marginBottom: "3rem",
                }}
              >
                <a
                  href="https://github.com/12vblanco/react-orchard"
                  target="_blank"
                >
                  <FaGithub
                    style={{
                      fontSize: "1.8rem",
                      marginBottom: "-0.6rem",
                      marginRight: "0.5rem",
                    }}
                  />{" "}
                  github.com/12vblanco/react-orchard
                </a>
              </H3>
              <DivRow>
                <Column>
                  <H2>Requirements</H2>
                  <P>
                    I received a straight forward request: A simple to use and
                    accessible website that would include a gallery, a booking
                    system and contact details. It needed to also have a page to
                    showcase the art exhibitions and a section showing the many
                    menus that contain food and drinks served at the Orchard's.
                    Finally, they also requested opening times and social media
                    links. <br />
                    The Navigation bar is the same component through the whole
                    website and holds much of the information. It has a burger
                    menu access the art section and the gallery, together with
                    social media links. it also con``
                  </P>
                </Column>
              </DivRow>
              <DivRow>
                <Column>
                  <DivRow>
                    {" "}
                    <Column>
                      <ImgSm src={palette} alt="the colour palette" />
                      <Figure>The colour palette selected</Figure>
                    </Column>
                  </DivRow>
                  <DivRow>
                    {" "}
                    <Column>
                      <ImgSm src={secondImg} alt="the colour palette" />
                      <Figure>The Orchard's How to Find Us</Figure>
                    </Column>
                  </DivRow>
                  <DivRow>
                    <Column>
                      <H2>Typography</H2>
                      <P>
                        The Orchard's logo employs a classic, serif font,
                        communicating style and elegance. Throughout the
                        website, 'Open Sans', a clean and versatile font, is
                        used for its readability across various weights and
                        scalability. It's open-source and readily available. All
                        fonts are embedded in the source code to ensure
                        accessibility, even with poor internet connections.
                      </P>
                      <P
                        style={{
                          fontSize: "20px",
                          fontFamily: "Open Sans, sans-serif",
                          lineHeight: "50px",
                          marginTop: "1rem",
                        }}
                      >
                        Navigation: Open Sans 20p
                      </P>
                      <P
                        style={{
                          fontSize: "32px",
                          fontFamily: "Open Sans, sans-serif",
                          lineHeight: "50px",
                          marginTop: "1rem",
                          fontWeight: "900",
                        }}
                      >
                        H1: Open Sans 32p
                      </P>
                      <P
                        style={{
                          fontSize: "28px",
                          fontFamily: "Open Sans, sans-serif",
                          lineHeight: "50px",
                          marginTop: "1rem",
                          fontWeight: "900",
                        }}
                      >
                        H2: Open Sans 28p
                      </P>
                      <P
                        style={{
                          fontSize: "20px",
                          fontFamily: "Open Sans, sans-serif",
                          lineHeight: "50px",
                          marginTop: "1rem",
                        }}
                      >
                        P: Open Sans 19p{" "}
                      </P>
                      <P>Nav_contact: Poppins 14p </P>
                      <P
                        style={{
                          fontFamily: "Dancing Script",
                          fontSize: "42px",
                          lineHeight: "1.5",
                          fontWeight: "400",
                        }}
                      >
                        Dancing Script
                      </P>
                      <Column>
                        <Img src={menuImg} alt="the colour palette" />
                        <Figure>The list of menus</Figure>
                      </Column>
                      <Column>
                        <Img
                          src={review}
                          alt="A review from The Orchard"
                          style={{ width: "320px" }}
                        />
                        <Figure>A review from The Orchard</Figure>
                      </Column>
                    </Column>
                  </DivRow>
                </Column>
              </DivRow>
            </Column>
            <Column style={{ marginLeft: ".5rem" }}>
              <DivRow>
                <Column>
                  <P>
                    The blueprints were designed during the planning stages to
                    gather feedback from The Orchard's owners, which was then
                    integrated back into the design process. Once the general
                    aesthetics and requirements were agreed upon, the
                    construction of the website commenced.
                  </P>
                </Column>
              </DivRow>
              <DivRow>
                <Column>
                  <Img src={wireframe} alt="the orchard bar's main page" />{" "}
                  <Figure>The wireframe designed in the planning stage</Figure>
                </Column>
              </DivRow>
              <DivRow>
                <Column>
                  <DivRow>
                    <H2>Design Choices</H2>
                  </DivRow>
                  <DivRow>
                    <P>
                      The logic behind the design choices was to mirror the
                      ambiance and atmosphere of The Orchard Bar. Black was
                      chosen for its strong neutrality and contrast,
                      transmitting elegance and formality, paired with white for
                      text and gold emulating the whisky bottles throughout the
                      bar. The owners are delighted with the outcome, and I
                      continue to assist in content updates for as long as they
                      want me to.
                    </P>
                  </DivRow>
                  <DivRow>
                    <Column>
                      <Img src={thirdImg} alt="the orchard bar's main page" />{" "}
                      <Figure>The art section</Figure>
                    </Column>
                  </DivRow>
                </Column>
              </DivRow>
              <Column>
                <P>
                  This project has been ongoing for {yearsOngoing} years, making
                  The Orchard my longest-standing client.
                </P>
                <Img src={bookingImg} alt="the orchard bar's main page" />{" "}
                <Figure>The table booking system</Figure>
              </Column>
            </Column>
          </DivRow>
        </SectionDiv>
      </SectionContainer>
    </Div>
  );
};

const Div = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 2rem;
  max-width: 1240px;
  text-align: left;
  margin-bottom: 3rem;
  @media (max-width: 868px) {
    padding: 0 22px 22px 42px;
  }
  @media (max-width: 540px) {
    max-width: 98%;
    padding: 8px;
  }
`;

const H1 = styled.h1`
  margin-left: -0.2rem;
  text-align: left;
  z-index: 2;
  letter-spacing: -1px;
  margin-top: 2rem;
  margin-bottom: 0.2rem;

  @media (max-width: 503px) {
    font-size: 41px;
  }
  @media (max-width: 686px) {
    width: 420px;
  }
  @media (max-width: 531px) {
    width: 230px;
    font-size: 36px;
    margin-left: -0.2rem;
  }
`;
const H2 = styled.h2`
  /* padding-left: 2.4rem; */
  text-align: left;
  z-index: 2;
  margin-top: 1.8rem;
  margin-bottom: 1.4rem;

  @media (max-width: 531px) {
    font-size: 30px;
  }
`;
const H3 = styled.h3`
  font-size: 18px;
  padding: 2rem 0 0.8rem 0.6rem;
  text-align: left;
  z-index: 2;
  @media (max-width: 531px) {
    font-size: 15px;
  }
`;

const P = styled.p`
  width: 100%;
  padding-left: 0.6rem;
  padding-bottom: 1rem;
`;

const StyledDate = styled.h4``;
const Tech = styled.h3`
  margin-top: -0.4rem;
  @media (max-width: 531px) {
    font-size: 20px;
  }
`;
const Img = styled.img`
  padding: 0.8rem;
  margin: 2rem auto;
  width: 100%;
  height: auto;

  @media (max-width: 541px) {
    padding: 0rem;
    margin: 2rem 0;
  }
`;
const ImgSm = styled.img`
  padding: 1rem;
  margin: 2rem auto;
  width: 50%;
  height: auto;

  @media (max-width: 541px) {
    padding: 0rem;
    margin: 2rem 0;
  }
`;
const Figure = styled.div`
  text-align: center;
  width: 100%;
  margin-bottom: 1rem;
  font-size: 13px;
  margin-top: -2.6rem;
  @media (max-width: 541px) {
    margin-top: -1.9rem;
  }
`;

const DivRow = styled.div`
  display: flex;
  width: 100%;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export default OrchardCase;

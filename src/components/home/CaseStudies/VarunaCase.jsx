import React from "react";
import { TbWorldWww } from "react-icons/tb";
import styled from "styled-components";
import components from "../../../assets/caseStudies/varu_blog.jpg";
import palette from "../../../assets/caseStudies/varu_contact.jpg";
import wireframe from "../../../assets/caseStudies/varu_interiors.png";
import mainImg from "../../../assets/caseStudies/varu_main.jpg";
import components2 from "../../../assets/caseStudies/varu_portrait.png";
import sample from "../../../assets/caseStudies/varu_street.png";
import SectionContainer from "../../elements/SectionContainer";
import SectionDiv from "../../elements/SectionDiv";

const VarunaCase = (scrollToTop) => {
  return (
    <Div>
      <SectionContainer>
        <SectionDiv>
          <Column>
            <H1 id="UXCase">Varuna Brull</H1>
            <H2 style={{ marginTop: "0" }}>A photographic portfolio</H2>
            <Tech>UX/Design/CMS'</Tech>
            <Date>2020</Date>
          </Column>

          <DivRow>
            <Column style={{ marginRight: ".5rem" }}>
              <Column>
                <Img src={mainImg} alt="the orchard bar's main page" />
                <Figure>Varuna's landing page</Figure>
              </Column>
              <H3
                style={{
                  padding: "0",
                  marginBottom: ".3rem",
                  marginTop: "1rem",
                }}
              >
                <a href="https://https://www.varunabrull.com/" target="_blank">
                  <TbWorldWww
                    style={{
                      fontSize: "1.8rem",
                      marginBottom: "-0.6rem",
                      marginRight: "0.5rem",
                    }}
                  />{" "}
                  www.varunabrull.com/
                </a>
              </H3>
              <DivRow>
                <Column>
                  <H2>Requirements</H2>
                  <P>
                    Varuna needed someone to help tidying up and re-designing
                    her portfolio. She asked for a simple layout that included
                    galleries with her images, a contact form for potential
                    clients and the creation of a blog were she could discuss
                    her projects. <br />
                    The website was already hosted in 'Wix' and she has an
                    ongoing contract with them so there is where I did my work.
                    This would dbe Varuna's primary portfolio to show her work
                    to the world
                  </P>
                </Column>
              </DivRow>
              <DivRow>
                <Column>
                  <DivRow>
                    {" "}
                    <Column>
                      <Img
                        src={palette}
                        alt="The contact form"
                        style={{ maxWidth: "450px" }}
                      />
                      <Figure>Tha page's contact form</Figure>
                    </Column>
                  </DivRow>
                  <DivRow>
                    <Column>
                      <Img src={components} alt="The blog" />
                      <Figure>The blog</Figure>
                    </Column>
                  </DivRow>
                  <DivRow>
                    <Column>
                      <Img src={components2} alt="The blog" />
                      <Figure>The portrait's gallery</Figure>
                    </Column>
                  </DivRow>
                  <DivRow></DivRow>
                </Column>
              </DivRow>
            </Column>
            <Column style={{ marginLeft: ".5rem" }}>
              <DivRow>
                <Column>
                  <P>
                    Varuna's work is of great quality, for example she took the
                    pictures that are showcased in this portfolio's landing
                    page, therefore for her own portfolio I decided to allow the
                    images to speak for themselves.
                  </P>
                </Column>
              </DivRow>
              <DivRow>
                <Column>
                  <Img src={wireframe} alt="Varuna's interiors gallery" />{" "}
                  <Figure>Varuna's interiors gallery</Figure>
                </Column>
              </DivRow>
              <DivRow>
                <Column>
                  <DivRow>
                    <H2>Design Choices</H2>
                  </DivRow>
                  <DivRow>
                    <P>
                      A minimalist design with a white background would give in
                      my opinion the best canvas for Varuna's photography to
                      take the center stage, without competition from
                      surrounding elements. This way, the viewers attention
                      remains in the art.
                      <br />
                      The font I employed was Helvetica, a sans-serif typeface
                      created in 1957 as an emblem of Swiss graphic design,
                      transmitting clarity, neutrality and calmness. this goes
                      great with the minimalist design of the page.
                    </P>
                  </DivRow>
                  <DivRow>
                    <Column>
                      <Img src={sample} alt="the orchard bar's main page" />{" "}
                      <Figure>Some of the images in the street section</Figure>
                    </Column>
                  </DivRow>
                </Column>
              </DivRow>

              <P>
                The result is a modern website that prioritises functionality,
                simplicity and has the content has primary focus. This approach
                produces a clean result and includes key elements of web design.
                <br />
                It contains 4 galleries for portraits, street
                photography,interiors and music photography. It also has a
                contact form and a blog. The resulting website enhances the
                visual impact of the photographs and aligns with modern web
                design practices, highlighting simplicity, ease of use and good
                communication.
              </P>
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

const Date = styled.h4``;
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

export default VarunaCase;

import React from "react";
import styled from "styled-components";
import components from "../../../assets/caseStudies/ux_components.png";
import mainImg from "../../../assets/caseStudies/ux_mockup.jpg";
import palette from "../../../assets/caseStudies/ux_palette.jpg";
import sample from "../../../assets/caseStudies/ux_sample.png";
import wireframe from "../../../assets/caseStudies/ux_wire.jpg";
import SectionContainer from "../../elements/SectionContainer";
import SectionDiv from "../../elements/SectionDiv";

const UXCase = (scrollToTop) => {
  return (
    <Div>
      <SectionContainer>
        <SectionDiv>
          <Column>
            <H1 id="UXCase">Sustainable App</H1>
            <H2 style={{ marginTop: "0" }}>Design for User Experience</H2>
            <Tech>UX/UI/Design</Tech>
            <Date>2021</Date>
          </Column>
          <DivRow>
            <Column style={{ marginRight: ".5rem" }}>
              <Column>
                <Img src={mainImg} alt="the orchard bar's main page" />
                <Figure>3D mock-up of the app </Figure>
              </Column>
              <DivRow>
                <Column>
                  <H2>Requirements</H2>
                  <P>
                    This project was developed as part of my degree,
                    specifically for the module 'Practical Interaction Design'.
                    The brief required the design of a mobile app prototype
                    encompassing at least five pages, showcasing interactive
                    features within Figma. The app's theme was to focus on
                    sustainability, incorporating effective practices for user
                    experience and interaction, rooted in user-centred design
                    principles.
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
                        alt="the colour palette"
                        style={{ width: "350px" }}
                      />
                      <Figure>
                        The colour palette selected for the project
                      </Figure>
                    </Column>
                  </DivRow>
                  <DivRow>
                    {" "}
                    <Column>
                      <Img src={components} alt="the colour palette" />
                      <Figure>
                        Some of the components designed for the prototype `
                      </Figure>
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
                    For this I decided to design an application that would allow
                    users to advertise building material that had been left over
                    from projects, and that they wanted to give out or sell
                    reducing waste and saving energy and money. I took
                    inspiration on existing apps such as 'Too Good To Go' to
                    model my design.
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
                      I chose a brick as the logo and identity of the
                      application, utilising its colour to develop the palette.
                      The logo, inspired by a Lego block, aims to convey
                      playfulness to the user. <br />
                      For the typography, I selected 'Poppins', a font that is
                      both modern and scalable. Hierarchy and weights were
                      strategically applied to signify importance across
                      different sections. <br />
                      The layout is designed to optimise the available space for
                      information and images, striving to include as much
                      content as possible while maintaining the app's clarity,
                      intuitiveness, and usability."
                      <br />
                      User feedback was a crucial part of the entire process. We
                      observed peers' interactions and conducted user research
                      through questionnaires and interviews. This data was
                      instrumental in informing the design decisions and
                      producing a more user-friendly product.
                    </P>
                  </DivRow>
                  <DivRow>
                    <Column>
                      <Img src={sample} alt="High-fidelity prototype" />{" "}
                      <Figure>
                        A selection of the high-fidelity prototype
                      </Figure>
                    </Column>
                  </DivRow>
                </Column>
              </DivRow>

              <P>
                The grades for this project were among the highest I received in
                my course, highlighting the importance of blending best
                practices and UX theories with user research and testing. This
                approach is a must when creating products that need to meet user
                expectations and also enjoy success. <br />
                This project also boosted my personal satisfaction and increased
                my interest in UX design, transforming me into a more
                well-rounded developer.
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
  letter-spacing: -2px;
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

export default UXCase;

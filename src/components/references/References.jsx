import React from "react";
import styled from "styled-components";
import ref_orchard from "../../assets/references/ref_orchard.jpg";
import ref_orchardX2 from "../../assets/references/ref_orchardX2.jpg";
import ref_orchardX3 from "../../assets/references/ref_orchardX3.jpg";
import ref_talento from "../../assets/references/ref_talento.jpg";
import ref_talentoX2 from "../../assets/references/ref_talentoX2.jpg";
import ref_talentoX3 from "../../assets/references/ref_talentoX3.jpg";
import ref_varuna from "../../assets/references/ref_varuna.jpg";
import ref_varunaX2 from "../../assets/references/ref_varunaX2.jpg";
import ref_varunaX3 from "../../assets/references/ref_varunaX3.jpg";
import CONSTANTS from "../elements/Constants";
import SectionContainer from "../elements/SectionContainer";
// import SectionDiv from "../elements/SectionDiv";

const References = () => {
  return (
    <Div>
      <SectionContainer>
        <FormTag id="refs" />
        <FlexDiv>
          <Img
            src={ref_orchard}
            alt="a review from the Orchard Bar"
            srcSet={`
    ${ref_orchard} 320w,
    ${ref_orchardX2} 640w,
    ${ref_orchardX3} 1280w
  `}
            sizes="(max-width: 480px) 320px, (max-width: 768px) 640px, 1280px"
          />
          <Img
            src={ref_talento}
            alt="a review from Talento"
            srcSet={`
    ${ref_talento} 320w,
    ${ref_talentoX2} 640w,
    ${ref_talentoX3} 1280w
  `}
            sizes="(max-width: 480px) 320px, (max-width: 768px) 640px, 1280px"
          />
          <Img
            src={ref_varuna}
            alt="a review from Varuna Brull"
            srcSet={`
    ${ref_varuna} 320w,
    ${ref_varunaX2} 640w,
    ${ref_varunaX3} 1280w
  `}
            sizes="(max-width: 480px) 320px, (max-width: 768px) 640px, 1280px"
          />
        </FlexDiv>
      </SectionContainer>
    </Div>
  );
};

const Div = styled.div`
  border-bottom: 1px solid ${CONSTANTS.COLOUR.darkBlue};
  border-right: 1px solid ${CONSTANTS.COLOUR.darkBlue};

  width: 100%;
`;

const FlexDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 100%;
  justify-content: center;
  align-items: center;
`;

const FormTag = styled.div`
  position: relative;
  top: -140px;
  @media (max-width: 440px) {
    top: -120px;
  }
`;

const Img = styled.img`
  max-width: 26vw;
  min-width: 20rem;
  padding: 16px;
  @media (max-width: 520px) {
    max-width: 100%;
  }
`;

export default References;

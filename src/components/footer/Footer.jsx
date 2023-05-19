import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import CONSTANTS from "../elements/Constants";
import SectionContainer from "../elements/SectionContainer";
import SectionDiv from "../elements/SectionDiv";

const Footer = (scrollToTop) => {
  return (
    <Div>
      <SectionContainer>
        <H3>Let's Build Something!!</H3>
        <SectionDiv>
          <H4>
            Victor Blanco 2019 - {new Date().getFullYear()} &copy;
            <span>&nbsp;&nbsp;</span>
          </H4>
          <Terms>
            <Link to="/terms" onClick={scrollToTop}>
              Terms & Conditions
            </Link>
          </Terms>
        </SectionDiv>
      </SectionContainer>
    </Div>
  );
};

const Div = styled.div`
  border-bottom: 1px solid ${CONSTANTS.COLOUR.darkBlue};
  border-right: 1px solid ${CONSTANTS.COLOUR.darkBlue};
  border-bottom: 1px solid ${CONSTANTS.COLOUR.darkBlue};

  width: 100%;
  height: 100%;
`;

const H3 = styled.h3`
  font-family: "Courgette", cursive;
  font-size: ${CONSTANTS.FONT_SIZE.giant};
  font-weight: 100;
  @media (max-width: 660px) {
    font-size: 26px;
  }
`;

const H4 = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
  font-size: ${CONSTANTS.FONT_SIZE.sm};
  margin-top: 10%;
`;
const Terms = styled.div`
  font-size: ${CONSTANTS.FONT_SIZE.sm};
`;

export default Footer;

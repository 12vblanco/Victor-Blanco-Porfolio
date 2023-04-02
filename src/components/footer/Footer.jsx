import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SectionContainer from "../elements/SectionContainer";
import SectionDiv from "../elements/SectionDiv";

const Footer = () => {
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
            <Link to="/terms">Terms & Conditions</Link>
          </Terms>
        </SectionDiv>
      </SectionContainer>
    </Div>
  );
};

const Div = styled.div`
  border-bottom: 1px solid #023c71;
  border-right: 1px solid #023c71;
  border-bottom: 1px solid #023c71;

  width: 100%;
  height: 100%;
`;

const H3 = styled.h3`
  font-family: "Courgette", cursive;
  font-size: 48px;
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
  font-size: 14px;
  margin-top: 10%;
`;
const Terms = styled.div`
  font-size: 14px;
`;

export default Footer;

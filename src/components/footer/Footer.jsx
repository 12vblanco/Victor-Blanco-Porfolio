import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SectionContainer from "../elements/SectionContainer";
import SectionDiv from "../elements/SectionDiv";

const Footer = (scrollToTop) => {
  return (
    <Div>
      <SectionContainer>
        <H1>Let's build something!</H1>
        <SectionDiv>
          <Copy>
            Victor Blanco 2019 - {new Date().getFullYear()} &copy;
            <span>&nbsp;&nbsp;</span>
            <Link to="/terms" onClick={scrollToTop}>
              Terms & Conditions
            </Link>
          </Copy>
        </SectionDiv>
      </SectionContainer>
    </Div>
  );
};

const Div = styled.div`
  /* border-bottom: 1px solid var(--blue); */
  border-right: 1px solid var(--blue);
  border-top: 1px solid var(--blue);
  width: 100%;
  height: 100%;
  padding: 0 0.4rem;
  margin: 4rem 0;
`;

const H1 = styled.h1`
  font-family: var(--hw-font);
  font-weight: 100;
  letter-spacing: 0;
  @media (max-width: 660px) {
    font-size: 34px;
  }
`;

const Copy = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
  font-size: 13px;
  margin-top: 10%;
  margin-bottom: -8%;
  @media (max-width: 440px) {
    font-size: 11px;
  }
`;

export default Footer;

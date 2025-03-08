import React from "react";
import styled from "styled-components";
const Logo = () => {
  return (
    <>
      <Div>
        <LogoImg>VB</LogoImg>
        <LogoText>Victor Blanco</LogoText>
      </Div>
    </>
  );
};

const Div = styled.div`
  display: flex;
  width: 100%;
  max-width: 800px;
  justify-content: center;
  align-items: center;
`;
const LogoImg = styled.div`
  font-family: var(--header-font), sans-serif;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-weight: 600;
  padding-right: 10px;
  letter-spacing: -4px;
  font-size: 21px;
  padding-left: 16vw;

  @media (max-width: 480px) {
    padding-left: 10px;
  }
  @media (max-width: 322px) {
    padding-left: 20px;
    font-size: 18px;
  }
`;
const LogoText = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  min-width: 120px;
  @media (max-width: 322px) {
    min-width: 100px;
    font-size: 14px;
  }
`;

export default Logo;

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
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-weight: 700;
  padding-right: 10px;
  letter-spacing: -4px;
  font-size: 22px;
  padding-left: 16vw;
  @media (max-width: 640px) {
    padding-left: 50%;
  }
`;
const LogoText = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  min-width: 120px;
`;

export default Logo;

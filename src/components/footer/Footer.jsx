import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <>
      {" "}
      <Container>
        <H3>Let's Build Something!!</H3>
        <Div>
          {" "}
          Victor Blanco 2019 - {new Date().getFullYear()} &copy;
          <span>&nbsp;&nbsp;</span>
        </Div>
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px 0 80px 0;
  border: solid;
  border-width: 0 1px 1px 0;
`;

const Div = styled.div`
  margin-bottom: -80px;
  margin-top: 60px;
  padding: 12px;
  width: 100%;
`;

const H3 = styled.h3`
  font-family: "Courgette", cursive;
  font-size: 48px;
  font-weight: 100;
`;

export default Footer;

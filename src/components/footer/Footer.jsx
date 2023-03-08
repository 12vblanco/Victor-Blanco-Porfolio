import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <>
      <H3>Let's Build Something!!</H3>
      <Div>
        {" "}
        Victor Blanco 2019 - {new Date().getFullYear()} &copy;
        <span>&nbsp;&nbsp;</span>
      </Div>
    </>
  );
};

const Div = styled.div`
  padding: 12px;
  width: 100%;
`;

const H3 = styled.h3`
  font-family: "Courgette", cursive;
  font-size: 48px;
  padding-bottom: 42px;
  font-weight: 100;
  /* margin-left: 80px; */
`;

export default Footer;

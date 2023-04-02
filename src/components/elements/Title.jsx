import React from "react";
import styled from "styled-components";

const Title = (props) => {
  return <H2>{props.children}</H2>;
};

const H2 = styled.h2`
  font-family: "Archivo Black", sans-serif;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  font-size: 48px;
  letter-spacing: -1.7px;
  font-weight: 700;
  text-align: left;
  /* width: 482px; */
  margin-bottom: -30px;
  @media (max-width: 990px) {
    font-size: 38px;
  }
  @media (max-width: 760px) {
    font-size: 30px;
  }
  @media (max-width: 600px) {
    font-size: 38px;
    margin-left: 22px;
  }
  @media (max-width: 440px) {
    font-size: 32px;
  }
`;

export default Title;

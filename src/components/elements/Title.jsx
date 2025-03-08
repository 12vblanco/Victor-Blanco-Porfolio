import React from "react";
import styled from "styled-components";

const Title = (props) => {
  return <H2>{props.children}</H2>;
};

const H2 = styled.h2`
  font-family: var(--header-font), sans-serif;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  letter-spacing: -1.4px;
  font-weight: 500;
  text-align: left;
  width: 682px;
  margin-bottom: -2px;
  @media (max-width: 990px) {
  }
  @media (max-width: 760px) {
    font-size: 30px;
  }
  @media (max-width: 600px) {
    margin-left: 22px;
  }
  @media (max-width: 440px) {
    font-size: 32px;
  }
`;

export default Title;

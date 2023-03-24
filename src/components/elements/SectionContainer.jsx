import React from "react";
import styled from "styled-components";

const SectionContainer = (props) => {
  return <Div>{props.children}</Div>;
};

const Div = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  height: auto;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  border-bottom: 1px solid black;
  padding: 62px 0;
  margin: 0 auto;
`;

export default SectionContainer;

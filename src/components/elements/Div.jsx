import React from "react";
import styled from "styled-components";

const DivBody = (props) => {
  return <Div>{props.children}</Div>;
};

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
`;

export default DivBody;

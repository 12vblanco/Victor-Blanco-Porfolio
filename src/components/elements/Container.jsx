import React from "react";
import styled from "styled-components";

const Container = (props) => {
  return <Div>{props.children}</Div>;
};

const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 60vh;
  padding-top: 100px;
  padding-bottom: 80px;
  border: solid;
  border-width: 0 1px 1px 0;
  @media (max-width: 400px) {
    width: 100%;
    padding: 20px;
    margin-left: -70px;
    padding-right: 20px;
  }
`;

export default Container;

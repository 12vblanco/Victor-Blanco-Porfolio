import React from "react";
import styled from "styled-components";

const ContactBtn = (props) => {
  return <Div>{props.children}</Div>;
};

const Div = styled.div`
  display: flex;
  background: #023c71;
  border-radius: 2px;
  font-weight: 600;
  font-size: 14px;
  color: #fff;
  margin: 2px;
  width: 110px;
  height: 50px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s linear;

  &:hover {
    background: #015fb6;
  }
`;

export default ContactBtn;

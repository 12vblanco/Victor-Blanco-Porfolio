import React from "react";
import styled from "styled-components";
import CONSTANTS from "./Constants";

const ContactBtn = (props) => {
  const { tagName, ...rest } = props;
  return <Div {...rest}>{tagName}</Div>;
};

const Div = styled.button`
  display: flex;
  background: ${CONSTANTS.COLOUR.darkBlue};
  border: 1px solid ${CONSTANTS.COLOUR.darkBlue};
  border-radius: 2px;
  font-weight: 600;
  font-size: ${CONSTANTS.FONT_SIZE.sm};
  color: ${CONSTANTS.COLOUR.white};
  width: 110px;
  height: 50px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s linear;

  &:hover {
    background: rgba(40, 98, 150, 1) 100%;
  }
`;

export default ContactBtn;

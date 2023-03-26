import React from "react";
import styled from "styled-components";

const ContactBtn = (props) => {
  const { tagName, ...rest } = props;
  return <Div {...rest}>{tagName}</Div>;
};

const Div = styled.button`
  display: flex;
  background: #023c71;
  border-radius: 2px;
  font-weight: 600;
  font-size: 14px;
  color: #fff;
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

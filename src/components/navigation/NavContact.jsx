import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import styled from "styled-components";
import ContactBtn from "../elements/ContactBtn";

const Buttons = () => {
  return (
    <Div>
      <Link to="/home#form">
        <ContactBtn>Contact</ContactBtn>
      </Link>
    </Div>
  );
};

const Div = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: flex-end;
`;

export default Buttons;

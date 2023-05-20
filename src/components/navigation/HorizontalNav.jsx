import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import styled from "styled-components";
import Logo from "./Logo";
import CONSTANTS from "../elements/Constants";
import NavContact from "./NavContact";

const HorizontalNav = ({ handleToggle, isOpen }) => {
  return (
    <>
      {isOpen ? (
        <NavBox onClick={handleToggle}>
          <Link to="/#home">
            <Logo />
          </Link>
          <NavContact
            handleToggle={handleToggle}
            isOpen={isOpen}
            tagName={"Get a quote"}
          />
        </NavBox>
      ) : (
        <NavBox>
          <Link to="/#home">
            <Logo />
          </Link>
          <NavContact
            handleToggle={handleToggle}
            isOpen={isOpen}
            tagName={"Get a quote"}
          />
        </NavBox>
      )}
    </>
  );
};

const NavBox = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 50px;
  background: ${CONSTANTS.COLOUR.white};
  width: calc(100% - 50px);
  height: 50px;
  z-index: 21;
  border-width: 0px 1px 1px 0px;
  border-style: solid;
  border-color: ${CONSTANTS.COLOUR.darkBlue};
  scroll-behavior: smooth;
  @media (max-width: 600px) {
    width: calc(100% - 50px);
  }
`;

export default HorizontalNav;

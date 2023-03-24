import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import styled from "styled-components";
import Logo from "./Logo";

import NavContact from "./NavContact";

const HorizontalNav = () => {
  return (
    <NavBox>
      <Link to="/home#home">
        <Logo />
      </Link>
      <NavContact tagName={"Get a quote"} />
    </NavBox>
  );
};

const NavBox = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 50px;
  background: #fff;
  width: calc(100% - 50px);
  height: 50px;
  z-index: 21;
  border-width: 0px 1px 1px 0px;
  border-style: solid;
  border-color: #023c71;
  scroll-behavior: smooth;
`;

export default HorizontalNav;

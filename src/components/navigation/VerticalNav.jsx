import React from "react";
import styled from "styled-components";
import Burger from "./Burger";
import Social from "./Social";

const HorizontalNav = () => {
  return (
    <NavBox>
      <Burger />
      <Social />
    </NavBox>
  );
};

const NavBox = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0px;
  height: 100vh;
  width: 50px;
  z-index: 2;
  background: #f2fdfb;
  border-width: 0px 1px 1px 0px;
  border-style: solid;
  border-color: #023c71;
  scroll-behavior: smooth;
`;

export default HorizontalNav;

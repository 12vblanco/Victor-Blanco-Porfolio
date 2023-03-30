import React from "react";
import { FaFacebook } from "react-icons/fa";
import { GrInstagram, GrLinkedin } from "react-icons/gr";
import { HashLink as Link } from "react-router-hash-link";
import styled from "styled-components";

const Burger = ({ handleToggle, isOpen }) => {
  const handleContactClick = () => {
    handleToggle();
    window.location.href = "/home#form";
  };
  const handleCasesClick = () => {
    handleToggle();
    window.location.href = "/home#cases";
  };
  const handleServicesClick = () => {
    handleToggle();
    window.location.href = "/home#services";
  };
  return (
    <>
      <BurgerIcon className={isOpen ? "open" : "closed"} onClick={handleToggle}>
        <BurgerIconLines className={isOpen ? "open line-1" : "closed line1"} />
        <BurgerIconLines className={isOpen ? "open line-2" : "closed line2"} />
        <BurgerIconLines className={isOpen ? "open line-3" : "closed line3"} />
      </BurgerIcon>
      <OverlayMenu isOpen={isOpen}>
        <MenuList>
          <Link>
            <MenuItem onClick={handleServicesClick}>Services</MenuItem>
          </Link>{" "}
          <Link>
            <MenuItem onClick={handleCasesClick}>Case Studies</MenuItem>
          </Link>{" "}
          <Link>
            <MenuItem onClick={handleContactClick}>Contact</MenuItem>
          </Link>
          <MenuItem onClick={!isOpen}>
            <a href="https://www.victorblanco.co.uk" target="_blank">
              Tree Ring Prints
            </a>
          </MenuItem>
          <MenuItem onClick={handleToggle}>
            <a
              href="https://www.facebook.com/VictorBlancoWebDesign/"
              target="_blank"
            >
              <FaFacebook />{" "}
            </a>
            <a
              href="https://www.instagram.com/victorblancoweb/"
              target="_blank"
            >
              <GrInstagram />{" "}
            </a>
            <a href="https://www.linkedin.com/in/12vblanco/" target="_blank">
              <GrLinkedin />{" "}
            </a>
          </MenuItem>
        </MenuList>
      </OverlayMenu>
    </>
  );
};

const BurgerIcon = styled.div`
  position: relative;
  height: 50px;
  width: 50px;
  cursor: pointer;
  margin-top: 3px;

  &.open .line-1 {
    position: absolute;
    top: 16px;
    left: 10px;
    transform: rotate(45deg) translate(2px, 4px);
  }

  &.open .line-2 {
    position: absolute;
    left: 9.6px;
    top: 27px;
    transform: rotate(-45deg) translate(5px, -5px);
  }

  &.open .line-3 {
    background: transparent;
    transform: translateX(-70px);
  }

  &.closed .line1 {
    position: absolute;
    top: 14px;
    left: 25px;
    border-radius: 50% 50% 0 0;
    height: 6px;
  }
  &.closed .line2 {
    position: absolute;
    top: 28px;
    left: 25px;
    border-radius: 0 0 22% 22%;
    height: 6px;
  }
  &.closed .line3 {
    background: #015fb6;
  }
`;

const BurgerIconLines = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 5px;
  width: 30px;
  background-color: #023c71;
  transition: all 0.3s ease-in-out;

  &::before,
  &::after,
  &::nth-child(3) {
    content: "";
    position: absolute;
    height: 4px;
    width: 30px;
    background-color: #023c71;
    transition: all 0.3s ease-in-out;
  }

  &::before {
    top: -9px;
    left: 0;
    border-radius: 50% 50% 0 0;
    transform: ${(props) =>
      props.isOpen
        ? "rotate(-45deg) translate(4px, -4px)"
        : "rotate(45deg) translate(-4px, 4px)"};
  }

  &::after {
    top: 7.6px;
    left: 0;
    border-radius: 0 0 50% 50%;
    transform: rotate(45deg) translate(4px, 4px);
  }

  &:nth-child(3) {
    top: 21.2px;
    left: 9;
    height: 3.6px;
    transform-origin: center;
  }
`;

const OverlayMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: calc(100% - 50px);
  height: 100vh;
  background: #fff;
  padding-right: 15px;
  margin-left: 50px;
  margin-top: 50px;
  z-index: 999;
  transition: transform 0.3s ease-in-out;
  transform: ${(props) =>
    props.isOpen ? "translateX(0px)" : "translateX(100%)"};

  @media (max-width: 600px) {
    margin-left: 0;
    width: 100%;
  } ;
`;

const MenuList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const MenuItem = styled.li`
  font-size: 52px;
  font-weight: 700;
  letter-spacing: -2.8px;
  margin: 20px;
  color: #023c71;
  transition: all 0.5 linear;
  @media (max-width: 600px) {
    font-size: 40px;
  }
  @media (max-width: 380px) {
    font-size: 36px;
  }

  a {
    font-size: 52px;
    letter-spacing: -1.7px;
    font-weight: 700;
    margin: 20px;
    color: #023c71;
    transition: all 0.5 linear;
    @media (max-width: 600px) {
      font-size: 40px;
    }
    @media (max-width: 380px) {
      font-size: 36px;
    }
    &:hover {
      color: rgb(1, 95, 182);
    }
  }

  &:hover {
    color: rgb(1, 95, 182);
  }
`;

export default Burger;

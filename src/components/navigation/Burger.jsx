import React, { useEffect, useState } from "react";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { GrInstagram, GrLinkedin } from "react-icons/gr";
import { HashLink as Link } from "react-router-hash-link";
import styled from "styled-components";
import emailIcon from "../../assets/email.png";
import CopyToClipboardButton from "./CopyToClipboard";
import Toast from "./Toast";

const Burger = ({ handleToggle, isOpen }) => {
  const [isColumnVisible, setColumnVisible] = useState(false);
  const [isColumn2Visible, setColumn2Visible] = useState(false);
  const [isColumn3Visible, setColumn3Visible] = useState(false);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        setColumnVisible(true);
      }, 300);
      const timer2 = setTimeout(() => {
        setColumn2Visible(true);
      }, 500);
      const timer3 = setTimeout(() => {
        setColumn3Visible(true);
      }, 700);
      return () => {
        clearTimeout(timer3);
        clearTimeout(timer2);
        clearTimeout(timer);
      };
    } else {
      setColumnVisible(false);
      setColumn2Visible(false);
      setColumn3Visible(false);
    }
  }, [isOpen]);

  const handleCopySuccess = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 1400);
    setTimeout(() => handleToggle(), 1400);
  };

  const handleHomeClick = () => {
    handleToggle();
    window.location.href = "/";
  };
  const handleContactClick = () => {
    handleToggle();
    window.location.href = "/home#form";
  };
  const handleCasesClick = () => {
    handleToggle();
    window.location.href = "/home#Cases";
  };
  const handleAboutClick = () => {
    handleToggle();
    window.location.href = "/about";
  };
  const handlePrintsClick = () => {
    handleToggle();
  };
  return (
    <>
      <BurgerIcon className={isOpen ? "open" : "closed"} onClick={handleToggle}>
        <BurgerIconLines className={isOpen ? "open line-1" : "closed line1"} />
        <BurgerIconLines className={isOpen ? "open line-2" : "closed line2"} />
        <BurgerIconLines className={isOpen ? "open line-3" : "closed line3"} />
      </BurgerIcon>
      <OverlayMenu isOpen={isOpen}>
        <DivRow>
          <Column
            style={{
              opacity: isColumnVisible ? 1 : 0,
              transition: "opacity 0.5s ease-in-out",
            }}
          >
            {" "}
            <MenuList>
              <ul>
                <Link>
                  <MenuItem onClick={handleHomeClick}>Home</MenuItem>
                </Link>
                <Link>
                  <MenuItem onClick={handleCasesClick}>Case Studies</MenuItem>
                </Link>{" "}
                <Link>
                  <MenuItem onClick={handleContactClick}>Contact</MenuItem>
                </Link>
                <Link>
                  <MenuItem onClick={handleAboutClick}>About Me</MenuItem>
                </Link>
                <MenuItem onClick={handlePrintsClick}>
                  <a
                    href="https://www.victorblanco.co.uk"
                    target="_blank"
                    aria-label="Visit Victor Blanco's Prints Page"
                  >
                    Tree Ring Prints
                  </a>
                </MenuItem>
                <div onClick={handlePrintsClick}>
                  <MenuItem onClick={handleToggle}>
                    <DivRow
                      style={{
                        opacity: isColumn3Visible ? 1 : 0,
                        transition: "opacity 0.5s ease-in-out",
                      }}
                    >
                      <Icon>
                        <a
                          href="https://www.facebook.com/VictorBlancoWebDesign/"
                          target="_blank"
                          rel="noreferrer"
                          aria-label="Visit Victor Blanco's Facebook Page"
                        >
                          <FaFacebook />
                        </a>
                      </Icon>
                      <Icon>
                        <a
                          href="https://www.instagram.com/victorblancoweb/"
                          target="_blank"
                          rel="noreferrer"
                          aria-label="Visit Victor Blanco's Instagram Page"
                        >
                          <GrInstagram />
                        </a>
                      </Icon>

                      <Icon>
                        <a
                          href="https://www.linkedin.com/in/12vblanco/"
                          target="_blank"
                          rel="noreferrer"
                          aria-label="Visit Victor Blanco's Linkedin Page"
                        >
                          <GrLinkedin />{" "}
                        </a>
                      </Icon>
                      <Icon>
                        <a
                          href="https://www. github.com/12vblanco/"
                          target="_blank"
                          rel="noreferrer"
                          aria-label="Visit Victor Blanco's GitHub Page"
                        >
                          <FaGithub />{" "}
                        </a>
                      </Icon>
                    </DivRow>
                  </MenuItem>
                </div>
              </ul>
            </MenuList>
          </Column>
          <DivRow>
            <Column2
              style={{
                opacity: isColumn2Visible ? 1 : 0,
                transition: "opacity 0.5s ease-in-out",
              }}
            >
              <Tel>
                <a href="https://t.me/V1ctor13" target="_blank">
                  Telegram
                </a>
              </Tel>
              <CopyToClipboardButton
                email="blancowebsAhTgmailDhOTcom"
                emailIcon={emailIcon}
                onCopySuccess={handleCopySuccess}
              />
              {showToast && <Toast message="Email Copied to clipboard!" />}
              <Copy>Victor Blanco &copy; 2019-2024</Copy>
              <Copy>Edinburgh Scotland</Copy>
            </Column2>
          </DivRow>
        </DivRow>
      </OverlayMenu>
      <OverlayMenu2 isOpen={isOpen}></OverlayMenu2>
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
  background-color: var(--blue);
  transition: all 0.3s ease-in-out;

  &::before,
  &::after,
  &::nth-child(3) {
    content: "";
    position: absolute;
    height: 4px;
    width: 30px;
    background-color: var(--blue);
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
  height: calc(100% - 50px);
  background: var(--white);
  padding-right: 15px;
  margin-left: 50px;
  margin-top: 50px;
  z-index: 999;
  transition: transform 0.3s ease-in-out;
  transform: ${(props) =>
    props.isOpen ? "translateX(280px)" : "translateX(100%)"};

  @media (max-width: 1082px) {
    transform: ${(props) =>
      props.isOpen ? "translateX(0px)" : "translateX(100%)"};
  }
  @media (max-width: 441px) {
    width: 100vw;

    transform: ${(props) =>
      props.isOpen ? "translateX(-50px)" : "translateX(110%)"};
  }
`;
const OverlayMenu2 = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  width: 280px;
  height: 100vh;
  background: var(--white);
  padding-right: 15px;
  margin-left: 50px;
  z-index: 899;
  border-right: 1px solid var(--blue);
  transition: transform 0.5s ease-in-out;
  transform: ${(props) =>
    props.isOpen ? "translateY(0)" : "translateY(100%)"};

  @media (max-width: 1082px) {
    display: none;
  }
`;

const DivRow = styled.div`
  display: flex;
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  justify-content: flex-end;
  align-items: flex-start;
  height: 80vh;
  width: 50%;
  @media (max-width: 826px) {
    width: 100vw;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 380px) {
    margin-left: 1rem;
  }
`;
const Column2 = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  justify-content: flex-end;
  align-items: flex-start;
  height: 80vh;
  width: 100%;

  @media (max-width: 826px) {
    margin-left: 2rem;
  }
  @media (max-width: 646px) {
    display: none;
  }
`;

const MenuList = styled.ul`
  list-style: none;
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
  margin-left: 2rem;

  @media (max-width: 826px) {
    margin-left: 0;
  }
`;

const MenuItem = styled.li`
  font-size: 61px;
  font-weight: 600;
  letter-spacing: -2.8px;
  margin: 6px;
  color: var(--blue);
  list-style: none;
  transition: all 0.5 linear;

  @media (max-width: 1370px) {
    font-size: 46px;
  }
  @media (max-width: 464px) {
    font-size: 36px;
  }

  a {
    font-weight: 600;
    letter-spacing: -2.8px;
    /* margin: 20px; */
    color: var(--blue);
    transition: all 0.5 linear;

    &:hover {
      color: rgb(1, 95, 182);
    }
  }

  &:hover {
    color: rgb(1, 95, 182);
  }
`;

const Icon = styled.div`
  margin-right: 40px;
  font-size: 36px;

  @media (max-width: 464px) {
    font-size: 30px;
  }
`;
const Tel = styled.div`
  font-size: 28px;
`;
const Copy = styled.div``;

export default Burger;

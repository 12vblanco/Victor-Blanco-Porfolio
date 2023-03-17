import React from "react";
import { FaFacebook, FaRegEnvelope } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { HashLink as Link } from "react-router-hash-link";
import styled from "styled-components";

const Social = ({ flexDirection }) => {
  return (
    <Div style={{ flexDirection }}>
      <Icon>
        <a
          href="https://www.facebook.com/VictorBlancoWebDesign/"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebook />
        </a>
      </Icon>
      <Icon>
        <a
          href="https://www.instagram.com/rigodoner/"
          target="_blank"
          rel="noreferrer"
        >
          <GrInstagram />
        </a>
      </Icon>
      <IconContact>
        <Link to="/home#form">
          <FaRegEnvelope />
        </Link>
      </IconContact>
    </Div>
  );
};

const Div = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: center;
  @media (max-width: 400px) {
    display: none;
  }
`;

const Icon = styled.div`
  margin: 10px 0;
  font-size: 22px;
`;
const IconContact = styled.div`
  margin: 10px 0;
  font-size: 22px;
  @media (max-width: 600px) {
    display: none;
  }
`;

export default Social;

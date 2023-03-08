import React from "react";
import { FaFacebook, FaRegEnvelope } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { HashLink as Link } from "react-router-hash-link";
import styled from "styled-components";

const Social = () => {
  return (
    <Div>
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
      <Icon>
        <Link to="/home#form">
          <FaRegEnvelope />
        </Link>
      </Icon>
    </Div>
  );
};

const Div = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const Icon = styled.div`
  margin: 10px 0;
  font-size: 22px;
`;

export default Social;

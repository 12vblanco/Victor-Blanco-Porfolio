import React from "react";
import { GrMenu } from "react-icons/gr";
import styled from "styled-components";

const Burger = () => {
  return (
    <Div>
      <GrMenu />
    </Div>
  );
};

const Div = styled.div`
  display: flex;
  height: 50px;
  justify-content: flex-start;
  align-items: center;
  font-size: 32px;
`;

export default Burger;

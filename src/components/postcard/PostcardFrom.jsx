import React from "react";
import styled from "styled-components";
import ContactForm from "./Form";

const PostFrom = () => {
  return (
    <>
      <H2>Fill in your details</H2>
      <H3 id="form"> to get in touch</H3>
      <Div>
        <ContactForm />
      </Div>
    </>
  );
};
const Div = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 60px;
  border: solid;
  border-width: 0 1px 1px 0;
  padding-bottom: 40px;
`;

const H2 = styled.h2`
  font-size: 38px;
  letter-spacing: -1.7px;
  font-weight: 700;
  text-align: left;
  width: 482px;
  margin-top: 60px;
`;
const H3 = styled.h2`
  font-size: 22px;
  letter-spacing: -1.2px;
  font-weight: 500;
  text-align: left;
  width: 482px;
  margin-top: -12px;
`;

export default PostFrom;

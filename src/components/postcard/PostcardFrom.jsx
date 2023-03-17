import React from "react";
import styled from "styled-components";
import ContactForm from "./Form";

const PostFrom = () => {
  return (
    <Container>
      <FormTag id="form" />
      <Column>
        <H2>Fill in your details</H2>
        <H3> to get in touch</H3>
      </Column>
      <Div>
        <ContactForm />
      </Div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px 0 80px 0;
  border: solid;
  border-width: 0 1px 1px 0;
`;
const Div = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const H2 = styled.h2`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  font-size: 52px;
  letter-spacing: -1.7px;
  font-weight: 700;
  text-align: left;
  width: 482px;
`;
const H3 = styled.h2`
  font-size: 22px;
  letter-spacing: -1.2px;
  font-weight: 500;
  text-align: left;
  width: 482px;
  margin-top: -16px;
`;

const FormTag = styled.div`
  position: relative;
  top: -140px;
`;

export default PostFrom;

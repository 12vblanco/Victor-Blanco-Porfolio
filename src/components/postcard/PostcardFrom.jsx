import React from "react";
import styled from "styled-components";
import SectionContainer from "../elements/SectionContainer";
import SectionDiv from "../elements/SectionDiv";
import ContactForm from "./Form";

const PostFrom = () => {
  return (
    <SectionContainer>
      <FormTag id="form" />
      <FlexDiv>
        <H2>Fill in your details</H2>
        <H3> to get in touch</H3>
      </FlexDiv>
      <SectionDiv>
        <ContactForm />
      </SectionDiv>
    </SectionContainer>
  );
};

const FlexDiv = styled.div`
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
  @media (max-width: 600px) {
    font-size: 38px;
    margin-left: 12px;
  }
`;

const H3 = styled.h2`
  font-size: 22px;
  letter-spacing: -1.2px;
  font-weight: 500;
  text-align: left;
  width: 482px;
  margin-top: -16px;
  @media (max-width: 600px) {
    margin-left: 14px;
  }
`;

const FormTag = styled.div`
  position: relative;
  top: -140px;
`;

export default PostFrom;

import React from "react";
import styled from "styled-components";
import SectionContainer from "../elements/SectionContainer";
import SectionDiv from "../elements/SectionDiv";
import Title from "../elements/Title";
import ContactForm from "./Form";

const PostFrom = () => {
  return (
    <Div>
      <SectionContainer>
        <FormTag id="form" />
        <FlexDiv>
          <Title>Fill in your details</Title>
          <H3> to get in touch</H3>
        </FlexDiv>
        <SectionDiv>
          <ContactForm />
        </SectionDiv>
      </SectionContainer>
    </Div>
  );
};

const Div = styled.div`
  border-bottom: 1px solid ${CONSTANTS.COLOUR.darkBlue};
  border-right: 1px solid ${CONSTANTS.COLOUR.darkBlue};

  width: 100%;
`;

const FlexDiv = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
`;

const H3 = styled.h2`
  font-size: 22px;
  letter-spacing: -1.2px;
  font-weight: 500;
  text-align: left;
  width: 482px;
  margin-top: 16px;
  margin-bottom: 30px;
  @media (max-width: 600px) {
    margin-left: 24px;
  }
`;

const FormTag = styled.div`
  position: relative;
  top: -140px;
  @media (max-width: 440px) {
    top: -120px;
  }
`;

export default PostFrom;

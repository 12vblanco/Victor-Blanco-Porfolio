import React from "react";
import styled from "styled-components";
import ContactBtn from "../../../components/elements/ContactBtn";

function Success(scrollToTop) {
  const handleBackHome = (scrollToTop) => {
    scrollToTop();
    window.location.href = "/home";
  };
  return (
    <Div>
      <h2>Thank you for submitting the form!</h2>
      <Text>We will get back to you soon.</Text>
      <ContactBtn onClick={handleBackHome} tagName={"Go Back!"} />{" "}
    </Div>
  );
}

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 90vh;
  border-bottom: solid 1px #000;
  border-right: solid 1px #000;

  /* @media (max-width: 860px) {
    height: fit-content;
  }
  @media (max-width: 816px) {
    flex-direction: column;
  } */
`;

const Text = styled.p`
  margin-bottom: 44px;
  font-weight: 500;
`;

export default Success;

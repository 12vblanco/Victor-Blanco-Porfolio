import React from "react";
import styled from "styled-components";
import ContactBtn from "../../components/elements/ContactBtn";

function Success() {
  const handleBackHome = () => {
    // handleToggle();
    window.location.href = "/";
  };
  return (
    <Div>
      <h1>Thank you for submitting the form!</h1>
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
`;

export default Success;

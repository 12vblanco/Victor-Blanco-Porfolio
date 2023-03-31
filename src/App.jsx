import { useState } from "react";
import CookieConsent from "react-cookie-consent";
import styled from "styled-components";
import "./App.css";
import Footer from "./components/footer/Footer";
import HorizontalNav from "./components/navigation/HorizontalNav";
import VerticalNav from "./components/navigation/VerticalNav";
import Home from "./components/pages/Home";

function App() {
  const [count, setCount] = useState(0);

  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <CookieConsent
        containerClasses="cookie_container"
        style={{
          background: "rgba(2, 60, 113, 0.9)",
          fontWeight: "500",
          height: "10vh",
          alignItems: "center",
          fontSize: "18px",
        }}
        buttonStyle={{
          borderRadius: "50px",
          padding: "20px 32px",
          fontSize: "18px",
          fontWeight: "700",
          background: "white",
          color: "rgb(2, 60, 113)",
        }}
        contentStyle={{ textAlign: "left", marginBottom: "12px" }}
      >
        This website uses cookies and third party software to monitor traffic
        anonymously and improve user experience. For more info read my{" "}
        <Span>
          <a href="/terms" aria-label="Visit Victor Blanco's Terms Page">
            terms & conditions
          </a>
        </Span>
      </CookieConsent>
      <HorizontalNav handleToggle={handleToggle} isOpen={isOpen} />
      <VerticalNav handleToggle={handleToggle} isOpen={isOpen} />
      <Home />
      <Footer />
    </>
  );
}

const Span = styled.span`
  a {
    color: white;
    text-decoration: underline;
  }
`;

export default App;

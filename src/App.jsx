import { useState } from "react";
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
      <HorizontalNav handleToggle={handleToggle} isOpen={isOpen} />
      <VerticalNav handleToggle={handleToggle} isOpen={isOpen} />
      <Home />
      <Footer />
    </>
  );
}

export default App;

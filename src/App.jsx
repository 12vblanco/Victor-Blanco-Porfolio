import { useState } from "react";
import "./App.css";
import Footer from "./components/footer/Footer";
import HorizontalNav from "./components/navigation/HorizontalNav";
import VerticalNav from "./components/navigation/VerticalNav";
import Home from "./components/pages/Home";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <HorizontalNav />
      <VerticalNav />
      <Home />
      <Footer />
    </>
  );
}

export default App;

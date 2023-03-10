import React from "react";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Page1 />
      <Page2 />
      <Page3 />
      <Footer />
    </div>
  );
}

export default App;

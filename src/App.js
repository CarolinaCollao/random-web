import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Page1 />
      <Page2 />
    </div>
  );
}

export default App;

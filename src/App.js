import React from "react";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Introduction from "./components/Introduction";
import Technologies from "./components/Technologies";
import Cards from "./components/Cards";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Introduction/>
      <Technologies/>
      <Cards/>
      <Footer/>
    </div>
  );
}

export default App;

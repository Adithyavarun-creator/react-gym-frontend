import React from "react";
import "./App.css";
import Hero from "./components/Hero";
import Join from "./components/Join";
import Plans from "./components/Plans";
import Programs from "./components/Programs";
import Reasons from "./components/Reasons";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="App">
      <Hero />
      <Programs />
      <Reasons />
      <Plans />
      <Testimonials />
      <Join />
      <Footer />
    </div>
  );
};

export default App;

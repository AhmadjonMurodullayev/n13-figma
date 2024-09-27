import React from "react";
import Footer from "./layout/footer/footer";
import Header from "./layout/header/header";
import Hero from "./components/hero/hero";
import Abut from "./components/abut/abut";
import Card from "./components/card/card";
const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Abut />
      <Card />
      <Footer />
    </div>
  );
};

export default App;

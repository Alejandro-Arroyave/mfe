import React from "react";
import MarketingApp from "./components/MarketingApp";
import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <h1>Hello there!!!!</h1>
        <Header />
        <MarketingApp />
      </div>
    </BrowserRouter>
  );
};

export default App;

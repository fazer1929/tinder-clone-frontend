import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Cards from "./components/Cards";
import SwipeButtons from "./components/SwipeButtons";

function App() {
  return (
    //BEM CONVENTION
    <div className="app">
      <Header />
      <Cards />
      <SwipeButtons />
    </div>
  );
}

export default App;

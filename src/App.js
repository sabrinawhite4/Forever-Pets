import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import "./App.css";
import routes from "./routes";
import { useLocation } from "react-router-dom";
require("dotenv").config();

function App() {
  const location = useLocation();
  const isOnProfilePage =
    location.pathname === "/user" || location.pathname === "/shelter" || location.pathname === "/" || location.pathname === "/appointment-confirmation" || location.pathname === "/merch";
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <div className={isOnProfilePage ? "App-wrapper-tall" : "App-wrapper"}>{routes}</div>
        <Footer />
      </header>
    </div>
  );
}

export default App;

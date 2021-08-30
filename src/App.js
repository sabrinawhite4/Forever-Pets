import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import "./App.css";
import routes from "./routes";



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        {routes}
        <Footer />
      </header>
    </div>
  );
}

export default App;

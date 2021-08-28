import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import "./App.css";
import routes from "./routes";
import {Link} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/user">Profile</Link>
          <Link to="/logout">Logout</Link>
          <Link to="/shelter">Shelter Profile</Link>
        </nav>
        <Header />
        {routes}
        <Footer />
      </header>
    </div>
  );
}

export default App;

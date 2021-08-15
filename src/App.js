import React from "react";
import "./App.css";
import routes from "./routes";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <a href="/">Home</a>
          <a href="/user">Profile</a>
          <a href="/#/details">Details</a>
        </nav>
        {routes}
      </header>
    </div>
  );
}

export default App;

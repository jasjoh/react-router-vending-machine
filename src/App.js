import React from "react";
import RoutesList from "./RoutesList";
import { BrowserRouter } from 'react-router-dom';
import NavBar from "./NavBar";

/** Renders the navbar and handles all routes */
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <RoutesList />
      </BrowserRouter>
    </div>
  );
}

export default App;

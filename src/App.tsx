import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import FavoritePage from "./pages/FavoritePage/FavoritePage";
import HomePage from "./pages/HomePage/HomePage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="header">
        <h2 className="logo">Github Search</h2>
        <span>
          <Link className="link" to={"/"}>
            Home
          </Link>
          <Link className="link" to={"/favorite"}>
            Favorite
          </Link>
        </span>
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/favorite" element={<FavoritePage />} />
      </Routes>
    </div>
  );
}

export default App;

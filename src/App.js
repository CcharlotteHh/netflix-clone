/*resume tutorial 1:49:58*/
import React from "react";
import "./App.css";
import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner";
import Nav from "./Nav";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites"
import { Route, Routes } from "react-router-dom"
import SearchResults from "./pages/SearchResult";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/list" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;

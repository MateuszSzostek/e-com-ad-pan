import React, { useEffect } from "react";
import Access from "./domains/access/Access";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Products from "./domains/catalog/products";
import Categories from "./domains/catalog/categories";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/catalog/products" Component={Products} />
        <Route path="/catalog/categories" Component={Categories} />
        <Route path="/access/*" Component={Access} />
      </Routes>
    </Router>
  );
}

export default App;

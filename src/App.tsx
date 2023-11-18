import React from "react";
import Access from "./domains/access/Access";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Products from "./domains/catalog/products";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/products" Component={Products} />
        <Route path="/access/*" Component={Access} />
      </Routes>
    </Router>
  );
}

export default App;

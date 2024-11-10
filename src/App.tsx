import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { Spot } from "./Spot";
import CssBaseline from "@mui/material/CssBaseline";

export function App() {
  return (
    <>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/spot/:id" element={<Spot />} />
        </Routes>
      </Router>
    </>
  );
}

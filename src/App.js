import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import "./App.css";

function App() {
  useEffect(() => {
    console.log("App mounted");
  }, []);

  return (
    <div className="App">
      <BrowserRouter basename="/my-portfolio">
        <Routes>
          <Route path="/" element={<Portfolio />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

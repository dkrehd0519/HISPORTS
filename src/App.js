import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import HomePage from "./hompage/HomePage";
import CreateMatching from "./createMatching/CreateMatching";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="createMatch" element={<CreateMatching />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//Components and Pages
import Header from "./components/Header";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="pages">
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

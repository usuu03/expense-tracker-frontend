import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//Components and Pages
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import ExpenseForm from "./pages/ExpenseForm";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="pages">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/add-expense" exact element={<ExpenseForm />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

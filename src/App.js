import React from "react"
import { Routes, Route } from "react-router-dom"
import { Login } from "./pages/Login" 
import { Signin } from "./pages/Signin";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signin" element={<Signin />} />
    </Routes>
  );
}

export default App;

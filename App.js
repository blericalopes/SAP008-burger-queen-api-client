import React from "react"
import { Routes, Route } from "react-router-dom"
import { Login } from "./pages/Login" 
import { Signin } from "./pages/Signin"
import { System } from "./pages/System"
import { Products } from "./pages/Products"


function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/products" element={<Products />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/system" element={<System />} />
    </Routes>
  );
}

export default App;

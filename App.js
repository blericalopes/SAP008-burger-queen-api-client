import React from "react"
import { Routes, Route } from "react-router-dom"
import { Login } from "./pages/Login" 
import { Signin } from "./pages/Signin"
import { System } from "./pages/System"
import { Menu } from "./pages/Menu"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/system" element={<System />} />
      <Route path="/menu" element={<Menu />} />
    </Routes>
  );
}

export default App;

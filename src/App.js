import React from "react"
import { Routes, Route } from "react-router-dom"
import { Login } from "./pages/Login" 
import { Signin } from "./pages/Signin"
import { System } from "./pages/System"
import { MenuBreakfast } from "./pages/MenuBreakfast"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/system" element={<System />} />
      <Route path="/menu_breakfast" element={<MenuBreakfast />} />
    </Routes>
  );
}

export default App;

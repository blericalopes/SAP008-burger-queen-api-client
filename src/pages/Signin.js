import Button from "../components/button"
import Input from "../components/input"
import { useNavigate } from "react-router-dom";
import { signin } from "../auth";
import { useState } from "react";

export function Signin() {

  const toChange = useNavigate();
  const backLogin = () => {
    toChange("/")
  }

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const create = async () => {
    return await signin(name, email, password, role)
      .then((res) => {
        if (res.code === 403) {
          alert("Email já cadastrado!")
          toChange("/")
        } else {
          toChange("/system");
          localStorage.setItem("id", res.id);
          localStorage.setItem("name", res.name);
          localStorage.setItem("email", res.email);
          localStorage.setItem("role", res.role);
          localStorage.setItem("token", res.token);
        }
      })
  }

  return (
    <>
      <div id="login-signin-container">
        <Input placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)}></Input>
        <Input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}></Input>
        <Input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)}></Input>
        <Input placeholder="Função" value={role} onChange={(e) => setRole(e.target.value)}></Input>
        <Button onClick={create} text={'Criar conta'} />
        <Button onClick={backLogin} text={'Voltar'} />
      </div>
    </>
  )
}
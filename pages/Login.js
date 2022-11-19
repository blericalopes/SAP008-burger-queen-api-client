import Button from "../components/button"
import Input from "../components/input"
import { useNavigate } from "react-router-dom";
import { login } from "../auth";
import { useState } from "react";

export function Login() {

  const toChange = useNavigate();

  const toSignin = () => {
    toChange("./signin")
  }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const btnEnter = async () => {
    return await login(email, password)
      .then((res) => {
        if (res.code === 404) {
          alert("Usuário não encontrado!")
          toChange("/")
        } else if (res.code === 400) {
          alert("Email ou senha inválidos!")
          toChange("/")
        } else {
          toChange("/system");
          localStorage.setItem("token", res.token);
          localStorage.setItem("email", res.email);
          localStorage.setItem("password", res.password);
          
        }       
      })
  }

  return (
    <>
      <div id="login-signin-container">
        <p>Não tem cadastro?</p>
        <Button onClick={toSignin} text={'Cadastre-se aqui!'} />
        <hr></hr>
        <Input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}></Input>
        <Input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)}></Input>
        <Button onClick={btnEnter} text={'Entrar'} />
      </div>
    </>

  )
}
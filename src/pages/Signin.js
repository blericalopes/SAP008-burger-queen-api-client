import Button from "../components/button"
import Input from "../components/input"
import { useNavigate } from "react-router-dom";

export function Signin() {

  const toChange = useNavigate();
  const backLogin = () => {
    toChange("/")
  }

  return (
    <>
      <div id="login-signin-container">
        <Input placeholder="Nome"></Input>
        <Input placeholder="Email"></Input>
        <Input placeholder="Senha"></Input>
        <Input placeholder="Função"></Input>
        <Button text={'Criar conta'} />
        <Button onClick={backLogin} text={'Voltar'} />
      </div>
    </>
  )
}
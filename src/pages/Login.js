import Button from "../components/button"
import Input from "../components/input"
import { useNavigate } from "react-router-dom";

export function Login() {

  const toChange = useNavigate();
  const toSignin = () => {
    toChange("./signin")
  }

  return (
    <>
      <div id="login-signin-container">
        <p>Não tem cadastro?</p>
        <Button onClick={toSignin} text={'Cadastre-se aqui!'} />
        <hr></hr>
        <Input placeholder="Email"></Input>
        <Input placeholder="Senha"></Input>
        <Button text={'Entrar'} />
      </div>
    </>

  )
}
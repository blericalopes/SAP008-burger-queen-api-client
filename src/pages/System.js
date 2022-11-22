import Button from "../components/button"
import { useNavigate } from "react-router-dom";

export function System() {

  const toChange = useNavigate();

  const toOpen = () => {
    toChange("/products")
  }

  return (
    <>
      <div id="system-buttons">
        <Button text={"Café da manhã"} />
        <Button onClick={toOpen} text={'Cardápio dia todo'} />
      </div>
      <div id="system-buttons-orders">
        <Button text={"Pedidos prontos"} />
      </div>

    </>
  )
}
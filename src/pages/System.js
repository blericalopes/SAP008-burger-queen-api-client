import Button from "../components/button"
import { Menu } from "./Menu"

export function System() {

  return (
    <>
      <div className="system-buttons">
        <Button text={"Café da manhã"} />
        <Button text={'Cardápio dia todo'} />
      </div>
      <div className="system-buttons-orders">
        <Button text={"Pedidos prontos"} />
      </div>
      <div id="first-menu">
        <span>{Menu()}</span>
      </div>

    </>

  )
  

}

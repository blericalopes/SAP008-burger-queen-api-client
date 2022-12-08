import Button from "../components/button"
import { MenuBreakfast } from "./MenuBreakfast"
import { MenuAllDay } from "./MenuAllDay"

export function System() {

  const firstMenu = document.querySelector('#first-menu')
  const secondMenu = document.querySelector('#second-menu')

  const seeMenuBreakfast = () => {
    return firstMenu.style.display = 'flex'
  }
  const closeMenuBreakfast = () => {
    firstMenu.style.display = 'none'
  }
  const seeMenuAllDay = () => {
    return secondMenu.style.display = 'flex'
  }
  const closeMenuAllDay = () => {
    secondMenu.style.display = 'none'
  }

  return (
    <div>
      <div className="system-buttons">
        <Button onClick={seeMenuBreakfast} text={"Café da manhã"} />
        <Button onClick={seeMenuAllDay} text={'Cardápio dia todo'} />
        <Button text={"Pedidos prontos"} />
      </div>
      <div id="first-menu">
        <span className="breakfast-list">{MenuBreakfast()} <button className="close" onClick={closeMenuBreakfast}>Fechar</button></span>
      </div>
      <div id="second-menu">
        <span className="breakfast-list">{MenuAllDay()} <button className="close all" onClick={closeMenuAllDay}>Fechar</button></span>
      </div>
    </div>
  )
}

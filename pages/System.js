/* eslint-disable array-callback-return */
import Button from "../components/button"
import { useEffect, useState } from "react"
import { myMenu } from "../api"
import Menu from "../components/menu"

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

  const [products, setProducts] = useState([])
  useEffect(() => {
    myMenu()
      .then((products) => setProducts(products))
  }, [])

  const getValue = (product) => {
    return console.log(product)
  }

  return (
    <div>
      <div className="system-buttons">
        <Button onClick={seeMenuBreakfast} text={"Café da manhã"} />
        <Button onClick={seeMenuAllDay} text={'Cardápio dia todo'} />
        <Button text={"Pedidos prontos"} />
      </div>
      <div id="first-menu">
        <span className="breakfast-list">
          <Menu 
            menuType='breakfast' 
            productList={products} 
            onMenuItemClick={getValue}/> 
        <button className="close" onClick={closeMenuBreakfast}>Fechar</button></span>
      </div>
      <div id="second-menu">
        <span className="all-day-list">
          <Menu 
            menuType='all-day' 
            productList={products} 
            onMenuItemClick={getValue}/> 
        <button className="close" onClick={closeMenuAllDay}>Fechar</button></span>
      </div>
    </div>
  )
}

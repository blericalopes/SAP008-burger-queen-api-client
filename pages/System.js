/* eslint-disable array-callback-return */
import Button from "../components/button"
import { useEffect, useState } from "react"
import { myMenu } from "../api"


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

  function MenuAllDay() {
    return (
      products.map((product) => {
        if (product.type.includes('all-day')) {
          return (
            <button onClick={() => getValue(product)} className="add-itens">
              {product.name} -
              {product.flavor} -
              {product.complement} -
              {product.price}
            </button>
          )
        }
      })
    )
  }

  function MenuBreakfast() {

    return (
      products.map((product) => {
        if (product.type.includes('breakfast')) {
          return (
            <button onClick={() => getValue(product)} className="add-itens">
              {product.name} -
              {product.price}
            </button>
          )
        }
      })
    )
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
        <span className="all-day-list">{MenuAllDay()} <button className="close" onClick={closeMenuAllDay}>Fechar</button></span>
      </div>
    </div>
  )
}

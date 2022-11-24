/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react"
import { myMenu } from "../api"
import Button from "../components/button"
import Menu from "../components/menu"

export function System() {

  const [products, setProducts] = useState([])


  useEffect(() => {
    myMenu()
      .then((products) => setProducts(products))
  }, [])

  const breakfast = () => {
    const menu = products.map((prod) => prod.type)
    console.log(menu.filter(itens => itens.includes("breakfast")))
    
  }

  const allDay = () => {
    const menu = products.map((prod) => prod.type)
    console.log(menu.filter(itens => itens.includes("all-day")))
  }


  return (
    <>
      <div className="system-buttons">
        <Button onClick={breakfast} text={"Café da manhã"} />
        <Button onClick={allDay} text={'Cardápio dia todo'} />
      </div>
      <div className="system-buttons-orders">
        <Button text={"Pedidos prontos"} />
      </div>
      <div className="first-menu">
        <Menu text={"itens itens itens itens"}></Menu>
      </div>      
    </>
  )
}
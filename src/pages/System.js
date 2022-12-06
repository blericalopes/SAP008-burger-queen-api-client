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

  const menu = 
    products.filter((prod) => {
      let breakfast = '';
      if(prod.type.includes('breakfast') === true) {
        breakfast = prod.name
        return breakfast
      }
    })  
  

  
  

  // const menu = products.map((prod) => prod.type)
  // console.log(menu.filter(itens => itens.includes("breakfast")))

  return (
    <>
      <div className="system-buttons">
        <Button onClick={console.log(menu)}text={"Café da manhã"} />
        <Button text={'Cardápio dia todo'} />
      </div>
      <div className="system-buttons-orders">
        <Button text={"Pedidos prontos"} />
      </div>
      <div className="first-menu">
        <Menu></Menu>
      </div>      
    </>
  )
}


  //  const breakfast = () => {
    //  const menu = products.map((prod) => prod.type)
    // console.log(menu.filter(itens => itens.includes("breakfast")))
      
  //  }
  
  //  const allDay = () => {
  //    const menu = products.map((prod) => prod.type)
  //    console.log(menu.filter(itens => itens.includes("all-day")))
  //  }

  // `<div class=breakfast-container>
        // <p>${prod.name}</p>
        //  <p>${prod.flavor}</p>
        // <p>${prod.complement}</p>
        // <p>${prod.proce}</p>
        // </div>`
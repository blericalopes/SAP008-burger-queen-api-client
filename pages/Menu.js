import { useEffect, useState } from "react"
import { myMenu } from "../api"

export function Menu() {

  const [products, setProducts] = useState([])


  useEffect(() => {
    myMenu()
      .then((products) => setProducts(products))
  }, [])

  const menuB = products.map((prod) => {
    let breakfast = ''
    if (prod.type.includes('breakfast') === true) {
      breakfast = prod.name + ' - ' + prod.price
      return breakfast
    }
  })

  return (
    <>     
      <li>{menuB[0]}</li>
      <li>{menuB[1]}</li>
      <li>{menuB[2]}</li>
      <li>{menuB[3]}</li>      
    </>
  )
}


import { useEffect, useState } from "react"
import { myMenu } from "../api"

export function MenuBreakfast() {

  const [products, setProducts] = useState([])


  useEffect(() => {
    myMenu()
      .then((products) => setProducts(products))
  }, [])

  return (
    products.map((product) => {
      if (product.type.includes('breakfast')) {
        return (
          <button id="add" className="add-itens">{product.name} - {product.price}</button>
        )
      }
    })
  )
}


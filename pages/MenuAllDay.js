import { useEffect, useState } from "react"
import { myMenu } from "../api"

export function MenuAllDay() {

  const [products, setProducts] = useState([])


  useEffect(() => {
    myMenu()
      .then((products) => setProducts(products))
  }, [])

  return (
    products.map((product) => {
      if (product.type.includes('all-day')) {
        return (
          <button id="add" className="add-itens">
            {product.name} -
            {product.flavor} -
            {product.price}
          </button>
        )
      }
    })
  )
}
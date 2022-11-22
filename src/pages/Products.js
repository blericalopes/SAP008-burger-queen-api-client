/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react"
import { myMenu } from "../api"

export function Products() {

  const [products, setProducts] = useState([])

  useEffect(() => {
    myMenu()
      .then((products) => setProducts(products))
  }, [])

  return (
    <>
      {products.map(prod => {
        return (
          <div>
            {prod.name}
          </div>
        )
      })}
    </>
  )
}
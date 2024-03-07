
import { CartContext } from "../../context/CartContext"
import "./Counter.css"
import { useContext, useState } from "react"



const Counter = () => {

  const { getTotalItems } = useContext(CartContext)

  let total = getTotalItems()

  return (
    <div className="divCounter">
        <h4>{total}</h4>
    </div>
  )
}

export default Counter

import { CartContext } from "../../context/CartContext"
import "./Counter.css"
import { useContext, useState } from "react"



const Counter = () => {

  const { cart } = useContext(CartContext)

  return (
    <div className="divCounter">
        <h4>{cart.length}</h4>
    </div>
  )
}

export default Counter
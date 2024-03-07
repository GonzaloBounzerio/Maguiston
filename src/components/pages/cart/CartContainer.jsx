import { useContext } from "react"
import Cart from "./Cart"
import { CartContext } from "../../../context/CartContext"
import { Link } from "react-router-dom"



const CartContainer = () => {

  const {cart,clearCart,removeById,getTotalPrice} = useContext(CartContext)

  let total = getTotalPrice()

  return (
    <>
      {
        cart.map( (product) =>
         <div key={product.id}>
          <h1>{product.title}</h1>
          <h2>{product.quantity}</h2>
          <button onClick={() => removeById(product.id)}>ELiminar</button>
         </div>)
      }

      <h2>El total a pagar es ${total}</h2>

      <button onClick={clearCart}>Borar carrito</button>

      <Link to="/checkout">
        <button>Terminar Compra</button>
      </Link>
      <br />
    </>
  )
}

export default CartContainer

import { useState } from "react"
import LoadPage from "../../common/LoadPage"
import Cart from "./Cart"



const CartContainer = () => {

  const [isLoading , setIsLoading] = useState(true)

  setTimeout( () => {
    setIsLoading(false)
  },1500)

  return (
    isLoading ? <LoadPage/> : <Cart/>
  )
}

export default CartContainer
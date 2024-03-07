
import { createContext, useState } from "react"

export const CartContext = createContext()

export const CartContextProvider = ({children}) => {

    const [cart,setCart] = useState ([])

    
    const addToCart = ( product ) =>{

        let existe = isInCart(product.id)

        if (existe) {
            let newArray = cart.map( (elemento) => {
                if (elemento.id === product.id) {
                    return {...elemento,quantity:elemento.quantity+product.quantity}
                }else{
                    return elemento
                }
            })
            
            setCart(newArray)

        }else{
            setCart( [...cart,product])
        }
    }
    
    const isInCart = (id) => {
        let existe = cart.some( (element) => element.id === id);
        return existe
    }

    const clearCart = () => {
        setCart([])
    }

    const removeById = (id) => {
        let newArray = cart.filter((elemento) => elemento.id !== id)
        setCart(newArray)
    }

    let data = {
        cart,
        addToCart,
        clearCart,
        removeById,
    }

  return <CartContext.Provider value={data}>
    {children}
  </CartContext.Provider>
}


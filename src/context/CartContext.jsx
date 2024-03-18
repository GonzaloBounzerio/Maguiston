

import { createContext, useState } from "react"
import Swal from "sweetalert2";

export const CartContext = createContext()

export const CartContextProvider = ({children}) => {

    const [cart,setCart] = useState ( JSON.parse(localStorage.getItem("cart")) || []);
    
    const addToCart = ( product ) =>{

        let existe = isInCart(product.id)

        if (existe) {
            let newArray = cart.map( (elemento) => {
                if (elemento.id === product.id) {
                    return {...elemento,quantity:product.quantity}
                }else{
                    return elemento
                }
            })
            
            setCart(newArray)
            localStorage.setItem("cart",JSON.stringify(newArray))

        }else{
            setCart( [...cart,product])
            localStorage.setItem("cart",JSON.stringify([...cart,product]))
        }
    }
    
    const isInCart = (id) => {
        let existe = cart.some( (element) => element.id === id);
        return existe
    }

    const clearCart = () => {


        Swal.fire({
            title: "¿Seguro?",
            text: "Se borrará todo tu carrito de compras",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si,borrar"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Listo",
                text: "Ahora tu carrito está vacío",
                icon: "success"
              });
              setCart([])
              localStorage.removeItem("cart")
            }
          });
        
    }

    const clearCartCompra = () => {
        setCart([])
        localStorage.removeItem("cart")
    }

    const removeById = (id) => {

        Swal.fire({
            title: "¿Seguro?",
            text: "Se borrará este album del carrito",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si,borrar"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Listo",
                text: "Se borro el album del carrito",
                icon: "success"
              });
                let newArray = cart.filter((elemento) => elemento.id !== id)
                setCart(newArray)
                localStorage.setItem("cart",JSON.stringify(newArray))
            }
        });

        
    }

    const getTotalItems = () => {

        let total = cart.reduce( (acc,elemento) => {
        return acc + elemento.quantity
        },0)
        return total

    }

    const getTotalPrice = () => {

        let total = cart.reduce ( (acc,elemento) => {
            return acc + (elemento.quantity * elemento.price)
        },0)

        return total

    }

    const getTotalQuantityById = (id) => {
        let product = cart.find( (elemento) => elemento.id === id)
        if (product){
            return product.quantity
        }else{
            return product
        }
    }



    let data = {
        cart,
        addToCart,
        clearCart,
        removeById,
        getTotalItems,
        getTotalPrice,
        getTotalQuantityById,
        clearCartCompra
    }

  return <CartContext.Provider value={data}>
    {children}
  </CartContext.Provider>
}


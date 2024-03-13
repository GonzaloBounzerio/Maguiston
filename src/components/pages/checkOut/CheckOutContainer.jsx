import { useContext, useState } from "react";
import { CheckOut } from "./CheckOut";
import { CartContext } from "../../../context/CartContext";
import { addDoc , collection , updateDoc , doc} from "firebase/firestore";
import { db } from "../../../firebaseConfig";


const CheckOutContainer = () => {
  
  const {cart,getTotalPrice,clearCart} = useContext(CartContext)

  const totalPrice = getTotalPrice()

    const [orderID , setOrderID] = useState(null)

    const [userInfo,setUserInfo] = useState({
        name: "",
        phone: "",
        email: "",
    })

    const envioDeFormulario = (event) => {
        event.preventDefault();

        let order = {
          buyer: userInfo,
          items: cart,
          total: totalPrice,
        }

        let ordersCollection = collection ( db , "orders")
        
        addDoc(ordersCollection,order).then( (res) => setOrderID(res.id))
        
        cart.forEach( (product) => {
          let refDoc = doc(db,"products",product.id)
          updateDoc( refDoc , {stock: product.stock - product.quantity} )
        })

        clearCart()

      };

    const captureData = (event) => {
        setUserInfo ( {...userInfo , [event.target.name]:event.target.value})
    }


  return (
    <> <CheckOut envioDeFormulario={envioDeFormulario} captureData={captureData}/> </>
  )
}

export default CheckOutContainer
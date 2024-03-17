
import { HandHeart, LocateFixed } from "lucide-react"
import "./Checkout.css"
import { Link } from "react-router-dom"


export const CheckOut = ({envioDeFormulario,captureData,orderID}) => {  
  
  return (
    <>
    {
      orderID ? (
        <div className="bodyCompraDone">
          <h1>Maguiston</h1>
          <h3>Te agradecemos por tu compra</h3>
          <HandHeart size={250}/>
          <h3>Tu número de orden es: {orderID}</h3>
          <Link to={"/albumes"}>
            <button>Seguir comprando</button>
          </Link>
        </div>
      ) : (
      <div className="bodyFormCheck">
          <h2 className="titleFormCheck">Checkout</h2>
          <h3>Ingresa tus datos para finalizar la compra</h3>
          <form id="formCheck" onSubmit={envioDeFormulario}>
            <input type="text" placeholder="Nombre" name="name" onChange={captureData} required autoComplete="none"/>
            <input type="number" placeholder="Teléfono" name="phone" onChange={captureData} required autoComplete="none"/>
            <input type="email" placeholder="Correo electrónico" name="email" onChange={captureData} required autoComplete="none"/>
            <button type="submit">Finalizar</button>
          </form>
      </div>
      )
    }
    </>
  )
}

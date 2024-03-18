
import "./Cart.css"
import { useContext} from "react"
import { CartContext } from "../../../context/CartContext"
import { Link, useNavigate } from "react-router-dom"
import CardCart from "../../common/CardCart"
import { ShoppingCartIcon} from "lucide-react"
import BackBtn from "../../common/BackBtn"
import Swal from "sweetalert2"


const Cart = () => {

    let navigate = useNavigate()

    const consultaCompra = ( () => {
      Swal.fire({
        title: "Confirmación de compra",
        text: "Una vez confirmada, te enviaremos los datos de pago a la cuenta de mail",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, los quiero!"
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/checkout")
        }
      });

    } )


    const {cart,clearCart,getTotalPrice} = useContext(CartContext)

    let total = getTotalPrice()

  return (
    <>
    <div className="bodyPageCart">
      <BackBtn path={-1}/>
      <div className="cardCart">
        {
            cart.map( (product) => <CardCart key={product.id} id={product.id} title={product.title} quantity={product.quantity} img={product.img} autor={product.autor}/>)
        }
      </div>
      {
        cart.length>0 ? 
        (
        <>
            <div className="finalCart">
                <h3>Total carrito: ${Math.round(total)}</h3>
                <Link className="btnCompra" onClick={consultaCompra}>
                    Comprar
                </Link>
            </div>
            <div className="btnBorrarCart">
                <button onClick={clearCart}>Borrar Carrito</button>
            </div>
        </>
        ) : 
        (
        <div className="noElementCart">
            <h2>Tu carrito está vacío, mirá todos los discos que podes agregar...</h2>
            <span><ShoppingCartIcon  size={250}/></span>
            <Link to={"/albumes"}><button>Ver Álbumes</button></Link>
        </div>
        )
      }
      
    </div>   
    </>
  )
}

export default Cart
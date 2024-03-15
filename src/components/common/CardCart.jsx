
import "./CardCart.css"
import { useContext} from "react"
import { CartContext } from "../../context/CartContext"
import { Trash2 } from "lucide-react"


const CardCart = ({id,title,quantity,img,autor}) => {

    const{removeById}=useContext(CartContext)

  return (
    <div className="cardCartBody">
        <div className="imgCartCard">
            <img src={img} alt="imagen card cart" />
        </div>
        <div className="textCartCard">
            <h3>{title}</h3>
            <h4>{quantity}</h4>
            <h4>de {autor}</h4>
        </div>
        <div className="btnCartCard">
            <button onClick={() => removeById(id)}><Trash2/></button>
        </div>  
    </div>
  )
}

export default CardCart
